
import './d2353f987179b9fa88b8.css';
import './28360769f05063d61370.css';
import './2e62e44cd0ed569adfee.css';
import './012a0cf1d6b5333cad0e.css';
import './072c49a921a1de6442db.css';
import './one.css';

export default function Cube() {


  return (
    <div>




<div id="dataviz_axisZoom"></div>

<div className="minimap">
    <details open id="minimapDetails">
        <div className="resizer top-left"></div>
        <summary className="dragger" style={{padding: '4px', margin: '4px'}}
            title="Мини карта, инструмент визуальной/быстрой оценки работы&#013;Свернуть/развернуть - P (oPen)">Мини
            карта</summary>

            <label className="MixFocus" style={{position: 'absolute', right: '8px', top: '2px'}}  title="Очистить разрез">
              <input type="radio" className="ChoiceGroup-Input" name="ChoiceGroup"
                value="ChoiceGroup-выбор"/><button
                className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                style={{zIndex: '100'}}>
                  <span className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                        <g transform="translate(-6,-6)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M4.01 4c0-1.1.89-2 1.99-2h7.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V20c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM13 3.5V8a1 1 0 0 0 1 1h4.5L13 3.5zm-.3 12.314 1.414-1.414 1.414 1.414 1.415-1.414 1.414 1.414-1.414 1.415 1.414 1.414-1.414 1.414-1.415-1.414-1.414 1.414-1.414-1.414 1.414-1.415-1.414-1.414z">
                            </path>
                        </g>
                    </svg>
                </span>
            </button>
          </label>

        <div className="content" style={{position: 'relative'}}>
            <div id="minimap_content">
                <canvas id="minimap_cormap" width="1200" height="1200"
                    style={{position: 'absolute', left: '0', right: '0'}}></canvas>
            </div>
        </div>
    </details>
</div>



<dialog id="favDialog" style={{border:'1px solid silver',borderRadius:'4px'}}>
    <form method="dialog">
        <div style={{height: '600px'}}>
            <table className="myTable">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Тип</th>
                    <th>Опорная<br/>глубина</th>
                    <th>Устье</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Well-1</td>
                    <td>Тип-1</td>
                    <td>10.00</td>
                    <td>x:1000,y:1000</td>
                </tr>
                <tr>
                    <td>Well-2</td>
                    <td>Тип-1</td>
                    <td>11.00</td>
                    <td>x:2000,y:1020</td>
                </tr>
                <tr>
                    <td>Well-3</td>
                    <td>Тип-2</td>
                    <td>09.00</td>
                    <td>x:1000,y:3000</td>
                </tr>
                <tr>
                    <td>Well-4</td>
                    <td>Тип-2</td>
                    <td>11.01</td>
                    <td>x:1100,y:1010</td>
                </tr>
                <tr>
                    <td>Well-5</td>
                    <td>Тип-3</td>
                    <td>10.10</td>
                    <td>x:1000,y:2100</td>
                </tr>
                <tr>
                    <td>Well-6</td>
                    <td>Тип-3</td>
                    <td>10.01</td>
                    <td>x:1100,y:1500</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div style={{textAlign:'center'}}>
            <button value="cancel">Отмена</button>
            <button id="confirmBtn" value="88-11-12">Применить</button>
        </div>
    </form>
</dialog>

<footer style={{ position: 'fixed', bottom: 0, zIndex: 10000, width: '100%', justifyContent: 'center', bottom: '16px' }}>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div id="footerMenu" className="che--LayoutRow che--LayoutRow_height_m"
            style={{ width: 'fit-content', borderRadius: '4px', padding: '8px', display: 'none', backgroundColor: '#ffffff' }}>
            <div className="che--LayoutRow-Side che--LayoutRow-Side_position_center" id="subMenu1"
                style={{display: 'none'}}>
                <div className="che--Header-RowCenterLeft">
                    <div className="ChoiceGroupVariants">
                        <div className="ChoiceGroupVariants-Component">
                            <div
                                className="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ">
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g transform="translate(-4,-4)">
                                                    <path d="M13 2h-2v9H2v2h9v9h2v-9h9v-2h-9V2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <label id="GIS" className="ChoiceGroup-Label MixFocus" onClick={run}>[ГИС-1]
                                </label>
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g transform="translate(-2,0)">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h2V4h-6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H3v2h2v13zm6-11v9H9V8h2zm4 9V8h-2v9h2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                    <div className="ChoiceGroupVariants">
                        <div className="ChoiceGroupVariants-Component">
                            <div
                                className="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ChoiceGroup_onlyIcon">
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"
                                                        fill="blue"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div className="ChoiceGroup-Divider"></div>
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-горизонт"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="m2.75 2 2.36 2.753A10 10 0 0 1 22 12h-2A8 8 0 0 0 6.413 6.274L8.75 9h-7l1-7zM21 22l-2.36-2.753A10 10 0 0 1 1.75 12h2a8 8 0 0 0 13.587 5.726L15 15h7l-1 7z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div className="ChoiceGroup-Divider"></div><label
                                    className="ChoiceGroup-Label MixFocus"><input type="radio" className="ChoiceGroup-Input"
                                        name="ChoiceGroup" value="ChoiceGroup-разлом"/>
                                    <button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z"
                                                        fill="red"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="che--LayoutRow-Side che--LayoutRow-Side_position_center" id="subMenu2"
                style={{display: 'none'}}>
                <div className="che--Header-RowCenterLeft">
                    <div className="ChoiceGroupVariants">
                        <div className="ChoiceGroupVariants-Component">
                            <div
                                className="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ">
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g transform="translate(-4,-4)">
                                                    <path d="M13 2h-2v9H2v2h9v9h2v-9h9v-2h-9V2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <label className="ChoiceGroup-Label MixFocus" onClick={run}>[Маркер-1]
                                </label>
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g transform="translate(-2,0)">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h2V4h-6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H3v2h2v13zm6-11v9H9V8h2zm4 9V8h-2v9h2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                    <div className="ChoiceGroupVariants">
                        <div className="ChoiceGroupVariants-Component">
                            <div
                                className="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ChoiceGroup_onlyIcon">
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="M3 11H2c0-1.575.363-3.125 1.044-4.463l.915.408C3.34 8.141 3 9.55 3 11ZM11 2v1c-1.481 0-2.88.326-4.066.944l-.415-.912C7.852 2.35 9.398 2 11 2Z"
                                                        fill="#0679BB"></path>
                                                    <path
                                                        d="M4 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                                        fill="var(--color-typo-primary)"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div className="ChoiceGroup-Divider"></div>
                                <label className="ChoiceGroup-Label MixFocus"><input type="radio"
                                        className="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-горизонт"/><button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path d="M4 9.5V3l8 2v8" stroke="var(--color-typo-primary)"
                                                        fill="none">
                                                    </path>
                                                    <circle cx="12" cy="13" r="2" fill="var(--color-bg-caution)">
                                                    </circle>
                                                    <circle cx="4" cy="3" r="2" fill="var(--color-bg-warning)">
                                                    </circle>
                                                    <circle cx="4" cy="11" r="2" fill="var(--color-bg-normal)">
                                                    </circle>
                                                    <circle cx="12" cy="5" r="2" fill="var(--color-bg-success)">
                                                    </circle>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div className="ChoiceGroup-Divider"></div><label
                                    className="ChoiceGroup-Label MixFocus"><input type="radio" className="ChoiceGroup-Input"
                                        name="ChoiceGroup" value="ChoiceGroup-разлом"/>
                                    <button
                                        className="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style={{zIndex: '100'}}><span
                                            className="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" className="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="M8.633 15.436c-.666-.665-1.785-.913-2.805-.484-.903.406-1.495 1.189-1.71 2.247C3.795 18.773 3 20.5 2 21c2 .5 5 .5 6.809-1.877.72-.947.852-2.662-.176-3.687zM21 3c-1-.996-6.644 3.644-9.5 6.5-1.5 1.5-3 3.5-3 3.5.974.273 2.228 1.527 2.5 2.5 0 0 2-1.5 3.5-3C17.356 9.644 22 3.996 21 3z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div id="progress" style={{zIndex: '1000', position: 'relative', left: '0', right: '0', display: 'none', marginBottom:'-5px'}}>
        <div className="meter">
            <span style={{width:'100%'}}><span className="progress"></span></span>
        </div>
</div>




</div>

  );




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


}


