import React from 'react';
import './Board.scss';

const Board = (props) => {
    return (
        <div className="board" style={{
            backgroundColor: props.color
        }}>
            <div className="board-head">
                <p>{props.title}</p>
            </div>
            {props.children}
        </div>
    );
}

export default Board;