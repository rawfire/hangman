'use strict'
class Game {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessed = []
        this.status = 'playing'   
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')

        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.statud = 'playing'
        }    
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `Game Over : word was "${this.word.join('')}"`
        } else {
            return `You Won!`
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ' ) {
                puzzle += letter 
            } else {
                puzzle += '*' 
            }
        })
        return puzzle
    }

    guessLetter(letter) {
        letter = letter.toLowerCase()
        const isUnique = !this.guessed.includes(letter)
        const isBadGuess = !this.word.includes(letter)
        if (this.status !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.guessed = [...this.guessed, letter]
        }
        if (isUnique && isBadGuess) {
            this.guesses--
        }
        this.calculateStatus()        
    }
}

export { Game as default }