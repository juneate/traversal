const $week = document.querySelector('.week')

const clearAllSelected = () => document.querySelectorAll('.selected').forEach(sel => sel.classList.remove('selected'))
document.querySelector('.clear').addEventListener('click', clearAllSelected);


document.querySelector('.a').addEventListener('click', event => {
	clearAllSelected()
	$week.firstElementChild.classList.add('selected')
});

document.querySelector('.b').addEventListener('click', event => {
	clearAllSelected()
	$week.lastElementChild.classList.add('selected')
});

document.querySelector('.c').addEventListener('click', event => {
	clearAllSelected()
	Array.from($week.children).forEach($day => {
		$day.classList.add('selected')
	})
});

document.querySelector('.d').addEventListener('click', event => {
	clearAllSelected()
	$week.children[3].classList.add('selected')
});


document.querySelector('.e').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!
	
	clearAllSelected()
	$selected.parentElement.classList.add('selected') // Relative to what was selected before, go up the tree!
});


document.querySelector('.f').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!

	clearAllSelected()
	$selected.nextElementSibling.classList.add('selected')
});


document.querySelector('.g').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!

	clearAllSelected()
	$selected.previousElementSibling.classList.add('selected')
});

// Share:
// https://zellwk.com/blog/dom-traversals/

// Build:
// Grid of images where selected moved and displays the next image

// Also:
// childElementCount
