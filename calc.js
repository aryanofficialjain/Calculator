// logic of calculator

let str = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
	button.addEventListener('click',(e)=>{
		if(e.target.innerHTML == '='){
			str = eval(str);
			document.querySelector('input').value = str;

		}
		else if(e.target.innerHTML == 'Clear'){
			str = '';
			document.querySelector('input').value = str;

		}
		else{

		console.log(e.target);
		str = str + e.target.innerHTML;
		document.querySelector('input').value = str;

		}
	})
})