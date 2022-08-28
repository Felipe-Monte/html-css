
function buscar() {
    let texto = document.getElementById('itexto').value 
    let itens = document.getElementById('itens')

    if (texto == 0) {
        alert('campo em branco')

    } else if (texto == 'blusa') {
        itens.innerHTML = `<a href="#"><p>00612 Blusa LZ14</p></a>`
        itens.innerHTML += `<a href="#"><p>00613 Blusa LZ14</p></a>`
        itens.innerHTML += `<a href="#"><p>00614 Blusa LZ14</p></a>`
        itens.innerHTML += `<a href="#"><p>00615 Blusa LZ14</p></a>`    
        itens.innerHTML += `<a href="#"><p>00616 Blusa LZ14</p></a>`
        
            
    }


}