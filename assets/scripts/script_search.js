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
                noResult.classList.remove('appear');
            } else {

                aElement.style.display = 'none';
                noResult.classList.add('appear');
                
            }
        }
    });
    
});
