import './index.sass'
import top from './top/top.js'
function component(){
	let ele = document.createElement('div')
	ele.appendChild(top())
	return ele;
}
document.body.appendChild(component())