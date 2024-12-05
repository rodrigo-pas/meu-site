document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: mudar a cor do cabeçalho ao clicar
    const header = document.querySelector('header h1');
    header.addEventListener('click', function() {
        header.style.color = 'blue';  // Altera a cor do texto
    });

    // Aviso ao clicar nas abas
    const contatoLink = document.querySelector('a[href="contato.html"]');
    contatoLink.addEventListener('click', function() {
        alert('Você está indo para a página de contato!');
    });

    const sobreLink = document.querySelector('a[href="sobre.html"]');
    sobreLink.addEventListener('click', function() {
        alert('Você está indo para a página de sobre mim!');
    });

    const experienciaLink = document.querySelector('a[href="experiencia.html"]');
    experienciaLink.addEventListener('click', function() {
        alert('Você está indo para a página de experiências!');
    });

    const formacaoLink = document.querySelector('a[href="formacao.html"]');
    formacaoLink.addEventListener('click', function() {
        alert('Você está indo para a página de formação!');
    });

    const portifolioLink = document.querySelector('a[href="portifolio.html"]');
    portifolioLink.addEventListener('click', function() {
        alert('Você está indo para a página de portifólio!');
    });

    const indexLink = document.querySelector('a[href="index.html"]');
    indexLink.addEventListener('click', function() {
        alert('Você está indo para a página inicial!');
    });
});
