let text = document.querySelector('.inputvalue')
let button = document.querySelector('.button')
let cityName = document.querySelector('.name')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+text.value+'&appid=95157519ee2d3d89478ea6b77b57b066')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather']['0']['description'];
        text.value = ""

        cityName.innerHTML = nameValue;
        temp.innerHTML = "temp :" + tempValue;
        desc.innerHTML = "weather :" + descValue;
    })
.catch(err => alert("wrong city name")) 
});
