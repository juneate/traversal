const $week = document.querySelector('.week')

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
	
	if ($selected != document.body) {
		clearAllSelected()
		$selected.parentElement.classList.add('selected') // Relative to what was selected before, go up the tree!
	}
});

document.querySelector('.f').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!

	clearAllSelected()
	$selected.closest('.calendar').classList.add('selected')
});

document.querySelector('.g').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!

	clearAllSelected()
	$selected.nextElementSibling.classList.add('selected')
});

document.querySelector('.h').addEventListener('click', event => {
	let $selected = document.querySelector('.selected') // Store the selected element before clearing it!

	clearAllSelected()
	$selected.previousElementSibling.classList.add('selected')
});

const clearAllSelected = () => {
	document.querySelectorAll('.selected').forEach(sel => sel.classList.remove('selected'))
	document.querySelector('.console').classList.remove('shown')
}
const selectTheWeekList = () => { 
	clearAllSelected()
	$week.classList.add('selected') 
}
window.addEventListener('error', event => {
	document.querySelector('.console').classList.add('shown')
	document.querySelector('.console').textContent = `${event.type}: ${event.message}\n`;
});

// document.querySelector('.getweek').addEventListener('click', selectTheWeekList);
document.querySelector('.clear').addEventListener('click', clearAllSelected);
window.addEventListener('load', selectTheWeekList)


// "How many children does this element have?"
// document.querySelector('.selected').childElementCount
// document.querySelector('.selected').children.length
