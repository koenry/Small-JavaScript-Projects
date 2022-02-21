
<template>
    <main>
        <div class="flexContainer">
            <input @keyup.enter="search" id="msgg" type="text" name="fname" /> 
            <button v-on:click="search" class="button button2">Search</button>
        </div>
<!-- main container which populates with the movie info from API -->
        <div class="container1">
            <div>           
<!--  v-if so it shows up after we fetch the api so it doesnt show as undefined -->
                <p id="topText" class="topText" v-if="superhero">
                    {{ superhero.Title }} {{ superhero.Released }}
                </p>
                <a
                    v-if="superhero"
                    :href="`https://www.imdb.com/title/${superhero.imdbID}`"
                    ><img :src="superhero.Poster" :alt="superhero.Title"
                /></a>
                <p v-if="superhero">
                    <img
                        src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png"
                        alt="IMDB LOGO"
                        width="25"
                        height="25"
                    />
                    {{ superhero.Ratings[0].Value }}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
                        alt="IMDB LOGO"
                        width="25"
                        height="25"
                    />
                    {{ superhero.Ratings[1].Value }}
                    <img
                        src="data:image/png;base64,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"
                        alt="IMDB LOGO"
                        width="25"
                        height="25"
                    />
                    {{ superhero.Ratings[2].Value }}
                </p>
                <button v-on:click="main" class="button button2">
                    Generate a Random SuperHero Movie! 
                </button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "new",
    data() {
        return {
            superhero: null,
        };
    },
    methods: {
        async search() { 
            const searchMovie = document.getElementById("msgg").value;
            const apiKey = process.env.VUE_APP_ROOT_URL;
            const fetchHero =
                "https://www.omdbapi.com/?t=" +
                searchMovie +
                "&apikey=" +
                apiKey;

            fetch(fetchHero)
                .then(res => res.json())
                .then(data => this.superhero = data)
                .catch (err => alert(err))
                if (this.data === undefined) {
                    alert('Cant Find The Movie!');
					location.reload();
                }
        }, // a list of superhero movies for the app to generate
        main() {
            const apiKey = process.env.VUE_APP_ROOT_URL;
            const heroMovies = [
                "Iron Man Three",
                "The Incredible Hulk",
                "Iron Man 2",
                "Thor",
                "Captain America: The First Avenger",
                "The Avengers",
                "Thor:The Dark World",
                "Captain America: The Winter Soldier",
                "Guardians of the Galaxy",
                "Avengers: Age of Ultron",
                "Ant-Man",
                "Captain America: Civil War",
                "Doctor Strange",
                "Guardians of the Galaxy Vol. 2",
                "Spider-Man: Homecoming",
                "Thor: Ragnarok",
                "Black Panther",
                "Avengers: Infinity War",
                "Ant-Man and the Wasp",
                "Captain Marvel",
                "Avengers: Endgame",
                "Spider-Man: Far From Home",
                "Black Widow",
                "Venom",
                "The New Mutants",
                "Dark Phoenix",
                "Deadpool 2",
                "Deadpool",
                "Logan",
                "X-Men: Apocalypse",
                "Fantastic Four",
                "The Amazing Spider-Man 2",
                "The Amazing Spider-Man",
                "The Wolverine",
                "Ghost Rider: Spirit of Vengeance",
                "X-Men Origins: Wolverine",
                "Ghost Rider",
                "Fantastic Four",
                "Elektra",
                "Blade: Trinity",
                "Spider-Man 3",
                "Spider-Man 2",
                "Spider-Man",
                "X2",
                "Blade II",
                "X-Men",
                "Blade",
                "Howard the Duck",
                "Kick-Ass",
                "Kick-Ass 2",
            ];
            const random =
                heroMovies[Math.floor(Math.random() * heroMovies.length)];
            const fetchHero =
                "https://www.omdbapi.com/?t=" + random + "&apikey=" + apiKey;
            fetch(fetchHero)
                .then(res => res.json())
                .then(data => this.superhero = data)
                .catch (err => alert(err))
                
        },
    },
    beforeMount() {
        this.main();
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap");
body {
    font-family: "Tenali Ramakrishna", sans-serif;
    background: #8fb8de;
    background: #9a94bc;
}
.flexContainer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}
.button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
input[type="text"] {
    width: 50%;
    justify-content: center;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
.topText {
    font-size: 28px;
}
.container1 {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    text-align: center;
}
a:hover {
    background-color: yellow;
    opacity: 0.4;
}
.containerRatings {
    display: flex;
    font-size: 15px;
    justify-content: center;
}
</style>
