const search_input = document.getElementById('search');
const vagas_results = document.getElementById('vagas');
const noResult = document.getElementById('none');

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

    if (busca === '') {
        noResult.classList.remove('appear');
        noResult.classList.add('hidden');
    } else {
        let anyVisible = Array.from(results).some(result => {
            let aElement = result.closest('a');
            return aElement && aElement.style.display === 'block';
        });

        noResult.classList.toggle('appear', !anyVisible);
        noResult.classList.toggle('hidden', anyVisible);
    }
});
