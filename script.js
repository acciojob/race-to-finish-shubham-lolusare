window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let opt = document.getElementById("output");

window.promises = [new Promise((resolve)=>{resolve(Math.floor(Math.random() * (5 - 1) + 1))}),
				  new Promise((resolve)=>{resolve(Math.floor(Math.random() * (5 - 1) + 1))}),
				  new Promise((resolve)=>{resolve(Math.floor(Math.random() * (5 - 1) + 1))}),
				  new Promise((resolve)=>{resolve(Math.floor(Math.random() * (5 - 1) + 1))}),
				  new Promise((resolve)=>{resolve(Math.floor(Math.random() * (5 - 1) + 1))}),];


Promise.any(window.promises).then((data)=>{
	let text = document.createTextNode(data);
	opt.append(text);
})