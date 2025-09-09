// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade do Menu Hambúrguer para Celulares ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona um evento de clique no botão do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active', que faz o menu aparecer ou desaparecer (controlado via CSS)
        navMenu.classList.toggle('active');
    });

    // --- Atualização automática do ano no rodapé ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        // Define o texto do elemento com o ano atual
        yearSpan.textContent = new Date().getFullYear();
    }

});