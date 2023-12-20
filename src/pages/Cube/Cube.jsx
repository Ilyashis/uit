

import '../Cube/GM.curve.script';
//import '../Cube/GM.isoline.script';
//import '../Cube/GM.Resizable.script';
//import '../Cube/GM.Resizable.script';
//import '../Cube/https://d3js.org/d3.v4.js';
//import '../Cube/d2353f987179b9fa88b8.css';
//import '../Cube/28360769f05063d61370.css';
//import '../Cube/2e62e44cd0ed569adfee.css';
//import '../Cube/012a0cf1d6b5333cad0e.css';
//import '../Cube/072c49a921a1de6442db.css';



export default function Cube() {
  return (
    <>
      <div style={{ margin: 24 }}>
      <div id="dataviz_axisZoom"></div>

<div class="minimap">
    <details open id="minimapDetails">
        <div class="resizer top-left"></div>
        <summary class="dragger" style="padding: 4px;margin: 4px;"
            title="Мини карта, инструмент визуальной/быстрой оценки работы&#013;Свернуть/развернуть - P (oPen)">Мини
            карта</summary>

        <label class="MixFocus" style="position: absolute;right: 8px;top:2px" onclick="ClearAll()"
            title="Очистить разрез">
              <input type="radio" class="ChoiceGroup-Input" name="ChoiceGroup"
                value="ChoiceGroup-выбор"/><button
                class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                style="z-index: 100;"><span class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                        <g transform="translate(-6,-6)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.01 4c0-1.1.89-2 1.99-2h7.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V20c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM13 3.5V8a1 1 0 0 0 1 1h4.5L13 3.5zm-.3 12.314 1.414-1.414 1.414 1.414 1.415-1.414 1.414 1.414-1.414 1.415 1.414 1.414-1.414 1.414-1.415-1.414-1.414 1.414-1.414-1.414 1.414-1.415-1.414-1.414z">
                            </path>
                        </g>
                    </svg>
                </span>
            </button>
          </label>

        <div class="content" style="position: relative;">
            <div id="minimap_content">
                <canvas id="minimap_cormap" width="1200" height="1200"
                    style="position: absolute; left: 0; right: 0;"></canvas>
            </div>
        </div>
    </details>
</div>



<dialog id="favDialog" style=" border:1px solid silver;border-radius:4px;">
    <form method="dialog">
        <div style="height: 600px;">
            <table class="myTable">
                <tr>
                    <th>Имя</th>
                    <th>Тип</th>
                    <th>Опорная<br/>глубина</th>
                    <th>Устье</th>
                </tr>
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
            </table>
        </div>
        <div style="text-align:center;">
            <button value="cancel">Отмена</button>
            <button id="confirmBtn" value="88-11-12">Применить</button>
        </div>
    </form>
</dialog>

<footer style="position: fixed;bottom: 0;z-index: 10000;width: 100%;justify-content: center;bottom: 16px;">
    <div style="width:100%;display:flex;justify-content:center;">
        <div id="footerMenu" class=" che--LayoutRow che--LayoutRow_height_m"
            style="width: fit-content;border-radius:4px;padding: 8px;display: none;background-color: #ffffff;">
            <div class="che--LayoutRow-Side che--LayoutRow-Side_position_center" id="subMenu1"
                style="display: none;">
                <div class="che--Header-RowCenterLeft">
                    <div class="ChoiceGroupVariants">
                        <div class="ChoiceGroupVariants-Component">
                            <div
                                class="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ">
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g transform="translate(-4,-4)">
                                                    <path d="M13 2h-2v9H2v2h9v9h2v-9h9v-2h-9V2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <label id="GIS" class="ChoiceGroup-Label MixFocus" onclick="run()">[ГИС-1]
                                </label>
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g transform="translate(-2,0)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h2V4h-6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H3v2h2v13zm6-11v9H9V8h2zm4 9V8h-2v9h2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                    <div class="ChoiceGroupVariants">
                        <div class="ChoiceGroupVariants-Component">
                            <div
                                class="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ChoiceGroup_onlyIcon">
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"
                                                        fill="blue"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div class="ChoiceGroup-Divider"></div>
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-горизонт"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g>
                                                    <path
                                                        d="m2.75 2 2.36 2.753A10 10 0 0 1 22 12h-2A8 8 0 0 0 6.413 6.274L8.75 9h-7l1-7zM21 22l-2.36-2.753A10 10 0 0 1 1.75 12h2a8 8 0 0 0 13.587 5.726L15 15h7l-1 7z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <div class="ChoiceGroup-Divider"></div><label
                                    class="ChoiceGroup-Label MixFocus"><input type="radio" class="ChoiceGroup-Input"
                                        name="ChoiceGroup" value="ChoiceGroup-разлом"/>
                                    <button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
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

            <div class="che--LayoutRow-Side che--LayoutRow-Side_position_center" id="subMenu2"
                style="display: none;">
                <div class="che--Header-RowCenterLeft">
                    <div class="ChoiceGroupVariants">
                        <div class="ChoiceGroupVariants-Component">
                            <div
                                class="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ">
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g transform="translate(-4,-4)">
                                                    <path d="M13 2h-2v9H2v2h9v9h2v-9h9v-2h-9V2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                                <label class="ChoiceGroup-Label MixFocus" onclick="run()">[Маркер-1]
                                </label>
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
                                                <g transform="translate(-2,0)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5 19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h2V4h-6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H3v2h2v13zm6-11v9H9V8h2zm4 9V8h-2v9h2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button></label>
                            </div>
                        </div>
                    </div>
                    <div class="ChoiceGroupVariants">
                        <div class="ChoiceGroupVariants-Component">
                            <div
                                class="ChoiceGroup ChoiceGroup_size_m ChoiceGroup_form_default ChoiceGroup_view_primary ChoiceGroup_width_default ChoiceGroup_onlyIcon">
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-выбор"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
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
                                <div class="ChoiceGroup-Divider"></div>
                                <label class="ChoiceGroup-Label MixFocus"><input type="radio"
                                        class="ChoiceGroup-Input" name="ChoiceGroup"
                                        value="ChoiceGroup-горизонт"/><button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
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
                                <div class="ChoiceGroup-Divider"></div><label
                                    class="ChoiceGroup-Label MixFocus"><input type="radio" class="ChoiceGroup-Input"
                                        name="ChoiceGroup" value="ChoiceGroup-разлом"/>
                                    <button
                                        class="Button Button_size_s Button_view_clear Button_width_default Button_form_default Button_withIcon Button_onlyIcon MixFocus che--TileMenu"
                                        style="z-index: 100;"><span
                                            class="Icon Icon_size_s IconBento Button-Icon"><svg viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" class="Icon-Svg">
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

<div id="progress" style="z-index: 1000;position: relative; left: 0;right: 0;display: none;margin-bottom:-5px;">
    <div class="meter">
        <span style="width:100%;"><span class="progress"></span></span>
    </div>
</div>
      </div>

      
    </>
    
  );
}
