// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(url) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
  let image = new Image()
  let loaded = new Promise(resolve => {
    image.onload = resolve
  })
  image.src = url
  return {
    image: image,
    loaded: loaded,
  }
}
let shipSprite = loadSprite('ship.png')
let rockSprite = loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// Discussion:
// - How to add rocks/what attributes do we want to keep track of?
//   - have a class and create rock objects 
//   - all should share similar characteristics and methods
//   - rocks are on their own (can't change their movement)
// - How to add lasers/what attributes do we want to keep track of?
//   - have a class and create laser objects
//   - we need keep track of the direction / speed the laser is going
//   - determined by the angle of the ship










