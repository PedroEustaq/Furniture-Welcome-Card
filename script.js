var btn = document.getElementById("shar");
var anim = document.getElementById("redes");
var lac = 0;
function clicou() {
    // Reinicia a animação removendo o elemento do fluxo do documento momentaneamente
    anim.style.animation = 'none'; 
    void anim.offsetWidth; // Força um reflow, permitindo que a animação seja reiniciada
    anim.style.animation = ''; // Restaura a animação

    if (lac == 0) {
        anim.style.animationDirection = 'normal';  // Animação na direção normal
        anim.style.animationPlayState = 'running'; // Inicia a animação
        lac = 1;
    } else {
        anim.style.animationDirection = 'reverse'; // Reverte a direção da animação
        anim.style.animationPlayState = 'running'; // Inicia a animação novamente
        lac = 0;
    }
}