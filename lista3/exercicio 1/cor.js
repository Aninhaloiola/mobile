function mudarcor(cor) {
	

	switch(cor){
		case 'verde':
			document.getElementById('color').style.backgroundColor = 'green';
			break;
		
		case 'vermelho':
			document.getElementById('color').style.backgroundColor = 'red';
			break;

		case 'azul':	
			document.getElementById('color').style.backgroundColor = 'blue';
			break;
		
		case 'amarelo':
			document.getElementById('color').style.backgroundColor = 'yellow';
			break;	
	}
}
