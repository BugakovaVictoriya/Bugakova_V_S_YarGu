import {makeFilmCard} from './scriptsFilm.js'
import {makeLocationsCard} from './scriptsLocation.js'
import {makePeopleCard} from './scriptsPeople.js'
import {makeSpeciesCard} from './scriptsSpecies.js'
import {makeVehiclesCard} from './scriptsVehicles.js'

const name_page = document.body.getElementsByTagName("h1")[0].textContent;
const app = document.getElementById('root');

async function getDataFilm() {
    let url = 'https://ghibliapi.herokuapp.com/'+name_page;
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(data => {
            let template;
            switch(name_page) {
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

}
getDataFilm();