// простой парсер файла разломов, читает последн. 5 столбцов
function parseFault(text) {
    let lines = text.trim().split('\n');
    let faults = {}
    let tops = [];
    for (let line of lines) {
        let arr = line.trim().split(/\s+/);
        let stikIndex = +arr.pop()
        let faultName = arr.pop()
        let point = { z: +arr.pop(), y: +arr.pop(), x: +arr.pop() }
        let fault = faults[faultName];
        if (!fault) {
            fault = faults[faultName] = [];
            tops[faultName] = []
        }
        let stik = fault[stikIndex];
        if (!stik) {
            stik = fault[stikIndex] = [];
            tops[faultName].push({ z: point.z, y: point.y, x: point.x, s: stikIndex })
        }
        stik.push(point)
    }

    return { faults: faults, tops: tops }
}


// Выстроить стики вдоль одной кривой
function arrange(data) {
    // позиция последнего добавленно стика
    let cursorPos = 0;
    // очередь точек инексов стиков
    let queue = [cursorPos];
    // список стиков добавленных в очередь
    let skipSet = new Set([cursorPos]);

    let stickCount = data.length

    // расчет расстояния между вешинами i и j с кэшированием
    let distances = []
    let distance = (i, j) => {
        let index = i < j ? i * stickCount + j : i + stickCount * j;
        let distance = distances[index]
        if (!distance) {
            let pointI = data[i];
            let pointJ = data[j];
            distance = distances[index] = Math.sqrt((pointI.x - pointJ.x) ** 2 + (pointI.y - pointJ.y) ** 2)
        }
        return distance;
    }

    // поиск следующей подхожящей вершины
    let findNext = (i) => {
        let j = 0;
        while (skipSet.has(j) && j < stickCount) j++;
        if (j == stickCount) return null;
        let position = j;
        let minDistance = distance(i, j);
        while (j < stickCount) {
            if (!skipSet.has(j)) {
                let d = distance(i, j)
                if (minDistance > d) {
                    minDistance = d;
                    position = j
                }
            }
            j++;
        }
        return { distance: minDistance, position: position }
    }

    let step = 0;
    let leftPos = rightPos = cursorPos;
    let nextLeft = { position: cursorPos };
    let nextRight = { position: cursorPos };
    do {
        // находим первый наиближайший элемент слева и справа соответсвенно
        if (nextLeft?.position == cursorPos) nextLeft = findNext(leftPos);
        if (nextRight?.position == cursorPos) nextRight = findNext(rightPos);

        cursorPos = -1;
        if (nextLeft && nextRight) {
            if (nextLeft.distance < nextRight.distance) {
                cursorPos = leftPos = nextLeft.position
                queue.unshift(cursorPos)
            }
            else {
                cursorPos = rightPos = nextRight.position
                queue.push(cursorPos)
            }
        }
        else if (nextLeft) {
            cursorPos = leftPos = nextLeft.position
            queue.unshift(cursorPos)
        }
        else if (nextRight) {
            cursorPos = rightPos = nextRight.position
            queue.push(cursorPos)
        }

        skipSet.add(cursorPos)
    }
    // завершаем если нет больше подходящих элементов или количестово шагов перевалило за допустимое
    while (cursorPos != -1 && step++ <= stickCount)

    return queue.map(i => data[i]);
}

// триагуляция разломов с учетом стиков
function triangulate(faults) {
    let positions = [];
    let indices = [];

    // вспомогательные функции
    let push = (p) => { positions.push(p.x, -p.z * 8, p.y); return positions.length / 3 - 1; }
    let half = (p1, p2) => ({ x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2, z: (p1.z + p2.z) / 2 })
    let distances = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);

    let stick1 = null;
    let stick2 = faults[0].sort((a, b) => a.z < b.z ? 1 : -1)

    for (let k = 1; k < faults.length; k++) {

        stick1 = stick2
        stick2 = faults[k].sort((a, b) => a.z < b.z ? 1 : -1)

        // тут применяем DTWшку для сопоставления узлов дух стиков
        let dtw = new DynamicTimeWarping(stick1, stick2, distances);
        let path = dtw.getPath();

        // формируем треугольники      
        let j00 = path[0][0]
        let p00 = stick1[j00]
        let i0 = push(p00)

        let j10 = path[0][1]
        let p10 = stick2[j10];
        let i2 = push(p10)

        for (let i = 0; i < path.length; i++) {

            let j01 = path[i][0]
            let p01 = stick1[j01]
            let i1 = push(p01)

            let j11 = path[i][1]
            let p11 = stick2[j11];
            let i3 = push(p11)

            if (j00 != j01 && j10 != j11) {
                let p = half(half(p00, p01), half(p10, p11))
                let ii = push(p)

                /// добавляем 4 треугольника
                /// j00 +---+ j10
                ///     |\ /|
                ///     | x |
                ///     |/ \|
                /// j01 +---+ j11
                indices.push(
                    i0, i2, ii,
                    i2, i3, ii,
                    i3, i1, ii,
                    i1, i0, ii)
            }
            else {
                /// добавляем 1треугольник, т.к. 2 вершины 4-х угольника совпали 
                if (j00 == j01) indices.push(i0, i2, i3)
                else
                    indices.push(i0, i2, i1)
            }

            // переприсваиваем значения для следующего ряда
            j00 = j01, j10 = j11, p00 = p01, i0 = i1, p10 = p11, i2 = i3

        }
    }
    return { positions: positions, indices: indices }
}