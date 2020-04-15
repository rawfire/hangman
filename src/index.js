import Game from './hangman.js'
import getPuzzle from './requests.js'

const puzzleEl = document.querySelector('#puzzle') 
const guessesEl = document.querySelector('#guesses')
let gameOne


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.guessLetter(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = gameOne.statusMessage
    
    gameOne.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    gameOne = new Game(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()