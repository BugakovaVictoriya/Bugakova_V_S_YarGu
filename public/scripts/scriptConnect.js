import {makeFilmCard} from './scriptsFilm.js'
import {makeLocationsCard} from './scriptsLocation.js'
import {makePeopleCard} from './scriptsPeople.js'
import {makeSpeciesCard} from './scriptsSpecies.js'
import {makeVehiclesCard} from './scriptsVehicles.js'

const namePage = document.body.getElementsByTagName("h1")[0].textContent;
const app = document.getElementById('root');
const preloader = `
        <div class="preloader" id="preloader">
            <img src="../img/rings.svg" width="100">
        </div>
    `;

async function getDataFilm() {
    app.insertAdjacentHTML('beforeend', preloader);
    try {
        let url = 'https://ghibliapi.herokuapp.com/'+namePage;
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            data.forEach(data => {
                let template;
                switch(namePage) {
                    case "Films": 
                        template = makeFilmCard(data);
                        break;
                    case "Locations": 
                        template = makeLocationsCard(data);
                        break;
                    case "People": 
                        template = makePeopleCard(data);
                        break;
                    case "Species": 
                        template = makeSpeciesCard(data);
                        break;
                    case "Vehicles": 
                        template = makeVehiclesCard(data);
                        break;
                    }

                app.insertAdjacentHTML('beforeend', template);
            });
        } else {
            throw new Error('Something went wrong');
        }
    } catch(err) {
        handleError(err);
    }
    app.removeChild(app.firstElementChild);
}

getDataFilm();