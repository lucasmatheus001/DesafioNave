const movies = [
	{ id: 1, name: 'Joker' },
	{ id: 2, name: 'Parasite' },
	{ id: 3, name: 'Avengers' },
	{ id: 4, name: 'Her' }
]
const actors = [
	{ id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
	{ id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
	{ id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
	{ id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
]

//recebe como parametro 2 arrays no qual retorna uma array de movies e seus respectivos atores

function exercise10(movies, actors){
    newMovies  = []

    movies.forEach( movie => {
        let m = movie
        m.actors = []
        actors.forEach( actor => {
            if(actor.movie_ids.includes(movie.id)){
                m.actors.push(actor.name)
            }
        })
        newMovies.push(m)
    })
    console.log(newMovies)
    return newMovies

}