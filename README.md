# PokemonInfo

Buscador de Pokemon usando la API de Pokemon (<https://pokeapi.co/>). Muestra todos los pokemons de la primera generación (la buena) como si fuesen cartas.

## Encabezado de la página

Se puede usar el campo de entrada para buscar a un pokemon por su nombre. Mientras se escribe se irá actulizando los pokemon que se muestren para que corresponda con la entrada del usuario.

## Body

Los Pokemon se muestran como un grid responsive, hay un ancho máximo de 800px así que como máximo se mostrarán 3 Pokemons. En la cara de delante se muestra el nombre del Pokemon y una imagen del mismo. Al hacer click en el pokemon se dará la cuelta a la carta con un efecto y se mostrará:

- Número en la Pokedex

- Tipos

- Una gráfica con las estadísticas

## Librerías y APIs utilizadas

- PokeAPI para buscar los datos (<https://pokeapi.co/>)

- SwiperJS para el efecto de giro (<https://swiperjs.com/>)

- ChartJS para la gráfica (<https://www.chartjs.org/>)
