export function makeVehiclesCard(vehicles) {
    const title = vehicles.name;
    const description = vehicles.description;
    const vehicleClass = vehicles.vehicle_class;
    const length = vehicles.length;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title}</div>
                <div class="card__cont">
                <p>${description}</p>
                <p>Vehicle class: ${vehicleClass}</p>
                <p>Length: ${length}</p>
            </div>
        </div>
    `);
}