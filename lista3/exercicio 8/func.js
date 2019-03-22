function verificarRadio() {
    if (document.getElementById('pessoa').checked) {
        document.getElementById('data_nasc').style.display = 'block';
        document.getElementById('cpf').style.display = 'block';
        document.getElementById('cnpj').style.display = 'none';
    } else {
        document.getElementById('data_nasc').style.display = 'none';
        document.getElementById('cnpj').style.display = 'block';
        document.getElementById('cpf').style.display = 'none';
    }
}

function cadastrar() {
    document.writeln('Cadastrado!');
}