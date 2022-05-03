const app = document.getElementById('root');

async function getDataPeople() {
    const response = await fetch('https://ghibliapi.herokuapp.com/people');
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(people => {
            const title = people.name;
            const gender = people.gender;
            const age = people.age;
            const eye_color = people.eye_color;
            const hair_color = people.hair_color;
            const template = `
                <div class="card-list__card card">
                    <div class="card__title">${title}</div>
                    <div class="card__cont">
                    <p>Gender: ${gender}</p>
                    <p>Age: ${age}</p>
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
getDataPeople();