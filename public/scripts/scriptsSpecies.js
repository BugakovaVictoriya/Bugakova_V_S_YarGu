const app = document.getElementById('root');

async function getDataSpecies() {
    const response = await fetch('https://ghibliapi.herokuapp.com/species');
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(species => {
            const title = species.name;
            const classification = species.classification;
            const eye_color = species.eye_colors;
            const hair_color = species.hair_colors;
            const template = `
                <div class="card-list__card card">
                    <div class="card__title">${title}</div>
                    <div class="card__cont">
                    <p>Gender: ${classification}</p>
                    <p>Eye color: ${eye_color}</p>
                    <p>Hair color: ${hair_color}</p>
                    </div>
                 </div>
            `;

            app.insertAdjacentHTML('beforeend', template);
        });
    } else {
        throw new Error('Something went wrong');
    }

}
getDataSpecies();