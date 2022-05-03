const app = document.getElementById('root');

async function getDataVehicles() {
    const response = await fetch('https://ghibliapi.herokuapp.com/vehicles');
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(vehicles => {
            const title = vehicles.name;
            const description = vehicles.description;
            const vehicle_class = vehicles.vehicle_class;
            const length = vehicles.length;
            const template = `
                <div class="card-list__card card">
                    <div class="card__title">${title}</div>
                    <div class="card__cont">
                    <p>${description}</p>
                    <p>Vehicle class: ${vehicle_class}</p>
                    <p>Length: ${length}</p>
                    </div>
                 </div>
            `;

            app.insertAdjacentHTML('beforeend', template);
        });
    } else {
        throw new Error('Something went wrong');
    }

}
getDataVehicles();