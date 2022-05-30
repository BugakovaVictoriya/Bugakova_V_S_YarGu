export function makePeopleCard(people) {
    const title = people.name;
    const gender = people.gender;
    const age = people.age;
    const eyeColor = people.eye_color;
    const hairColor = people.hair_color;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title}</div>
            <div class="card__cont">
                <p>Gender: ${gender}</p>
                <p>Age: ${age}</p>
                <p>Eye color: ${eyeColor}</p>
                <p>Hair color: ${hairColor}</p>
            </div>
         </div>
    `);
}