document.addEventListener('DOMContentLoaded', function () {
    const cityContainer = document.getElementById('cityContainer');

    // Modify the JSON data directly
    const citiesData = {
        "places": [
            {
                "name": "Delhi",
                "population": 33807403,
                "district": "Delhi",
                "State": "New Delhi", // Corrected case to "State"
                "image": "Delhi.jpg"
            },
            {
                "name": "Pune",
                "population": 7232555,
                "district": "Pune",
                "State": "Maharashtra", // Corrected case to "State"
                "image": "Pune.jpg"
            },
            {
                "name": "Bengaluru",
                "population": 1200000,
                "district": "Bengaluru",
                "State": "Karnataka", // Corrected case to "State"
                "image": "bengaluru.jpg"
            }
        ]
    };

    if (citiesData && citiesData.places && Array.isArray(citiesData.places)) {
        // Display information for the first three cities
        for (let i = 0; i < Math.min(3, citiesData.places.length); i++) {
            const city = citiesData.places[i];

            const cityCard = document.createElement('div');
            cityCard.classList.add('city-card');

            const cityName = document.createElement('div');
            cityName.classList.add('city-name');
            cityName.textContent = city.name;

            const cityPopulation = document.createElement('div');
            cityPopulation.classList.add('city-info');
            cityPopulation.textContent = `Population: ${city.population}`;

            const cityDistrict = document.createElement('div');
            cityDistrict.classList.add('city-info');
            cityDistrict.textContent = `District: ${city.district}`;

            const cityState = document.createElement('div');
            cityState.classList.add('city-info');
            cityState.textContent = `State: ${city.State}`; // Corrected case to "State"

            const cityImage = document.createElement('img');
            cityImage.classList.add('city-image');
            cityImage.src = city.image || 'https://via.placeholder.com/300';
            cityImage.alt = `${city.name} Image`;
            cityImage.width = 500;
            cityImage.height = 500;

            cityCard.appendChild(cityName);
            cityCard.appendChild(cityPopulation);
            cityCard.appendChild(cityDistrict);
            cityCard.appendChild(cityState);
            cityCard.appendChild(cityImage);

            cityContainer.appendChild(cityCard);
        }
    } else {
        console.error('Invalid data structure');
        cityContainer.innerHTML = '<p>Error in data structure. Please check the JSON data.</p>';
    }
});
