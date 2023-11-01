function tocasom(seletoraudio){
   const elemento = document.querySelector(seletoraudio).play('');
}


if(elemento != null && elemento.localname === 'audio'){
    elemento.play();
}else{
    alert('elemento não encontrado');
}
const lista = document.querySelectorAll('.tecla')

for (contador = 0; contador <lista.length){

   lista [contador].classList[1]

   const instrumento = lista[contador];
   const tecla = lista[contador];
   const idAudio = '#som_${instumento}';

tecla[contador].onclick = function(){
     tocasom(idAudio);
    };
}

