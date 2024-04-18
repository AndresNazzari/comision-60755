export const products = [
    {
      id: 1,
      name: 'Bulbasaur',
      description:
        'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth.',
      price: 100,
      stock: 10,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
      id: 4,
      name: 'Charmander',
      description:
        'Charmander is a bipedal, reptilian Pokémon with a primarily orange body.',
      price: 400,
      stock: 40,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
      id: 7,
      name: 'Squirtle',
      description:
        'Squirtle is a small Pokémon that resembles a light blue turtle.',
      price: 700,
      stock: 70,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
    {
      id: 25,
      name: 'Pikachu',
      description:
        'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
      price: 2500,
      stock: 250,
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
  ]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)

            // reject('No se pudo traer los productos')
        }, 2000)
    })
}