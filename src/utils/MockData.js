export const products = [
  {
    // id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth.",
    price: 100,
    stock: 10,
    category: ["grass"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    // id: 2,
    name: "Ivysaur",
    description:
      "Ivysaur is a quadruped Pokémon that has blue-green skin with darker patches. ",
    price: 200,
    stock: 20,
    category: ["grass"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  },
  {
    // id: 4,
    name: "Charmander",
    description:
      "Charmander is a bipedal, reptilian Pokémon with a primarily orange body.",
    price: 400,
    stock: 40,
    category: ["fire"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    // id: 7,
    name: "Squirtle",
    description:
      "Squirtle is a small Pokémon that resembles a light blue turtle.",
    price: 700,
    stock: 70,
    category: ["water"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    // id: 25,
    name: "Pikachu",
    description:
      "This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.",
    price: 2500,
    stock: 250,
    category: ["electric", "normal"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
];

export const getProducts = () => {
  // return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);

      // reject('No se pudo traer los productos')
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = products.filter((elem) => {
        let isMatch = false;
        elem.category.find((elem) => {
          if (elem === categoryId) {
            isMatch = true;
          }
        });
        return isMatch; // true o false
      });
      resolve(filteredProducts);
      // reject('No se pudo traer los productos')
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((elem) => elem.id === parseInt(productId));
      resolve(product);
      // reject('No se pudo traer los productos')
    }, 1000);
  });
};

// export const setProduct = () => {
//   return fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "test product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     }),
//   }).then((res) => res.json());

// new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve(products);

//   // reject('No se pudo traer los productos')
// }, 2000);
// });
// };
