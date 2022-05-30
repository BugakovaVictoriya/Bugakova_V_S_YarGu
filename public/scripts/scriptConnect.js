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
                let template = {
                    Films: makeFilmCard(data),
                    Locations: makeLocationsCard(data),
                    People: makePeopleCard(data),
                    Species: makeSpeciesCard(data),
                    Vehicles: makeVehiclesCard(data)
                }[namePage];
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

function handleError(err){
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Something went wrong! ${err}`;
    app.appendChild(errorMessage);
}