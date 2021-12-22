function carregar(){
    var agora = new Date();
    var hora = agora.getHours();
    if (hora >= 10 && hora <= 22){
        var imagem = document.querySelector('#horas');
        imagem.style.background = '#00ff37';
    }else {
        var imagem = document.querySelector('#horas');
        imagem.style.background = '#ff0000';
    }
}