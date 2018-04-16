import './top.sass'
export default function top(){
	let div = document.createElement('div');
	let span = document.createElement('span');
	let p = document.createElement('p');
	span.innerHTML = 0;
	p.innerHTML = 'score: '
	p.appendChild(span)
	let btn = document.createElement('button');
	btn.innerHTML = 'New Game';
	btn.classList.add('btn')
	div.appendChild(btn)
	div.appendChild(p)
	return div;
}
