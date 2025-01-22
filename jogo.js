const sprites = new Image();
sprites.src = './sprites.png';
const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d');


contexto.fillStyle = 'rgb(114, 199, 255)'; 
contexto.fillRect(0,0, canvas.clientWidth, canvas.height)


const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 35,
    altura: 25,
    x: 10,
    y: 50,
        desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,

        );}
}

const cenario = {
    spriteX: 390,
    spriteY: 0,
    largura: 274,
    altura: 202,
    x:0,
    y:280,
        desenha() {
        contexto.drawImage(
            sprites,
            cenario.spriteX, cenario.spriteY,
            cenario.largura, cenario.altura,
            cenario.x , cenario.y,
            cenario.largura, cenario.altura,

        )
        contexto.drawImage(
            sprites,
            cenario.spriteX, cenario.spriteY,
            cenario.largura, cenario.altura,
            cenario.x + cenario.largura, cenario.y,
            cenario.largura, cenario.altura,

            

        );}
}


const chao = {
    spriteX: 1,
    spriteY: 610,
    largura: 220,
    altura: 112,
    x:0,
    y:368,
        desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY ,
            chao.largura, chao.altura,
            chao.x , chao.y,
            chao.largura, chao.altura,

        )
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY ,
            chao.largura, chao.altura,
            chao.x + chao.largura, chao.y,
            chao.largura, chao.altura,

        )
        ;}
}


function loop() {
    flappyBird.desenha();
    cenario.desenha();
    chao.desenha();

    requestAnimationFrame(loop);
}
loop();

