let outputOne = document.getElementById('converting-block-body_output__one');


let outputTwo = document.querySelector('#converting-block-body_output__two');

let blockBody = document.querySelector('.converting-block-body');

let button = document.querySelector('.converting-block-body-btn');

let copyBtn = document.querySelector('.converting-block-body-btn__copy');

let openBtn = document.querySelector('.converting-block_open-btn');

let blockPalette = document.querySelector(".converting-block-palette");

let modal = document.querySelector(".converting-block-body-modal");

// let in = outputOne.value;
// console.log(in);

outputOne.addEventListener('input', ({ target }) => {
	console.log(target.value);


	function deleteSymbols(element) {


		const rules = [
			".",
			",",
			"!",
			"/",
			"'",
			"?",
			":",
			"(",
			")",
			`"`,
			`'`,
			"_",
			"`",
			"\\",
			"{",
			"}"
		];

		for (let j = 0; j < rules.length; j++) {
			if (element === rules[j]) {
				return false;
			}
		}

		return true;

	}

	let titleRow = target.value;
	let deleteSymbolsResult = titleRow.toLowerCase().split('').filter(deleteSymbols);

	function replaceSpace(array) {

		let newRow = [];

		for (let i = 0; i < array.length; i++) {

			if (array[i] === " ") {
				newRow.push('-')
			} else {
				newRow.push(array[i])
			}

		}
		return newRow;
	}

	let resultReplaceSpace = replaceSpace(deleteSymbolsResult);

	function checkDash(array) {

		let newRow = [];

		for (let i = 0; i < array.length; i++) {

			if (array[i] === "-" && array[i + 1] === "-") {
				continue;

			}
			newRow.push(array[i])
		}
		return newRow;
	}

	let checkDashResult = checkDash(resultReplaceSpace).join("");

	outputTwo.innerText = checkDashResult;



	deleteSymbols(target.value);

});

outputTwo.addEventListener('click', function () {
	let open = false;
	if (outputTwo.textContent && !open) {
		navigator.clipboard.writeText(outputTwo.innerText);
		modal.classList.add("converting-block-body-modal-active");

		removeClass();
	} else {

		modal.classList.add("converting-block-body-modal-active");
		modal.innerText = "Empty";

		removeClass();

	}
})

function removeClass() {
	setTimeout(function () {
		modal.classList.remove("converting-block-body-modal-active");
	}, 1000)
}