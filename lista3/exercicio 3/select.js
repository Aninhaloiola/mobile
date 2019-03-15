function color() {
	let select= document.getElementById('cor');
	let selected = select.options[select.selectedIndex].id;

	switch(selected) {

		case 'grey':
		 		document.getElementById('corpo').style.backgroundColor = 'grey';
		 	
		 break;

		case 'green':
				document.getElementById('corpo').style.backgroundColor = 'green';
			
		break;
		
		case 'red':
				document.getElementById('corpo').style.backgroundColor = 'red';
			
		break;

		case 'yellow':
				document.getElementById('corpo').style.backgroundColor = 'yellow';
			
			break;	
	}
}