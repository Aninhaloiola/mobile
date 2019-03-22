
function cadastrar() {
    let pessoa1 = document.getElementById('pessoa1').value;
    let pessoa2 = document.getElementById('pessoa2').value;
    let pessoa3 = document.getElementById('pessoa3').value;
    let pessoa4 = document.getElementById('pessoa4').value;
    let pessoa5 = document.getElementById('pessoa5').value;
    
    let array = new Array();
    array.push(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);

    pessoa1 = document.getElementById('pessoa1').value = array[4];
    pessoa2 = document.getElementById('pessoa2').value = array[3];
    pessoa3 = document.getElementById('pessoa3').value = array[2];
    pessoa4 = document.getElementById('pessoa4').value = array[1];
    pessoa5 = document.getElementById('pessoa5').value = array[0];
}