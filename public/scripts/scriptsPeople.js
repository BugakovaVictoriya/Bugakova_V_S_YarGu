export function makePeopleCard(people) {
    const title = people.name;
    const gender = people.gender;
    const age = people.age;
    const eye_color = people.eye_color;
    const hair_color = people.hair_color;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title}</div>
            <div class="card__cont">
                <p>Gender: ${gender}</p>
                <p>Age: ${age}</p>
                <p>Eye color: ${eye_color}</p>
                <p>Hair color: ${hair_color}</p>
            </div>
         </div>
    `);
}