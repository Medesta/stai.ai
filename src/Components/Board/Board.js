import React from 'react';
import './Board.scss';

const Board = (props) => {
    return (
        <div className="board" style={{
            backgroundColor:props.color
        }}>
            <div className="board-head">
                <p>{props.title}</p>
            </div>

        </div>
    );
}

export default Board;