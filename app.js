const canvas = document.querySelector('#jsCanvas')
const colors = document.querySelectorAll('.jsColor')
const range = document.querySelector('#jsRange')
const mode = document.querySelector('#jsMode')
const ctx = canvas.getContext('2d')
canvas.height = 400
canvas.width = 400
ctx.fillStyle = '#fff'
ctx.fillRect(0, 0, 400, 400)

ctx.lineWidth = 2.5
ctx.strokeStyle = '#2c2c2c'
ctx.fillStyle = '#2c2c2c'
let painting = false
let filling = false
function stopPainting() {
  painting = false
}
function startPainting() {
  painting = true
}
function onMouseMove(event) {
  x = event.offsetX
  y = event.offsetY
  if (!painting) {
    ctx.beginPath()
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}
function onMouseDown(event) {
  painting = true
}
function changeColor(event) {
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
  ctx.fillStyle = color


}
function rangeChang(event) {
  const rangeVel = event.target.value
  ctx.lineWidth = rangeVel
}
function modeClick() {
  if (filling === true) {
    filling = false
    mode.innerText = 'Заливка'

  } else {
    filling = true
    mode.innerText = 'Рисование'
  }
}
function canvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, 400, 400)

  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', onMouseDown)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', canvasClick)
}

Array.from(colors).forEach(element => {
  element.addEventListener('click', changeColor)
});
if (range) {
  range.addEventListener('input', rangeChang)

}
if (mode) {
  mode.addEventListener('click', modeClick)

}