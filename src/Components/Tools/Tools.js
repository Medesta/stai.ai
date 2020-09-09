import React from 'react';
import './Tools.scss';

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
                    <div>
                        <button className="multi-color">
                            <img src={require("../../Assets/Images/tools/marke1.png")} alt="tool" />

                        </button>
                        <div className="palate ">

                        </div>
                    </div>
                </div>
                <div className="tool-group">
                    <div>
                        <button>
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
                    <button>
                        <img src={require("../../Assets/Images/tools/eraser.png")} alt="tool" />
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Tools;