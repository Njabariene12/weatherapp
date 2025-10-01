export const view = (() => {
    function displaying(weatherstuff) {
        if(!weatherstuff) return;
        const getresults = document.getElementById("result");
        getresults.classList.add("activite");
        const citiname = document.getElementById("citiname");
        const temperature = document.getElementById("temperature");
        const humidity = document.getElementById("hum");
        const wind = document.getElementById("win");
        
        citiname.textContent = `${weatherstuff.citiname}`;
        temperature.textContent = `${weatherstuff.temp} °F`;
        humidity.textContent = `${weatherstuff.humidity} mmHg`;
        wind.textContent = `${weatherstuff.windSpeed} km/h`;
    }
    return {displaying};
})();
//export default view;