let section = document.querySelector('.weather')
let input = document.querySelector('.weather__search');
let btn = document.querySelector('#submitBtn');
let nameTitle = document.querySelector('#name')
let degrees = document.querySelector('#degrees')
let windTit = document.querySelector('#wind')
let humidity = document.querySelector('#humidity')
let windSpeed = document.querySelector('#windSpeed')
let weatherImgBox = document.querySelector('.weather__img-box')

btn.addEventListener('click', weather)

function weather(e) {
  e.preventDefault();

  let out = input.value
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${out}&units=metric&appid=33dedde6287575d237be2e1c44271762`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      nameTitle.innerHTML = data.name
      degrees.innerHTML = `${data.wind.deg}°C`;
      windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`

      data.weather.forEach(wind => {
        if (wind.main == "Sunny") {
          section.style.backgroundColor = '#42C2FF'
          windTit.innerHTML = `${wind.main} <i class='bx bx-sun'></i>`;
          weatherImgBox.innerHTML = `<img src="images/sunny.svg" alt="icon">`;
        }
        else if (wind.main == "Rain") {
          section.style.backgroundColor = '#A8AAC4'
          windTit.innerHTML = `${wind.main}<i class='bx bx-cloud-light-rain'></i>`;
          weatherImgBox.innerHTML = `<img src="images/rain.svg" alt="icon">`;
        }
        else if (wind.main == "Clouds") {
          section.style.backgroundColor = '#8487AC'
          windTit.innerHTML = `${wind.main}<i class='bx bx-cloud' ></i>`;
          weatherImgBox.innerHTML = `<img src="images/rain.svg" alt="icon">`;
        }
        else if (wind.main == "Snow") {
          section.style.backgroundColor = '#6BA7CC'
          windTit.innerHTML = `${wind.main}<i class='bx bx-cloud-snow' ></i>`;
          weatherImgBox.innerHTML = `<img src="images/snow.svg" alt="icon">`;
        }
        else if (wind.main == "Clear") {
          section.style.backgroundColor = '#712B75'
          windTit.innerHTML = `${wind.main}<i class='bx bx-moon'></i>`;
          weatherImgBox.innerHTML = `<img src="images/clear.svg" alt="icon">`;
        }
      })
    })

  input.value = ""
}
