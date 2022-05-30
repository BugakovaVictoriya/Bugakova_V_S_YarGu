export function makeSpeciesCard(species) {
    const title = species.name;
    const classification = species.classification;
    const eyeColor = species.eye_colors;
    const hairColor = species.hair_colors;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title}</div>
            <div class="card__cont">
                <p>Gender: ${classification}</p>
                <p>Eye color: ${eyeColor}</p>
                <p>Hair color: ${hairColor}</p>
            </div>
         </div>
    `);
}