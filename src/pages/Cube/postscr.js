
    makeResizableDiv('#minimapDetails')
    var lastTransform = null;
    // const showButton = document.getElementById('showDialog');
    const favDialog = document.getElementById('favDialog');
    // const selectEl = favDialog.querySelector('select');
    const confirmBtn = favDialog.querySelector('#confirmBtn');
    const dataviz_axisZoom = document.getElementById('dataviz_axisZoom');


    // selectEl.addEventListener('change', (e) => {
    //     confirmBtn.value = selectEl.value;
    // })

    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    favDialog.addEventListener('close', () => {
        if (favDialog.returnValue != 'cancel')
            if (confirm(`Вы точно желаете переключиться на съемку ${favDialog.returnValue}?`)) {
                let minmap1 = document.getElementById("minmap1");
                let minmap2 = document.getElementById("minmap2");
                let surveyName = document.getElementById("surveyName");
                if (minmap2.style.display == "none") {
                    minmap1.style.display = "none"
                    minmap2.style.display = ""
                    surveyName.innerHTML = `<b>2010 (съемка 2D), профиль ${profiles[profileIndex]}.segy</b>`
                    document.title = "Интерпретация 2010"
                    templateImage.select("image").attr("xlink:href", "22.segy.png")
                    mode = 1
                }
                else {
                    minmap1.style.display = ""
                    minmap2.style.display = "none"
                    surveyName.innerHTML = `<b>88-11-12 (съемка 3D), ${lastLineType ? "ILine - 750" : "XLine - 800"} </b>`
                    document.title = "Интерпретация 88-11-12"
                    templateImage.select("image").attr("xlink:href", lastLineType ? "1321_2.png" : "1321_1.png")
                    mode = 0
                }
            }
    });
    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    favDialog.addEventListener('close', () => {
        // outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
    });

    window.addEventListener('keydown', function (e) {
        if (!e.ctrlKey) {
            if (Run(e.key)) { }
            else if (e.keyCode == 37) { setProfile(-1); setLine(0, -1) }
            else if (e.keyCode == 38) { setProfile(); setLine(1, -1) }
            else if (e.keyCode == 39) { setProfile(); setLine(0, 1) }
            else if (e.keyCode == 40) { setProfile(-1); setLine(1, 1) }
        }
    });


    function Run(key) {
        let res = false;
        let subMenu1 = document.getElementById("subMenu1")
        let subMenu2 = document.getElementById("subMenu2")
        let footerMenu = document.getElementById("footerMenu")

        if (key == '0' || key.toUpperCase() == 'O') {
            switchSrc()
            res = true
        }
        else if (key == '1' || key.toUpperCase() == 'V') {
            dataviz_axisZoom.style.cursor = "default";
            subMenu1.style.display = subMenu2.style.display = "none"
            res = true
        }
        else if (key == '4' || key == '5' || key == '6' || key.toUpperCase() == 'H') {
            dataviz_axisZoom.style.cursor = "crosshair";
            subMenu1.style.display = footerMenu.style.display = ""
            subMenu2.style.display = "none"
            let gis = document.getElementById("GIS")
            gis.innerHTML = key=='4'?'[РИГИС - 1]':key=='5'? '[Литология -1 ]': '[ГИС - 1]'
            res = true
        }
        else if (key == '3' || key.toUpperCase() == 'F') {
            dataviz_axisZoom.style.cursor = "copy";
            subMenu2.style.display = footerMenu.style.display = ""
            subMenu1.style.display = "none"
            res = true
        }
        else if (key.toUpperCase() == 'P') {
            let minimapDetails = document.getElementById("minimapDetails");
            minimapDetails.open = !minimapDetails.open
            res = true
        }

        footerMenu.style.display = subMenu1.style.display == "none" && subMenu2.style.display == "none" ? "none" : ""

        return res;
    }


    let lastLineType = 0
    let iLineIndex = 750
    let xLineIndex = 800
    function setLine(lineType, inc) {
        if (mode) return;
        let ILine = document.getElementById("ILine");
        let XLine = document.getElementById("XLine");
        if (lastLineType == lineType && !inc) return;
        lastLineType = lineType
        if (lineType == 1) {
            XLine.style.borderLeft = "2px dashed black"
            ILine.style.borderTop = "4px solid black"
            iLineIndex += inc
            let ILineLabel = document.getElementById("ILineLabel");
            ILineLabel.innerHTML = `ILine - ${iLineIndex}`
            ILineLabel.parentNode.style.marginTop = `${iLineIndex - 750}px`
        }
        else {
            XLine.style.borderLeft = "4px solid black"
            ILine.style.borderTop = "2px dashed black"
            xLineIndex += inc
            let XLineLabel = document.getElementById("XLineLabel");
            XLineLabel.innerHTML = `XLine - ${xLineIndex}`
            XLineLabel.parentNode.style.marginLeft = `${xLineIndex - 800}px`
        }

        surveyName.innerHTML = `<b>88-11-12 (съемка 3D), ${lastLineType ? `ILine - ${iLineIndex}` : `XLine - ${xLineIndex}`} </b>`
        templateImage.select("image").attr("xlink:href", lastLineType ? "1321_2.png" : "1321_1.png")
    }

    let profileIndex = 4;
    let profiles = ["07", "08", "10", "21", "22"]
    function setProfile(inc) {
        if (!mode) return;
        if (!inc)
            profileIndex = (++profileIndex) % 5
        else
            if (profileIndex == 0) profileIndex = 4
            else profileIndex--;

        surveyName.innerHTML = `<b>2010 (съемка 2D), профиль ${profiles[profileIndex]}.segy</b>`
        templateImage.select("image").attr("xlink:href", `${profiles[profileIndex]}.segy.png`)
    }

    var mode = 0
    function switchSrc() {
        favDialog.showModal();
    }

    function run(tf) {
        if (tf || confirm("Будет запущено выполнение длительной операции.\n Продолжить?")) {
            let progress = document.getElementById("progress");
            progress.style.display = "none"
            setTimeout(() => { progress.style.display = "" }, 4);
        }
    }

    // set the dimensions and margins of the graph
    var margin = { top: 24, right: 24, bottom: 24, left: 24 },
        width = parent.innerWidth - margin.left - margin.right,
        height = parent.innerHeight - 64 - margin.top - margin.bottom,
        radius = 4,
        opacity = 1,
        // fill = "#61a3a9"
        fill = "#000000";

    // append the SVG object to the body of the page
    var SVG = d3.select("#dataviz_axisZoom")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    var x = d3.scaleLinear().domain([0, 1]).range([0, 0.1]);
    // Add Y axis
    var y = d3.scaleLinear().domain([0, 1]).range([0, 0.1]);

    // Add a clipPath: everything out of this area won't be drawn.
    var defs = SVG.append("defs")
    defs.append("SVG:clipPath")
        .attr("id", "clip")
        .append("SVG:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    defs.append("SVG:clipPath")
        .attr("id", "wellsLineClip")
        .append("SVG:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", -20)

    var templateImage = SVG.append('g')
        .attr("clip-path", "url(#clip)");

    var templateImageText = SVG.append('g')
        .attr("clip-path", "url(#clip)");
    var templateImageTextG = templateImageText.append('g')

    var wellCount = 0;

    var wellData = [];


    // var svgWells = d3.select("#minimap_content").append("svg");

    var svgWells = d3.select("#minimap_content")
        .append("svg")
        .attr("width", 1200)
        .attr("height", 1200)
        .append("g")
        .attr("transform", "translate(0,0)");

    var scatter = svgWells.append('g');
    var isolines = svgWells.append('g');
    var wellData = [{ key: `line1`, color: "red", values: [] }]
    scatter.selectAll('.line-group')
        .data(wellData).enter()
        .append('g')
        .attr('class', 'line-group')
        .append('path')
        .attr('class', 'line')
        .attr('d', d => d3.line()
            .x(function (d) { return x(d.x) })
            .y(function (d) { return y(d.y) })
            (d.values))
        .style('stroke', (d, i) => d.color)
        .style("stroke-width", 4)
        .style("fill", "none")
        .style('opacity', 1);

    function AddWell() {
        templateImage.append("image")
            .attr("xlink:href", "Scheme2.png")
            .attr("x", x((width + 200) * wellCount))
            .attr("y", y(2))
            .attr("width", x(width))
            .attr("height", y(-height));
        templateImageText.append("text")
            .attr("x", x((width + 200) * wellCount))
            .attr("y", y(2))
            .style("font-weight", "600")
            .style("font-size", "10pt")
            .text(this.getAttribute("name"))

        if (lastTransform) {
            templateImage.selectAll("image").attr('transform', lastTransform);
            templateImageText.selectAll("text").attr('transform', lastTransform);
        }

        wellCount++
        // this.style.backgroundColor="#65b1e4";
        this.style.backgroundColor = "#e92064";
        let progress = document.getElementById("progress");
        progress.style.display = "none"
        setTimeout(() => { progress.style.display = "" }, 0);
        wellData[0].values.push({ x: this.offsetLeft + 4, y: this.offsetTop + 4 });
        // console.log(wellData[0])
        scatter.selectAll("path")
            .attr("d", d => d3.line()
                .x(function (d) { return d.x })
                .y(function (d) { return d.y })
                (d.values));
    }

    let isolinesData = DrawIsoline(document.getElementById('minimap_cormap'), document.getElementById('minimap_content'), AddWell, 300);

    isolines.selectAll('.line-group-isolines')
        .data(isolinesData[0]).enter()
        .append('g')
        .attr('class', 'line-group-isolines')
        .append('path')
        .attr('class', 'line')
        .attr('d', d => d3.line().curve(d3.curveCatmullRomClosed.alpha(0.5))
            .x(function (d) { return d.x })
            .y(function (d) { return d.y })
            (d.points))
        .style('stroke', (d) => d.strokeStyle)
        .style("stroke-width", (d) => d.lineWidth)
        .style("fill", "none")
        .style('opacity', 1);

    isolines.selectAll('.line-group-isolines-open')
        .data(isolinesData[1]).enter()
        .append('g')
        .attr('class', 'line-group-isolines-open')
        .append('path')
        .attr('class', 'line')
        .attr('d', d => d3.line().curve(d3.curveCatmullRom.alpha(0.5))
            .x(function (d) { return d.x })
            .y(function (d) { return d.y })
            (d.points))
        .style('stroke', (d) => d.strokeStyle)
        .style("stroke-width", (d) => d.lineWidth)
        .style("fill", "none")
        .style('opacity', 1);

    // Set the zoom and Pan features: how much you can zoom, on which part, and what to do when there is a zoom
    var zoom = d3.zoom()
        .scaleExtent([1, 20])  // This control how much you can unzoom (x0.5) and zoom (x20)
        .extent([[0, 0], [width, height]])
        .on("zoom", updateChart);

    // This add an invisible rect on top of the chart area. This rect can recover pointer events: necessary to understand when the user zoom
    var rect = SVG.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .call(zoom);

    var newX = x, newY = y;
    // now the user can zoom and it will trigger the function called updateChart
    // A function that updates the chart when the user zoom and thus new boundaries are available
    function updateChart() {
        // recover the new scale
        lastTransform = d3.event.transform
        templateImage.selectAll("image").attr('transform', lastTransform);
        templateImageText.selectAll("text").attr('transform', lastTransform);
    }


    function ClearAll() {
        console.log("ClearAll")
        templateImage.selectAll("image").remove()
        templateImageText.selectAll("text").remove();
        wellData[0].values = [];
        scatter.selectAll("path")
            .attr("d", d => d3.line()
                .x(function (d) { return d.x })
                .y(function (d) { return d.y })
                (d.values));
        for (let m of document.querySelectorAll(".minimap-well"))
            m.style.backgroundColor = "#003f5c";
        wellCount = 0;
    }
