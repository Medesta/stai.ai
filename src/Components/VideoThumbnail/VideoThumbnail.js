import React from 'react';
import './VideoThumbnail.scss'

const VideoThumbnail = (props) => {
    return (
        <div className={"thumbnail "+ props.class} style={{
            bottom:props.bottom,
            left:props.left,
            height:props.height,
            width:props.width,
        }}>
            <div className="marker">
                <div className={props.marker}>

                </div>

            </div>

        </div>
    );
}

export default VideoThumbnail;