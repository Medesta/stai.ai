import React, { Component } from "react";

import CanvasDraw from "./RCD";
import uuid from 'uuid/v4'

// import { API, graphqlOperation } from 'aws-amplify'
// import { onUpdateCanvas } from '../../graphql/subscriptions'
// import { updateCanvas, createCanvas } from '../../graphql/mutations'

const colors = [
  '#D50000',
  '#AA00FF',
  '#2962FF',
  '#18FFFF',
  '#00C853',
  '#FFD600',
  '#FF6D00',
  '#000000'
]

let patientCursor;
function rand() {
  return colors[~~(colors.length * Math.random())];
}

class Demo extends Component {

    
  state = {
    brushColor: rand(),
    canvasHeight: 800,
    canvasWidth: "100%",
    brushRadius: 6,
    lazyRadius: 8
  }

  lineLength = 0
  id = '123'
  clientId = uuid()
  canvasInfo = 'tempcanvas'

  componentDidMount() {

    patientCursor = document.getElementById("patient-cursor");
    const canvas = {
      id: this.id,
      clientId: this.clientId,
      data: {
        ...this.state,
        lines: [],
        cursor: []
      }
    }
    // Create the canvas. If canvas is already created, retrieve the data & draw previous canvas
    // API.graphql(graphqlOperation(createCanvas, { input: canvas }))
    //   .then(d => console.log('canvas created :', d))
    //   .catch(err => {
    //       console.log(canvas)
    //       console.log(err)
    //     if (err.errors[0].data && (err.errors[0].data.id === this.id)) {
    //       const d = err.errors[0].data.data
    //       this.canvas.loadSaveData(d)
    //     }
    //   })
  

    window.addEventListener('mouseup', (e) => {
      // If we are clicking on a button, do not update anything
      if (e.target.name === 'clearbutton') return 
      this.setState({
        brushColor: rand()
      })
      const data = this.canvas.getSaveData()
      const p = JSON.parse(data)
      const length = p.lines.length
      this.lineLength = length

      const canvas = {
        id: this.id,
        clientId: this.clientId,
        data
      }
      // Save updated canvas in the database
      // API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
      //   .then(c => {
      //     console.log('canvas updated!')
      //   })
      //   .catch(err => console.log('error creating: ', err))
    })

    // window.addEventListener('mousemove', (e) => {
    //     // If we are clicking on a button, do not update anything
    //     // if (e.target.name === 'clearbutton') return 
    //     // this.setState({
    //     //   brushColor: rand()
    //     // })
    //     const data = this.canvas.getSaveData()
    //     // const p = JSON.parse(data)
    //     // const length = p.lines.length
    //     // this.lineLength = length
  
    //     const canvas = {
    //       id: this.id,
    //       clientId: this.clientId,
    //       data
    //     }
    //     console.log(canvas);
    //     // Save updated canvas in the database
    //     API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
    //       .then(c => {
    //         console.log('canvas updated!')
    //       })
    //       .catch(err => console.log('error creating: ', err))
    //   })

  //   API.graphql(graphqlOperation(onUpdateCanvas))
  //     .subscribe({
  //       next: (d) => {
  //           const clientIdData = d.value.data.onUpdateCanvas.clientId;
  //         const data = JSON.parse(d.value.data.onUpdateCanvas.data)
  //         const length = data.lines.length

  //       //   console.log(clientIdData, this.clientId);
  //       //   if(data.cursor && clientIdData !==this.clientId){
  //       //     this.updateMousePos(data.cursor)
  //       //   }

  //         if (length === 0) {
  //           // If there is no canvas data, clear the canvas
  //           const data = this.canvas.getSaveData()
  //           const parsedData = JSON.parse(data)
  //           const newData = {
  //             ...parsedData,
  //             lines: []
  //           }
  //           const newCanvas = JSON.stringify(newData)
  //           this.canvas.loadSaveData(newCanvas)
  //           return
  //         }
          
  //         if (this.lineLength === length || length === Number(0)) return
  //         // Draw new lines to canvas
  //         const last = data.lines[length -1]
  //         this.canvas.simulateDrawingLines({ lines: [last] })
  //       }
  //     })
  }
  updateMousePos = (cursor) => {
   // console.log(this.canvas.cursor)
    
    console.log("be", patientCursor);
    //patientCursor.style.transform = `translate(${this.canvas.cursor.x}px, ${this.canvas.cursor.y}px)`
    if(patientCursor){
        //console.log("af", patientCursor);
        //patientCursor.style.height = "300px"
        patientCursor.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    }
    //this.patientCursor.style.height = "300px"
    // patientCursor.style.top = this.canvas.cursor.x + "px"
    // patientCursor.style.left = this.canvas.cursor.y + "px"
    //console.log(this.canvas.getSaveData())
  }
 
  clear = () => {
    const data = this.canvas.getSaveData()
    const parsedData = JSON.parse(data)
    const newData = {
      ...parsedData,
      lines: []
    }
    const newCanvas = JSON.stringify(newData)
    this.canvas.loadSaveData(newCanvas)
    const canvas = {
      id: this.id,
      clientId: this.clientId,
      data: newCanvas
    }
    // API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
    //     .then(c => {
    //       console.log('canvas cleared!')
    //     })
    //     .catch(err => console.log('error creating: ', err))
  }
  render() {
    return (
      <div>
       
        <img  height="87" width="100" id="patient-cursor"src="https://stai-babylon-js-scenes.s3.amazonaws.com/Games/2d/hand/Therapist_pointing_Cursor.svg" />
        <button name='clearbutton' onClick={this.clear}>Clear</button>
        <CanvasDraw
          {...this.state}
          ref={canvas => this.canvas = canvas}
          
        />
      </div>
    );
  }
}

export default Demo