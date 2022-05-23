export function makeSpeciesCard(species) {
    const title = species.name;
    const classification = species.classification;
    const eye_color = species.eye_colors;
    const hair_color = species.hair_colors;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title}</div>
            <div class="card__cont">
                <p>Gender: ${classification}</p>
                <p>Eye color: ${eye_color}</p>
                <p>Hair color: ${hair_color}</p>
            </div>
         </div>
    `);
}