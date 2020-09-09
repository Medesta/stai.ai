import React, { useState } from 'react';
import './Tools.scss';
import ColorPicker from 'rc-color-picker'
import 'rc-color-picker/assets/index.css';


const changeHandler = (colors) => {
    console.log(colors);
}


// const [name, changeName] = useState('')

// this.state.name;

// name



// changeName("Haider");

const Tools = (props) => {
    return (
        <div className="tools ">
            <div className="tool-box">
                <div className="tool">
                    <button>
                        <img src={require("../../Assets/Images/tools/text.png")} alt="tool" />
                    </button>
                </div>
                <div className="tool-group">
                    <div>
                        <button>
                            <img src={require("../../Assets/Images/tools/marker.png")} alt="tool" />
                        </button>
                    </div>
                    <ColorPicker
                        color={props.selectedColor}
                        animation={"slide-up"}
                        onChange={props.onChangeColor}
                    >
                        <div className="react-custom-trigger">
                            <button className="multi-color">
                                <img src={require("../../Assets/Images/tools/marke1.png")} alt="tool" />

                            </button>
                            <div className="palate ">

                            </div>
                        </div>
                    </ColorPicker>

                </div>
                <div className="tool-group">
                    <div>
                        <button onClick={props.onClickRubber}>
                            <img src={require("../../Assets/Images/tools/high.png")} alt="tool" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={require("../../Assets/Images/tools/highlight.png")} alt="tool" />
                        </button>
                    </div>
                </div>
                <div className="tool ">
                    <button>
                        <img src={require("../../Assets/Images/tools/undo.png")} alt="tool" />
                    </button>
                </div>
                <div className="tool">
                    <button>
                        <img src={require("../../Assets/Images/tools/redo.png")} alt="tool" />
                    </button>
                </div>
                <div className="tool-eraser">
                    <button onClick={props.onEraserClick}>
                        <img src={require("../../Assets/Images/tools/eraser.png")} alt="tool" />
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Tools;