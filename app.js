"use strict";



const Gameboard = (() => {
	let gameboard = ["", "", "", "", "", "", "", "", ""];

	const render = () => {
		let boardHTML = "";
		gameboard.forEach((square, index) => {
			boardHTML += `<div class="square" id=square-${index}>${square}</div>`;
		});
		document.querySelector("#gameboard").innerHTML = boardHTML;
	};

	return {
		render,
	};
})();

// factory function
const createPlayer = (name, mark) => {
	return {
		name,
		mark,
	};
};

const Game = (() => {
	let players = [];
	let currentPlayerIndex;
	let gameOver;

	const start = () => {
		players = [
			createPlayer(document.querySelector("#player1").value, "X"),
			createPlayer(document.querySelector("#player2").value, "O"),
		];

		currentPlayerIndex = 0;
		gameOver = false;
		Gameboard.render();
	};

    return {
        start,
    }
})();


const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", ()=> {
    Game.start();
});
