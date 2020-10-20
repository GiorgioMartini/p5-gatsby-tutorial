import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from '../loadable';

let bgColor = "#18020C"
let dancingLine1
let dancingLine2
let snake

function isOdd(num) { return num % 2;}
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function dancinglines (p5) {


  p5.setup = () => {
    p5.createCanvas(700,700)
    p5.background(bgColor)
    dancingLine1 = makeDancingLine()
    dancingLine2 = makeDancingLine(true)
    snake = makeSnake()
    // p5.frameRate(2)
  }
  
  p5.draw = () => {
    p5.background(bgColor)
    p5.translate(p5.width/2, p5.height/2)
    dancingLine1.display()
    dancingLine2.display()
    snake.display()
  }


  function makeDancingLine(flip) {
    let history = []
    let linesAmt =60
    let col = 255
    let v1 = p5.createVector(0,0)
    let v2 = p5.createVector(0,0)
    
    let x1Angle = flip ? 90 : 0
    let y1Angle = flip ? 90 : 0
    let x2Angle = flip ? 90 : 0
    let y2Angle = flip ? 90 : 0
  
    let x1AngleOff = 0.03
    let y1AngleOff = 0.002
    let x2AngleOff = 0.015
    let y2AngleOff = 0.02  
    
    let r1 = flip ? 250 : 300 
    let r2 = flip ? 250 : 300 

    function display() {
      v1.set(r1 * p5.sin(x1Angle), r1 * p5.sin(y1Angle))
      v2.set(r2 * p5.sin(x2Angle), r2 * p5.sin(y2Angle))
  
      history.push([v1.x, v1.y, v2.x, v2.y]) 
      
      if (history.length > linesAmt) history.splice(0,1)
      
      col = flip
        ? "#E5FFDE"
        : "#634B66"
  
      history.forEach((linea, i) => {
        p5.stroke(col) 
        p5.strokeWeight(2)
        p5.line(linea[0],linea[1],linea[2],linea[3])
      })
  
      x1Angle += flip ? x1AngleOff : x1AngleOff + 0.01
      y1Angle += flip ? y1AngleOff : y1AngleOff + 0.01
      x2Angle += flip ? x2AngleOff : x2AngleOff + 0.01
      y2Angle += flip ? y2AngleOff : y2AngleOff + 0.01
    }
  
    return {
      display,
    }
  }  

  function makeSnake() {
    let history = []
    let linesAmt = 100
    let col = 255
    let v1 = p5.createVector(0,0)
    let finalForm = false
    let lowResLine = []
    
    let x1Angle = 90
    let y1Angle = 90
  
    let x1AngleOff = 0.01
    let y1AngleOff = 0.002
    
    let r1 = 250

    function display() {
      v1.set(r1 * p5.sin(x1Angle), r1 * p5.sin(y1Angle))

      // let lowResLine = 
      history.push([v1.x, v1.y]) 

      if (history.length > linesAmt) {
        history.splice(0,1)
        finalForm = true
        // debugger
      }

      // if final form is true

      lowResLine = [...every_nth(history, 8), history[history.length-1]]
      // take 1st and last items
      // and take every nth in the middle
      
      p5.stroke(col) 
      p5.noFill()
      p5.strokeWeight(10)
      p5.strokeCap(p5.PROJECT)
      p5.beginShape()

      if (finalForm) {
        lowResLine.forEach(x => {
          p5.curveVertex(x[0], x[1])
        })      
        console.log('low')
      } else {
        history.forEach(x => {
          p5.curveVertex(x[0], x[1])
        })      
        console.log('high')
      }
      
      p5.endShape()

      // console.log('lowResLine: ', lowResLine.length)
      // console.log('history: ', history.length)
  
      x1Angle += x1AngleOff  + 0.002
      y1Angle += y1AngleOff  + 0.012
    }
  
    return {
      display,
    }
  }


}

export default class App extends Component{

  render() {
    return <P5Wrapper sketch={dancinglines} />
  }
}

