const countries = [
  {
    id: 1,
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    population: 11750,
    flag: "https://flagcdn.com/wf.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 2,
    name: "Iceland",
    capital: "Reykjavik",
    population: 366425,
    flag: "https://flagcdn.com/is.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 3,
    name: "Luxembourg",
    capital: "Luxembourg",
    population: 632275,
    flag: "https://flagcdn.com/lu.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 4,
    name: "Mali",
    capital: "Bamako",
    population: 20250834,
    flag: "https://flagcdn.com/ml.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 5,
    name: "Comoros",
    capital: "Moroni",
    population: 869595,
    flag: "https://flagcdn.com/km.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 6,
    name: "Australia",
    capital: "Canberra",
    population: 25687041,
    flag: "https://flagcdn.com/au.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 7,
    name: "Estonia",
    capital: "Tallinn",
    population: 1331057,
    flag: "https://flagcdn.com/ee.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 8,
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
    flag: "https://flagcdn.com/ca.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 9,
    name: "Belarus",
    capital: "Minsk",
    population: 9398861,
    flag: "https://flagcdn.com/by.svg",
    isLiked: false,
    isBasket: false,
  },
  {
    id: 10,
    name: "Guyana",
    capital: "Georgetown",
    population: 786559,
    flag: "https://flagcdn.com/gy.svg",
    isLiked: false,
    isBasket: false,
  },
];
console.log(countries);
let cardList = document.querySelector(".card__list");
console.log(cardList);
function renderCards(arr) {
  cardList.innerHTML = ``;
  arr.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${item.flag}" alt="" />
            <div class="card__items">
              <h3 class="card__title">${item.name}</h3>
              <div class="text">
                <strong>Population:</strong>
                <p>${item.population}</p>
              </div>
              <div class="text">
                <strong>Region:</strong>
                <p>${item.name}</p>
              </div>
              <div class="text">
                <strong>Capital:</strong>
                <p>${item.capital}</p>
              </div>
            </div>
          </div>
        </div>
       `;
    cardList.append(card);
  });
}
renderCards(countries);
let input = document.querySelector(".input");
input.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  const filtredArray = countries.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtredArray);
  renderCards(filtredArray);
});
let select = document.querySelector(".select");
console.log(select);
countries.map((item) => {
  let option = document.createElement("option");
  option.textContent = item.name;
  option.value = item;
  select.append(option);
});
select.addEventListener("change", function (e) {
  console.log(e.target.value);
  renderCards(option);
});
