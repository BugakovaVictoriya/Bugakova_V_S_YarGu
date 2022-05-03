const app = document.getElementById('root');

async function getDataFilm() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    if (response.status === 200) {
        const data = await response.json();
        data.forEach(movie => {
            const title = movie.title;
            const title_orig = movie.original_title_romanised;
            const title_japan = movie.original_title;
            const text = movie.description;
            const text_data = movie.release_date;
            const template = `
                <div class="card-list__card card">
                    <div class="card__title">${title} (${title_orig}, ${title_japan})</div>
                    <div class="card__cont">
                    <p>${text} </p>
                    <p>Release Date: ${text_data}</p>
                    </div>
                 </div>
            `;

            app.insertAdjacentHTML('beforeend', template);
        });
    } else {
        throw new Error('Something went wrong');
    }

}
getDataFilm();