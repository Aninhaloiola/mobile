function verificar() {
    let palavra = document.getElementById('palavra').value;
    let invertido = palavra.split('').reverse().join('');
    
    if (palavra == invertido) {
        document.writeln('A palavra É um palíndromo!');
    } else {
        document.writeln('A palavra NÃO É um palíndromo!');
    }
}