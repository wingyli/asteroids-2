// game.js file

// game state
let ship = new Ship()
let rocks = [new Rock(), new Rock(), new Rock()]
let lasers = []

let keyPressed = {}
// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
  console.log(keyPressed)
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
  console.log(keyPressed)
})

// challenge: check user input to add laser

// game loop
function loop() {
  // check user input to change ship's angle and speed
  if (keyPressed['ArrowLeft'] === true) {
    ship.rotateLeft()
  }
  if (keyPressed['ArrowRight'] === true) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp'] === true) {
    ship.thrust()
  }

  // change game state
  ship.step()
  rocks.forEach(rock => rock.step())
  lasers.forEach(laser => laser.step())
  // Note: forEach does the same thing as using a regular for loop
  // for (let i = 0; i < rocks.length; i++) {
  //   let rock = rocks[i]
  //   rock.step()
  // }

  // draw all
  erase()
  ship.draw()
  rocks.forEach(rock => rock.draw())
  lasers.forEach(laser => laser.draw())

  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
