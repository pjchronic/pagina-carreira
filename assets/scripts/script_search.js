const search_input = document.getElementById('search');
const vagas_results = document.getElementById('vagas');

search_input.addEventListener('keyup', () => {
    let busca = search_input.value.toLowerCase();
    let results = vagas_results.querySelectorAll('.vaga__name, .vaga__name_variação');

    results.forEach(result => {
        let aElement = result.closest('a'); 
        if (aElement) {
            let textoDoResultado = aElement.textContent.toLowerCase();

            if (textoDoResultado.includes(busca)) {
                aElement.style.display = 'block'; 
            } else {
                aElement.style.display = 'none';
            }
        }
    });
});
