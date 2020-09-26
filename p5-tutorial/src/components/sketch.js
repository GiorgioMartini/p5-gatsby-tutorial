const between = (x, min, max) =>  x >= min && x <= max

function isOverGridPoint (mouseX, mouseY, x, y, range = 20) {
  return (between(mouseX, x-range, x+range) && between(mouseY, y-range, y+range))
    ? true
    : false
}

export default function Sketch(p5) {
  let canvas
  let colorPicker
  let cols = 20
  let rows
  let spots = []
  const windowResized = (p5) => p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  const lineThresh = 40
  let color = "#2b1b69"

  function Spot(p5, x, y) {
    let _x = x
    let _y = y
    let _r = 2
    let hovered = false

    function display() {
      p5.noStroke()
      p5.fill(color)
      p5.ellipse(_x, _y, _r)
    }

    function fade() {
      if (_r >= 0) {
        _r -= 1
      } else {
        hovered = false
      }
    }

    function flash() {
        _r = 20
        hovered = true
    }

    function randomWalk() {
      _x += p5.random(-0.5,0.5)
      _y += p5.random(-0.5,0.5)
      // if (_y >= p5.windowHeight) {
      //   _y = 0
      // }
    }

    function values () {
      return {
        _x,
        _y,
        hovered,
      }
    }

    return {
      display,
      flash,
      randomWalk,
      values,
      fade,
    }
  }

  p5.setup = (canvasParentRef) => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight /*, p5.WEBGL*/)
    colorPicker = p5.createColorPicker(color);
    colorPicker.position(0, p5.height + 5);
    const colWidth  = p5.width/cols
    const colHeight = colWidth
    rows = p5.height/colWidth

    canvas.position(0, 0).style('z-index', '-1')

    p5.background(0);
    for (let x = 0; x < cols+1; x++) {
      for (let y = 0; y < rows+1; y++) {
        spots.push(Spot(p5, x * colWidth, y * colHeight))
      }
    }
  }

  p5.draw = () => {
    p5.background(0)
    color = colorPicker.color()
    p5.strokeWeight(1)
    spots.forEach((s, i) => {
      let { _x, _y, hovered } = s.values()
      s.randomWalk()
      s.display()
      if (i !== 0 && isOverGridPoint(p5.mouseX, p5.mouseY, _x, _y)) s.flash() 
      hovered && s.fade()

      spots.forEach(ref => {
        if (between(_x, ref.values()._x-lineThresh, ref.values()._x+lineThresh) && between(_y, ref.values()._y-lineThresh, ref.values()._y+lineThresh)) {
          p5.stroke(color)
          p5.strokeWeight(3)
          p5.line(_x, _y, ref.values()._x, ref.values()._y)
        }
      })

    })
  };
}