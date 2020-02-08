var city = [];
var temp = [];
var humidity = [];
var speed = [];
var pressure = [];
var description = [];
var lon = [36.080276, 38.01667];
var lat = [52.965832, 54.866669];
jQuery(document).ready(function ($) {
    for (var k = 0; k < lon.length; k++) {
        console.log(k);
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat="+ lat[k] + "&lon=" + lon[k] + "&APPID=001b0f58045147663b1ea518d34d88b4&units=metric",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                temp.push(Math.round(data.main.temp));
                humidity.push(data.main.humidity);
                speed.push(data.wind.speed);
                pressure.push(data.main.pressure);
                description.push(data.weather[0].main);
                city.push(data.name);
                console.log(temp);
                var todayTemp = document.querySelector('.todayTemp');
                var setCity = document.querySelector('.city');
                var setHumidity = document.querySelector('.humidity');
                var setSpeed = document.querySelector('.speed');
                var setPressure = document.querySelector('.pressure');
                var textAnimation = document.querySelector('.text_animation');
                var celsius = document.querySelector('.celsius');
                var src = document.querySelector('.weather');
                var img = document.createElement("img");
                var i = 0;

                function setAll() {
                    todayTemp.classList.remove("anim_todayTemp2");
                    setCity.classList.remove("anim_setCity2");
                    src.classList.remove("anim_src2");
                    textAnimation.classList.remove("anim_text2");
                    celsius.classList.remove("anim_todayTemp2");
                    todayTemp.classList.add("anim_todayTemp1");
                    setCity.classList.add("anim_setCity1");
                    src.classList.add("anim_src1");
                    textAnimation.classList.add("anim_text1");
                    celsius.classList.add("anim_todayTemp1");
                    setTimeout(function () {
                        todayTemp.classList.remove("anim_todayTemp1");
                        setCity.classList.remove("anim_setCity1");
                        src.classList.remove("anim_src1");
                        textAnimation.classList.remove("anim_text1");
                        celsius.classList.remove("anim_todayTemp1");
                        todayTemp.classList.add("anim_todayTemp2");
                        setCity.classList.add("anim_setCity2");
                        src.classList.add("anim_src2");
                        textAnimation.classList.add("anim_text2");
                        celsius.classList.add("anim_todayTemp2");
                    }, 2000);
                    todayTemp.textContent = temp[i];
                    setCity.textContent = city[i];
                    setHumidity.textContent = humidity[i] + '%';
                    setSpeed.textContent = speed[i] + ' м/с';
                    setPressure.textContent = pressure[i] + ' мм рт.ст.';

                    if (description[i] === "Clear") {
                        img.src = "animated/Clear.svg";
                    } else if (description[i] === "Clouds") {
                        img.src = "animated/Clouds.svg";
                    } else if (description[i] === "Thunderstorm") {
                        img.src = "animated/Thunderstorm.svg";
                    } else if (description[i] === "Drizzle") {
                        img.src = "animated/Drizzle.svg";
                    } else if (description[i] === "Rain") {
                        img.src = "animated/Rain.svg";
                    } else if (description[i] === "Snow") {
                        img.src = "animated/Snow.svg";
                    } else {
                        img.src = "animated/cloudy.svg";
                    }
                    src.appendChild(img);


                    i++;
                    // console.log('i', i);
                    if (i > temp.length - 1) {
                        i = 0;
                    }
                    timer = setTimeout(setAll, 4000);
                }

                setAll();

            }
        });
    }

});
