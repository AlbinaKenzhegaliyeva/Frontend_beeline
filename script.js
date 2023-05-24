fetch("https://api.tvmaze.com/search/shows/?q=love")
.then((res) => {
    console.log("SUCCESS!");
    return res.json();
})
.then((data) => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[0].show.image.medium;
    document.body.append(img);

    const div = document.getElementsByTagName('div')[0];
    console.log(div);
    img.classList.add('film-img');
    div.append(img);

    const film_name = document.createElement('h2');
    film_name.textContent = data[0].show.name;

    const div2 = document.querySelector('.row2_1');
    div2.append(film_name);

    const genre = document.createElement('p');
    genre.textContent = data[0].show.genres;
    div2.append(genre);

    const language = document.createElement('p');
    language.textContent = data[0].show.language;
    div2.append(language);
})
.catch((err)=>{
    console.error("ERROR", err);
})

fetch("https://api.tvmaze.com/search/shows/?q=love")
.then((res) => {
    console.log("SUCCESS");
    return res.json();
})
.then((data) => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[5].show.image.medium;
    document.body.append(img);

    const div = document.getElementsByTagName('div')[0];
    console.log(div);
    img.classList.add('film-img');
    div.append(img);

    const film_name = document.createElement('h2');
    film_name.textContent = data[5].show.name;

    const div2 = document.querySelector('.row2_2');
    div2.append(film_name);

    const genre = document.createElement('p');
    genre.textContent = data[5].show.genres;
    div2.append(genre);

    const language = document.createElement('p');
    language.textContent = data[5].show.language;
    div2.append(language);
})
.catch((err)=>{
    console.error("ERROR", err);
})

fetch("https://api.tvmaze.com/search/shows/?q=love")
.then((res) => {
    console.log("SUCCESS");
    return res.json();
})
.then((data) => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[2].show.image.medium;
    document.body.append(img);

    const div = document.getElementsByTagName('div')[0];
    console.log(div);
    img.classList.add('film-img');
    div.append(img);

    const film_name = document.createElement('h2');
    film_name.textContent = data[2].show.name;

    const div2 = document.querySelector('.row2_3');
    div2.append(film_name);

    const genre = document.createElement('p');
    genre.textContent = data[2].show.genres;
    div2.append(genre);

    const language = document.createElement('p');
    language.textContent = data[2].show.language;
    div2.append(language);
})
.catch((err)=>{
    console.error("ERROR", err);
})

fetch("https://api.tvmaze.com/search/shows/?q=love")
.then((res) => {
    console.log("SUCCESS");
    return res.json();
})
.then((data) => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data[3].show.image.medium;
    document.body.append(img);

    const div = document.getElementsByTagName('div')[0];
    console.log(div);
    img.classList.add('film-img');
    div.append(img);

    const film_name = document.createElement('h2');
    film_name.textContent = data[3].show.name;

    const div2 = document.querySelector('.row2_4');
    div2.append(film_name);

    const genre = document.createElement('p');
    genre.textContent = data[3].show.genres;
    div2.append(genre);

    const language = document.createElement('p');
    language.textContent = data[0].show.language;
    div2.append(language);
})
.catch((err)=>{
    console.error("ERROR", err);
})
