import React from 'react';
import './Tools.scss';

const Tools = (props) => {
    return (
        <div className="tools ">
            <div className="tool-box">
                <div className="tool">
                    <img src={require("../../Assets/Images/tools/text.png")} alt="tool" />
                </div>
                <div className="tool-group">
                    <div>
                    <img src={require("../../Assets/Images/tools/marker.png")} alt="tool" />
                    </div>
                    <div>
                    <img src={require("../../Assets/Images/tools/marke1.png")} alt="tool" />
                    </div>
                </div>
                <div className="tool-group">
                    <div>
                    <img src={require("../../Assets/Images/tools/high.png")} alt="tool" />
                    </div>
                    <div>
                    <img src={require("../../Assets/Images/tools/highlight.png")} alt="tool" />
                    </div>
                </div>
                <div className="tool ">
                <img src={require("../../Assets/Images/tools/undo.png")} alt="tool" />
                </div>
                <div className="tool">
                <img src={require("../../Assets/Images/tools/redo.png")} alt="tool" />
                </div>
                <div className="tool-eraser">
                <img src={require("../../Assets/Images/tools/eraser.png")} alt="tool" />
                </div>
            </div>

        </div>
    )
}
export default Tools;