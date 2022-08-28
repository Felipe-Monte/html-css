
function entrar() {
    var login = document.getElementById('itexto').value
    var senha = document.getElementById('isenha').value
    var lista = document.getElementById('ilista').value

    if (login == 'felipe' && senha == '123') {
        alert('entrou')
        location.href = 'prototipo02.html'

    } else {
        alert('Campo vazio !')
    }
}