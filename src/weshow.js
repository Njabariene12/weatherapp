export function show(){
//const img = document.getElementById('result');
//const citi = document.getElementById('input');
//const city = citi.value;



function showdetails(temp){
    const imag = document.getElementById('result');
    imag.textContent = `${temp}`;
}




async function weatherstatus(cito) {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cito}?key=Q5B6SAGL9K9TLF33ZLACMBGX6`);
    const response = await request.json();

    console.log(response);

    const tempa = response.currentConditions.temp;

    showdetails(tempa);
   
}



const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const cito = document.getElementById('input');
    weatherstatus(cito.value);
    console.log(cito.value);
    
})


}