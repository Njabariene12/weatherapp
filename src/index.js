import "./styles.css";

//import {show} from "./weshow.js";
import {view} from "./viewas.js";
import {weather} from "./weathers.js";

const findata = document.getElementById("skyform");
const searchinput = document.getElementById("input");
const searchbtn = document.getElementById("searchbtn");

findata.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchbtn.addEventListener("click", async() => {
    if (searchinput.value === "") return;
    const weatherstuff = await weather.skydat(searchinput.value);
    view.displaying(weatherstuff);
});




//document.getElementById("input").addEventListener("input", show());