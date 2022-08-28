
function buscar() {
    let texto = document.getElementById('itexto').value 
    let itens = document.getElementById('itens')

    if (texto == 0) {
        alert('campo em branco')

    } else if (texto == 'blusa') {
        itens.innerHTML = `<p><a href="#">00612 Blusa LZ14</a></p>`
        itens.innerHTML += `<p><a href="#">00613 Blusa LZ14</a></p>`
        itens.innerHTML += `<p><a href="#">00614 Blusa LZ14</a></p>`
        itens.innerHTML += `<p><a href="#">00615 Blusa LZ14</a></p>`    
        itens.innerHTML += `<p><a href="#">00616 Blusa LZ14</a></p>`
        
            
    }


}