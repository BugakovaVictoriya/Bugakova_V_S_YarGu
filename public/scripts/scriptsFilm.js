export function makeFilmCard(movie) {
    const title = movie.title;
    const titleOrig = movie.original_title_romanised;
    const titleJapan = movie.original_title;
    const text = movie.description;
    const textData = movie.release_date;
    return (`
        <div class="card-list__card card">
            <div class="card__title">${title} (${titleOrig}, ${titleJapan})</div>
            <div class="card__cont">
                <p>${text} </p>
                <p>Release Date: ${textData}</p>
            </div>
        </div>
    `);
}