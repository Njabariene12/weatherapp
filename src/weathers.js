export const weather = (() => {
    async function skydat(city) {
        const endsky = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=Q5B6SAGL9K9TLF33ZLACMBGX6`;
        try {
            const response = await fetch(endsky, { mode: 'cors' });
            if (!response.ok) throw new Error(`City ${city} response was not ok: ${response.status}`);
            
            const rawData = await response.json();
            console.log('FULL API RESPONSE:', rawData); // This will show us the actual structure
            
            // Let's also check specific parts
            console.log('Address:', rawData.address);
            //console.log('Resolved Address:', rawData.resolvedAddress);
            console.log('Current Conditions:', rawData.currentConditions);
            
            if (rawData.currentConditions) {
                console.log('Temperature:', rawData.currentConditions.temperature);
                console.log('Humidity:', rawData.currentConditions.humidity);
                console.log('Windspeed:', rawData.currentConditions.windspeed);
            }
            
            const data = convertsky(rawData);
            return data;
        } catch (error) {
            alert(`Weather data error: ${error.message}`);
            console.error('API Error:', error);
            return null;
        }
    }

    function convertsky(skyData) {
    return {
        citiname: skyData.address, // Sometimes this is the city name
        temp: skyData.days[0].temp, // Data might be in days array
        humidity: skyData.days[0].humidity,
        windSpeed: skyData.days[0].windspeed
    };
    }

    return { skydat };
})();
//export default weather;