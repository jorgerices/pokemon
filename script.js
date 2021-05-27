$(document).ready(function(){
    for (let i=1; i<=152; i++){
        $('#pokemones').append(`
        <div class="col-2">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">
        </div>`
        )
    }
});
    