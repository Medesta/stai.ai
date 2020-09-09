import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Tools from '../Components/Tools/Tools'
import './Practitioner.scss'
import VideoThumbnail from '../Components/VideoThumbnail/VideoThumbnail';
import Board from '../Components/Board/Board';
import Chat from '../Components/Chat/Chat';
import Canvas from './Canvas/index';

class Practitioner extends Component {
    state = {
        selectedColor: "red"
    }

    changeSelectedColor = ({ color }) => {
        console.log(color)
        this.setState({
            selectedColor: color
        })
    }

    render() {
        return (
            <div className="practitioner">
                <Header />
                <Board
                    color={'white'}
                    title={'The title I gave this activity'}
                >
                    <Canvas selectedColor={this.state.selectedColor} />
                </Board>
                <Tools selectedColor={this.state.selectedColor} onChangeColor={this.changeSelectedColor} />
                <VideoThumbnail
                    bottom={'2%'}
                    left={'2%'}
                    width={'40vh'}
                    height={'25vh'}
                    class={'primary'}
                    marker={'yellow'}
                />
                <Chat
                    name={'Ms.Roberts'}
                />
                <VideoThumbnail
                    bottom={'2%'}
                    left={'80%'}
                    width={'30vh'}
                    height={'18vh'}
                    class={'secondary'}
                    marker={'blue'}
                />

            </div>
        )
    }

}
export default Practitioner;