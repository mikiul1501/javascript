function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}


const lista = document.querySelectorAll('.tecla')

for (contador = 0; contador <lista.length;contador++){

   lista [contador].classList[1]

   const instrumento = lista[contador];
   const tecla = lista[contador];
   const idAudio = '#som_${instumento}';

tecla[contador].onclick = function(){
     tocasom(idAudio);
    };
}

