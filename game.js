document.addEventListener('DOMContentLoaded',()=>{
    //DOM elements
    const status = document.getElementById('status');
    const cells = document.querySelectorAll('.cell');
    const resetBtn = document.getElementById('resetBtn');
    const soundToggle = document.getElementById('soundToggle');
    const musicToggle = document.getElementById('musicToggle');
    const playerScoreEl = document.getElementById('playerScore');
    const computerScoreEl = document.getElementById('computerScore');
    const tieScoreEl = document.getElementById('tieScore');

    //Audio Elements
    const backgroundMusic = document.getElementById('backgroundMusic');
    const clickSound = document.getElementById('clickSound');
    const winSound = document.getElementById('winSound');
    const loseSound = document.getElementById('loseSound');
    const drawSound = document.getElementById('drawSound');

    //Game variables
    let board = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameActive = true;
    let score = { player: 0, computer: 0, tie: 0 };
    let soundEnabled = true;
    let musicEnabled = true;

    //winning patterns
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
     ];;
})