let inp = document.getElementById("inp")
let btnn = document.getElementById("btnn")
let cityName = document.getElementById("nameOfCity")
let icon = document.getElementById("icon")
let deg = document.getElementById("deg")
let humidity = document.getElementById("humidity")
let desc = document.getElementById("desc")
let wind = document.getElementById("wind")
let punjabImg = document.getElementById("punjabImg")
let lucknowImg = document.getElementById("lucknowImg")
let kolkataImg = document.getElementById("kolkataImg")
let punjabDeg = document.getElementById("punjabDeg")
let lucknowDeg = document.getElementById("lucknowDeg")
let kolkataDeg = document.getElementById("kolkataDeg")
let phumidity = document.getElementById("phumidity")
let pdesc = document.getElementById("pdesc")
let pwind = document.getElementById("pwind")
let khumidity = document.getElementById("khumidity")
let kdesc = document.getElementById("kdesc")
let kwind = document.getElementById("kwind")
let lhumidity = document.getElementById("lhumidity")
let ldesc = document.getElementById("ldesc")
let lwind = document.getElementById("lwind")
function handleResponse (res) {
    if( inp.value == "" ){
        alert("please put something in the search box")
    }
    if(res.message == "city not found"){
        alert("invalid city")
    }
    let wiiind = res.wind.speed * 3.6
    wiiind = Math.round(wiiind)
    cityName.innerHTML = `<b class='font-sans' >The Weather For ${res.name} Is Like </b>`
    deg.innerHTML = `<b class='font-mono' >Temp: ${res.main.temp}<span>&#176;</span>C</b>`
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`)
    desc.innerHTML  = `<b >  ${res.weather[0].description} </eb`
    wind.innerHTML = `<b> Wind speed ${wiiind}km/h</b>`
    humidity.innerHTML = `<b> Humidity ${res.main.humidity}% </b>`
}
function handleKolkata(res){
    let kwiiind = res.wind.speed * 3.6
    kwiiind = Math.round(kwiiind)
    kolkataDeg.innerHTML = `<b  class="text-2xl">${res.main.temp}<span>&#176;</b>`
    kolkataImg.setAttribute("src",`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png` )
    kdesc.innerHTML = `<b>   ${res.weather[0].description} </b>`
    khumidity.innerHTML = `<b>   Humidity ${res.main.humidity}% </b>`
    kwind.innerHTML = `<b> Wind speed ${kwiiind}km/h  </b>`

}
function handleLucknow(res){
    let wiiind = res.wind.speed * 3.6
    wiiind = Math.round(wiiind)
    lucknowDeg.innerHTML = `<b class="text-2xl" >${res.main.temp}<span>&#176;</b>`
    lucknowImg.setAttribute("src",`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png` )
    ldesc.innerHTML = `<b>   ${res.weather[0].description} </b>`
    lhumidity.innerHTML = `<b>   Humidity ${res.main.humidity}% </b>`
    lwind.innerHTML = `<b> Wind speed ${wiiind}km/h  </b>`
}
function handlePunjab(res){
    let pwiiind = res.wind.speed * 3.6
    pwiiind = Math.round(pwiiind)
    punjabDeg.innerHTML = `<b class="text-2xl" >${res.main.temp}<span>&#176;</b>`
    punjabImg.setAttribute("src",`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png` )
    pdesc.innerHTML = `<b>   ${res.weather[0].description} </b>`
    phumidity.innerHTML = `<b>   Humidity ${res.main.humidity}% </b>`
    pwind.innerHTML = `<b> Wind speed ${pwiiind}km/h  </b>`
}
fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=7e9758edbc3147dd03aff112e6631cea&units=metric")
.then(res=>res.json())
.then(ress=>handleKolkata(ress))
fetch("https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=7e9758edbc3147dd03aff112e6631cea&units=metric")
.then(res=>res.json())
.then(ress=>handleLucknow(ress))
fetch("https://api.openweathermap.org/data/2.5/weather?q=punjab&appid=7e9758edbc3147dd03aff112e6631cea&units=metric")
.then(res=>res.json())
.then(ress=>handlePunjab(ress))
btnn.addEventListener("click", (e) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=7e9758edbc3147dd03aff112e6631cea&units=metric`
    )
      .then((res) => res.json())
      .then((ress) => handleResponse(ress));
  });