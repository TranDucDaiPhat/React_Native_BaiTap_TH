
const api = 'https://geocode.xyz/10.78604,106.70123?geoit=xml&auth=117106242922243e15735161x15943'
// const api = 'https://geocode.xyz/-33.933, 18.474?geoit=xml&auth=117106242922243e15735161x15943'


function whereAmI(latitude, longitude) {
    fetch(api)
        .then(function(response) {
            // return response.json();
            return response.text();
        })
        .then(function(data) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, 'text/html');
            let city = xmlDoc.getElementsByTagName('city')[0];
            let country = xmlDoc.getElementsByTagName('country')[0];
            console.log('You are in', city.innerText + ', ' + country.innerText);
        })
        .catch(function() {
            // This API allows you to make only 3 requests per second. 
            // If you reload fast, you will get this error with code 403.
            console.log('Your coordinates not found!');
            alert('error!');
        })
}

whereAmI()


