// Шаблоны цветов можно взять тут: https://coolors.co/palettes/maps 
// Шаблоны цветов можно взять тут: https://colorkit.co/color/003f5c/
// Перетаскивание элементов между вкладками тут: https://codepen.io/tianalima/pen/NWzKrzb
function DrawIsoline(canvas, markers, addWell, wellCount) {
    // 'use strict';
    let EPS = 1e-7; // эпсилон для работы с вещественными числами

    // подключение canvas
    // let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    // генерация точек множества при помощи нормального распределения
    const size = wellCount || 300;
    let pts = [];
    let ptsValue = [];
    let width = canvas.width - 20
    let height = canvas.height - 20
    let maxDx = width / 3
    let maxDy = height / 3
    for (let i = 0; i < size; i++) {
        let x = 10 + Math.random() * width, y = 10 + Math.random() * height;
        pts.push([Math.round(x), Math.round(y)]);
        // ptsValue.push(Math.sin((y / canvas.height - 0.5) ** 2 + (x / canvas.width - 0.5) ** 2))
        ptsValue.push((Math.cos(10 * (y / canvas.height - 0.5)) + Math.sin((x / canvas.width - 0.5) * 10) * Math.random()) * 100)
        // ptsValue.push(Math.trunc(Math.random() * 10))
    }
    var minZ = Math.min(...ptsValue)
    var maxZ = Math.max(...ptsValue)

    // функция, находящая треугольник, содержащий все точки множества
    function big_triangle(points) {
        let minx = 1000000, maxx = -1000000, miny = 1000000, maxy = -1000000;
        for (let i = 0; i < points.length; i++) {
            minx = Math.min(minx, points[i][0]);
            miny = Math.min(miny, points[i][1]);
            maxx = Math.max(maxx, points[i][0]);
            maxy = Math.max(maxy, points[i][1]);
        }
        let dx = maxx - minx, dy = maxy - miny;
        let dxy = Math.max(dx, dy);
        let midx = dx * 0.5 + minx, midy = dy * 0.5 + miny;
        return [
            [midx - 10 * dxy, midy - 10 * dxy],
            [midx, midy + 10 * dxy],
            [midx + 10 * dxy, midy - 10 * dxy]
        ]
    }

    // вычисление центра и радиуса описанной окружности вокруг треугольника
    function circumcircle_of_triangle(points, v1, v2, v3) {
        //console.log(v1, v2, v3);
        let x1 = points[v1][0], y1 = points[v1][1];
        let x2 = points[v2][0], y2 = points[v2][1];
        let x3 = points[v3][0], y3 = points[v3][1];
        let dy12 = Math.abs(y1 - y2), dy23 = Math.abs(y2 - y3);
        let xc, yc;
        if (dy12 < EPS) {
            let m2 = -((x3 - x2) / (y3 - y2));
            let mx2 = (x2 + x3) / 2, my2 = (y2 + y3) / 2;
            xc = (x1 + x2) / 2, yc = m2 * (xc - mx2) + my2;
        }
        else if (dy23 < EPS) {
            let m1 = -((x2 - x1) / (y2 - y1));
            let mx1 = (x1 + x2) / 2, my1 = (y1 + y2) / 2;
            xc = (x2 + x3) / 2, yc = m1 * (xc - mx1) + my1;
        }
        else {
            let m1 = -((x2 - x1) / (y2 - y1)), m2 = -((x3 - x2) / (y3 - y2));
            let mx1 = (x1 + x2) / 2, my1 = (y1 + y2) / 2;
            let mx2 = (x2 + x3) / 2, my2 = (y2 + y3) / 2;
            xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
            if (dy12 > dy23) yc = m1 * (xc - mx1) + my1;
            else yc = m2 * (xc - mx2) + my2;
        }
        let dx = x2 - xc, dy = y2 - yc;
        return { 'a': v1, 'b': v2, 'c': v3, 'x': xc, 'y': yc, 'r': dx * dx + dy * dy };
    }

    // функция, удаляющая кратные ребра
    function delete_multiples_edges(edges) {
        for (let j = edges.length - 1; j >= 0;) {
            let b = edges[j]; j--;
            let a = edges[j]; j--;
            let n, m;
            for (let i = j; i >= 0;) {
                n = edges[i]; i--;
                m = edges[i]; i--;
                if (a === m && b === n) {
                    edges.splice(j + 1, 2);
                    edges.splice(i + 1, 2);
                    break;
                }
                if (a === n && b === m) {
                    edges.splice(j + 1, 2);
                    edges.splice(i + 1, 2);
                    break;
                }
            }
        }
    }

    // функция, находящая триангуляцию
    function triangulate(points) {
        let n = points.length;
        if (n < 3) return []; // треугольников нет
        points = points.slice(0); // копия массива

        // массив индексов, отсортированных по координате икс
        let ind = [];
        for (let i = 0; i < n; i++) ind.push(i);
        ind.sort(function (l, r) {
            return points[r][0] - points[l][0];
        })

        // находим треугольник, содержащий все точки, и вставлем его в конец массива с вершинами
        let big = big_triangle(points);
        points.push(big[0]);
        points.push(big[1]);
        points.push(big[2]);

        let cur_points = [circumcircle_of_triangle(points, n, n + 1, n + 2)];
        let ans = [];
        let edges = [];

        // перебираем все точки
        for (let i = ind.length - 1; i >= 0; i--) {
            // перебираем все треугольники
            // если точка находится внутри треугольника, то нужно его удалить
            for (let j = cur_points.length - 1; j >= 0; j--) {
                // если точка справа от описанной окружности, то треугольник проверять больше не нужно
                // точки отсортированы и поэтому тоже будут справа
                let dx = points[ind[i]][0] - cur_points[j].x;
                if (dx > 0 && dx * dx > cur_points[j].r) {
                    ans.push(cur_points[j]);
                    cur_points.splice(j, 1);
                    continue;
                }

                // если точка вне окружности, то треугольник изменять не нужно
                let dy = points[ind[i]][1] - cur_points[j].y;
                if (dx * dx + dy * dy - cur_points[j].r > EPS) {
                    continue;
                }
                // удаляем треугольник и добавляем его стороны в список ребер
                edges.push(
                    cur_points[j].a, cur_points[j].b,
                    cur_points[j].b, cur_points[j].c,
                    cur_points[j].c, cur_points[j].a
                );
                cur_points.splice(j, 1);
            }
            // удаляем кратные ребра
            delete_multiples_edges(edges);
            // создаем новые треугольники последовательно по списку ребер
            for (let j = edges.length - 1; j >= 0;) {
                let b = edges[j]; j--;
                if (j < 0) break;
                let a = edges[j]; j--;
                cur_points.push(circumcircle_of_triangle(points, a, b, ind[i]));
            }
            edges = [];
        }
        // формируем массив с триангуляцией
        for (let i = cur_points.length - 1; i >= 0; i--) {
            ans.push(cur_points[i]);
        }
        let tr = []
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].a < n && ans[i].b < n && ans[i].c < n) {
                tr.push(ans[i].a, ans[i].b, ans[i].c);
            }
        }
        //console.log(tr);
        return tr;
    }

    // отрисовка триангуляции
    ctx.strokeStyle = "black";
    let triangles = triangulate(pts);
    // отрисовка сгенерированных точек
    for (let i = 0; i < pts.length; i++) {
        ctx.beginPath();
        ctx.arc(pts[i][0], pts[i][1], 5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    //console.log(minZ, maxZ);
    let lines = {};
    let linesColor = {};
    // let colors = ["#54478c", "#2C699A", "#048BA8", "#0DB39E", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"]
    // let colors = ["#f9a825", "#f56b00", "#c62828", "#c2185b", "#e92064", "#911fa2", "#9010d1", "#7448dd", "#3e3acb", "#2044d5", "#016bdc", "#2196f3", "#00bcd4", "#0088a3", "#008f7c", "#00a352", "#1abc1a", "#6fb80a", "#70788b",]
    // let colors = ["#c7522a", "#e5c185", "#f0daa5", "#f0daa5", "#fbf2c4", "#b8cdab", "#74a892", "#008585", "#004343"]
    let colors = ["#963e20", "#af4825", "#d68a58", "#e5c185", "#85e5c1", "#fbf2c4", "#b8cdab", "#74a892", "#008585", " #004343"]
    // let colors = ["#00202e", "#003f5c", "#2c4875", "#8a508f", "#bc5090", "#ff6361", "#ff8531", "#ffa600", "#ffd380"]


    let nnn = 20;//colors.length
    let lenZ = maxZ - minZ
    let dz = lenZ / nnn;

    let getColor = (z) => {
        let x = (z - minZ) / lenZ;
        let c = [1, 1, 1]
        if (x < 0.25)
            c = [0.0, 4.0 * x, 1.0];
        else if (x < 0.5)
            c = [0.0, 1.0, 1.0 + 4.0 * (0.25 - x)];
        else if (x < 0.75)
            c = [4.0 * (x - 0.5), 1.0, 0.0];
        else
            c = [1.0, 1.0 + 4.0 * (0.75 - x), 0.0];

        return `rgb(${Math.trunc(c[0] * 255)},${Math.trunc(c[1] * 255)},${Math.trunc(c[2] * 255)})`;
    }


    for (let k = 0; k < nnn - 1; k++) {
        const z = minZ + (k + 0.5) * dz;
        lines[z] = []
        lines[z].k = k
        linesColor[z] = getColor(z);//colors[k % colors.length]
    }

    let check = (x0, y0, z0, x1, y1, z1, x2, y2, z2) => {
        if (
            Math.abs(x0 - x1) + Math.abs(x0 - x2) + Math.abs(x1 - x2) < maxDx * 2 &&
            Math.abs(y0 - y1) + Math.abs(y0 - y2) + Math.abs(y1 - y2) < maxDy * 2
        ) {
            for (let z in lines) {
                const sign0 = Math.sign(z - z0)
                const sign1 = Math.sign(z - z1)
                const sign2 = Math.sign(z - z2)

                if (sign0 != sign1 || sign0 != sign2) {
                    let p0x = 0
                    let p0y = 0
                    let p1x = 0
                    let p1y = 0

                    if (sign1 == sign2) {
                        p0x = (z - z0) / (z1 - z0) * (x1 - x0) + x0
                        p0y = (z - z0) / (z1 - z0) * (y1 - y0) + y0
                        p1x = (z - z0) / (z2 - z0) * (x2 - x0) + x0
                        p1y = (z - z0) / (z2 - z0) * (y2 - y0) + y0
                    }
                    else
                        if (sign2 == sign0) {
                            p0x = (z - z1) / (z2 - z1) * (x2 - x1) + x1
                            p0y = (z - z1) / (z2 - z1) * (y2 - y1) + y1
                            p1x = (z - z1) / (z0 - z1) * (x0 - x1) + x1
                            p1y = (z - z1) / (z0 - z1) * (y0 - y1) + y1
                        }
                        else {
                            p0x = (z - z2) / (z0 - z2) * (x0 - x2) + x2
                            p0y = (z - z2) / (z0 - z2) * (y0 - y2) + y2
                            p1x = (z - z2) / (z1 - z2) * (x1 - x2) + x2
                            p1y = (z - z2) / (z1 - z2) * (y1 - y2) + y2
                        }

                    lines[z].push([p0x, p0y, p1x, p1y])
                }
            }

            // ctx.strokeStyle = "whitesmoke";
            // ctx.beginPath();
            // ctx.moveTo(x0, y0);
            // ctx.lineTo(x1, y1);
            // ctx.lineTo(x2, y2);
            // ctx.closePath();
            // ctx.stroke();
        }
    }

    // отрисовка треугольников
    for (let i = 0; i < triangles.length;) {
        const t0 = triangles[i++]
        const t1 = triangles[i++]
        const t2 = triangles[i++]

        const z0 = ptsValue[t0]
        const z1 = ptsValue[t1]
        const z2 = ptsValue[t2]
        const x0 = pts[t0][0]
        const y0 = pts[t0][1]
        const x1 = pts[t1][0]
        const y1 = pts[t1][1]
        const x2 = pts[t2][0]
        const y2 = pts[t2][1]

        const xc = (x0 + x1 + x2) / 3
        const yc = (y0 + y1 + y2) / 3
        const zc = (z0 + z1 + z2) / 3

        check(xc, yc, zc, x0, y0, z0, x1, y1, z1)
        check(xc, yc, zc, x1, y1, z1, x2, y2, z2)
        check(xc, yc, zc, x2, y2, z2, x0, y0, z0)
    }
    ctx.fillStyle = "black";

    let eq = (x1, y1, x2, y2) => (x1 - x2) ** 2 + (y1 - y2) ** 2 < 1.e-3

    let isolines = []
    let openisolines = []

    for (let z in lines) {
        let queue = lines[z];
        if (queue.length) {
            let newLine;
            do {
                newLine = queue.pop()
                let lll = 0
                while (newLine.length != lll) {
                    lll = newLine.length
                    let startLen = queue.length
                    for (let i = 0; i < startLen * 2 && queue.length; i++) {
                        let q = queue.pop()
                        let lastX = newLine.at(-2)
                        let lastY = newLine.at(-1)
                        let firstX = newLine[0]
                        let firstY = newLine[1]

                        let p0x = q[0]
                        let p0y = q[1]
                        let p1x = q[2]
                        let p1y = q[3]

                        if (eq(lastX, lastY, p0x, p0y))
                            newLine.push(p1x, p1y)
                        else
                            if (eq(lastX, lastY, p1x, p1y))
                                newLine.push(p0x, p0y)
                            else
                                if (eq(firstX, firstY, p0x, p0y))
                                    newLine.unshift(p1x, p1y)
                                else
                                    if (eq(firstX, firstY, p1x, p1y))
                                        newLine.unshift(p0x, p0y)
                                    else {
                                        queue.unshift(q)
                                    }
                    }
                }

                let isClosePath = newLine.at(-1) == newLine[1] && newLine.at(-2) == newLine[0]


                let points = [];
                for (let i = 0; i < newLine.length - (isClosePath ? 2 : 0); i += 2) {
                    points.push({ x: newLine[i], y: newLine[i + 1] })
                }

                if (isClosePath)
                    isolines.push({
                        level: z,
                        strokeStyle: linesColor[z],
                        lineWidth: queue.k % 5 ? 1 : 3,
                        points: points
                    })
                else
                    openisolines.push({
                        level: z,
                        strokeStyle: linesColor[z],
                        lineWidth: queue.k % 5 ? 1 : 3,
                        points: points
                    })

            }
            while (queue.length)
        }
    }

    ctx.lineWidth = 1
    // отрисовка сгенерированных точек
    for (let i = 0; i < pts.length; i++) {
        let m = document.createElement('div')
        m.style = `position:absolute;left:${pts[i][0]}px;top:${pts[i][1]}px;width:12px;height:12px;margin:-6px;border-radius:6px;box-sizing:border-box; cursor:pointer;color:#003f5c;background:#003f5c`
        m.setAttribute("name", `Well-${i + 1}`);
        m.innerHTML = `<span style="margin-left:16px;background:white;">Well${i + 1}</span>`
        m.className = `minimap-well`
        m.onclick = addWell;
        m.setAttribute("title", `Well-${i + 1}`);
        markers.appendChild(m);
    }

    return [isolines, openisolines]
}

