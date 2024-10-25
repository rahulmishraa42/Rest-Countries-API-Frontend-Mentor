const countryContainer = document.querySelector("main");

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.forEach((el) => {
        console.log(el)
        countryContainer.innerHTML += `<div class="countryCard">
            <div class="countryImage">
                <img src=${el.flags.svg} alt="${el.name.common} flag">
            </div>
            <div class="countryDetails">
                <h2>${el.name.common}</h2>
                <b>Population: <span>${el.population.toLocaleString("en-IN")}</span></b>
                <b>Region: <span>Europe</span></b>
                <b>Capital: <span>${el.capital}</span></b>
            </div>
        </div>`
    })
})