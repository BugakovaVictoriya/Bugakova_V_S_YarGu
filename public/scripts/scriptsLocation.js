const app = document.getElementById('root');

async function getDataLoation() {
    const response = await fetch('https://ghibliapi.herokuapp.com/locations');
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(locations => {
            const title = locations.name;
            let climate = locations.climate;
            let terrain = locations.terrain;
            const surface_water = locations.surface_water;
            if(climate == 'TODO'){
                climate = "-";
            };
            if(terrain == 'TODO'){
                terrain = "-";
            };

            const template = `
                <div class="card-list__card card">
                    <div class="card__title">${title}</div>
                    <div class="card__cont">
                        <p>Climate: ${climate}</p>
                        <p>Terrain: ${terrain}</p>
                        <p>Surface Water: ${surface_water}%</p>
                    </div>
                 </div>
            `;

            app.insertAdjacentHTML('beforeend', template);
        });
    } else {
        throw new Error('Something went wrong');
    }

}
getDataLoation();