import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from '../loadable';
import {Vector} from "p5"

let bgColor = "#18020C"
let dancingLine1
let dancingLine2
let snake
// let twoCircles
// let follower
// let snakeAttractor

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
    // p5.frameRate(2)
    dancingLine1 = makeDancingLine()
    dancingLine2 = makeDancingLine(true)
    snake = Snake()
    // twoCircles = TwoCircles()
    // snakeAttractor = SnakeAttractor(Follower)
  }
  
  p5.draw = () => {
    p5.background(bgColor)
    p5.translate(p5.width/2, p5.height/2)
    dancingLine1.display()
    dancingLine2.display()
    snake.display()
    // twoCircles.display()
    // snakeAttractor.display()
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

  function Snake() {
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

      history.push([v1.x, v1.y]) 
      lowResLine = [history[0], ...every_nth(history, 10), history[history.length-1]]

      if (history.length > linesAmt) {
        history.splice(0,1)
        finalForm = true
      }
      
      p5.stroke(col) 
      p5.noFill()
      p5.strokeWeight(10)
      p5.strokeCap(p5.PROJECT)
      p5.beginShape()
      if (finalForm) {
        lowResLine.forEach((x, i) => {
          // i === lowResLine.length-1 && p5.ellipse(x[0], x[1], 30)
          // i === 0 && p5.ellipse(x[0], x[1], 30)
          p5.curveVertex(x[0], x[1])
        })      
        console.log('low')
      } else {
        history.forEach((x,i) => {
          // i === history.length-1 && p5.ellipse(x[0], x[1], 30)
          // i === 0 && p5.ellipse(x[0], x[1], 30)
          p5.curveVertex(x[0], x[1])
        })      
        console.log('high')
      }
      p5.endShape()
  
      x1Angle += x1AngleOff  + 0.002
      y1Angle += y1AngleOff  + 0.012
    }
    return {
      display,
    }
  }
  function TwoCircles() {
    let history = []
    let linesAmt = 100
    let col = 255
    let v1 = p5.createVector(0,0)
    let finalForm = false
    let lowResLine = []
    let x1Angle = 0
    let y1Angle = 30
    let x1AngleOff = 0.002
    let y1AngleOff = 0.001
    let r1 = 300

    function display() {
      v1.set(r1 * p5.sin(x1Angle), r1 * p5.sin(y1Angle))

      history.push([v1.x, v1.y]) 
      lowResLine = [history[0], ...every_nth(history, 50), history[history.length-1]]

      if (history.length > linesAmt) {
        history.splice(0,1)
        finalForm = true
      }
      
      p5.stroke(col) 
      p5.noFill()
      p5.strokeCap(p5.ROUND)
      if (finalForm) {
        lowResLine.forEach((x, i) => {
          p5.strokeWeight(10)
          i === lowResLine.length-1 && p5.ellipse(x[0], x[1], 30)
          // p5.strokeWeight(1)
          // i === 0 && p5.ellipse(x[0], x[1], 10)
        })      
      } else {
        history.forEach((x,i) => {
          p5.strokeWeight(10)
          i === history.length-1 && p5.ellipse(x[0], x[1], 30)
          // p5.strokeWeight(1)
          // i === 0 && p5.ellipse(x[0], x[1], 10)
        })      
      }

      // p5.stroke(255)
      // p5.strokeWeight(2)
      // p5.line(lowResLine[0][0], lowResLine[0][1], lowResLine[lowResLine.length-1][0], lowResLine[lowResLine.length-1][1])
      
      x1Angle += x1AngleOff  + 0.009
      y1Angle += y1AngleOff  + 0.008
    }
    return {
      display,
    }
  }

  // function Follower() {
  //   let pos = p5.createVector(200,200)
  //   let vel = Vector.random2D()
  //   vel.mult(1)
  //   function display(x,y) {
  //     let attractor = p5.createVector(x,y)
  //     let acc = Vector.sub(attractor, pos)
  //     acc.setMag(0.1)
  //     vel.add(acc)
  //     pos.add(vel)
  //     p5.stroke(255)
  //     p5.strokeWeight(2)
  //     p5.ellipse(pos.x, pos.y, 40)
  //   }
  //   return {
  //     display,
  //   }
  //  }

  // function SnakeAttractor(Follower) {
  //   let col = '255,0,0'
  //   let v1 = p5.createVector(0,0)
  //   let x1Angle = 90
  //   let y1Angle = 90
  //   let x1AngleOff = 0.01
  //   let y1AngleOff = 0.002
  //   let r1 = 250
  //   let followr = Follower()

  //   function display() {
  //     v1.set(r1 * p5.sin(x1Angle), r1 * p5.sin(y1Angle))

      
  //     followr.display(v1.x, v1.y)
  //     p5.stroke(255,0) 
  //     // p5.strokeWeight(30)
  //     p5.ellipse(v1.x, v1.y, 10)
      
  //     x1Angle += x1AngleOff  + 0.002
  //     y1Angle += y1AngleOff  + 0.012
  //   }
  //   return {
  //     display,
  //   }
  // }
}

export default class App extends Component{
  render() {
    return <P5Wrapper sketch={dancinglines} />
  }
}