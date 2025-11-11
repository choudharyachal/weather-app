console.log("Weather App loaded");
document.getElementById('search-btn').addEventListener('click',function() {
    const city = document.getElementById('city-input').value;
    console.log('City entered:',city);
});