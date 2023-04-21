 
 
const countries = document.querySelector(".countries")


 async function getCountriesName(name){
    
    
const response = await fetch(`https://restcountries.com/v2/name/${name}`);
// const res2 = res1.then(function(response){
//     return response.json()
    
        
//});
const data = await response.json()
//res2.then(function(data){
    countries.innerHTML = " "
    const result = data[0]
    console.log(result)

    const neighborCode = result.borders[0]
    
    const html = `
    <article class="country">
    <img class="country__img" src=${result.flag} alt="">
    <div class="country__data">
        <h3 class="country__name">${result.name}</h3>                
        <h3 class="country__region">${result.region}</h3>
        <p class="country__row"><span>👨🏾‍🤝‍👨🏻</span>${(result.population/1000000).toFixed(1)}M</p>                
        <p class="country__row"><span>🗣️</span>${result.languages[0].name}</p>
        <p class="country__row"><span>🌆</span>${result.capital}</p>              
        <p class="country__row"><span>💰</span>${result.currencies[0].name}</p>                
    </div>
    
        
</article>
`
countries.insertAdjacentHTML("beforeend", html)
getNeighborCountryData(neighborCode)

//})

}
// getCountriseName("nigeria")


function getNeighborCountryData(code){
    const res1 = fetch(`https://restcountries.com/v2/alpha/${code}`)
    const res2 = res1.then(function(response){
        return response.json()
    })
    res2.then(function(data){
        console.log(data)

        const html = `<article class="country neighbour">
    <img class="country__img" src=${data.flag} alt="">
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>                
        <h3 class="country__region">${data.region}</h3>
        <p class="country__row"><span>👨🏾‍🤝‍👨🏻</span>${(data.population/1000000).toFixed(1)}to</p>                
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>🌆</span>${data.capital}</p>                
        <p class="country__row"><span>💱</span>${data.currencies[0].name}</p>                
    </div>
        
</article>`
countries.insertAdjacentHTML("beforeend", html)
    })
}

//getNeighborCountryData("ng")
//const searchBar = document.querySelector("input")
//const btn = document.querySelector("button")
let countryName;
document.querySelector("input").addEventListener('change', (e)=>{
    countryName = e.target.value

})

document.querySelector("button").addEventListener("click", ()=>{
    getCountriesName(countryName) 

 })

