class MovieManager {
    constructor() {
        this.movieData = []
    }

    async getDataFromDB() {
        let mv = this.movieData
        let response = await $.get('http://localhost:3000/')
        if (response) {
            for (let i of response) {
                mv.push(i)
            }
        }

        return
    }

    async getTranding(tranding) {
        let data = await $.get(`http://localhost:3000/movies/${tranding}`)
        data = JSON.parsh(data)
        let MovieObject = {
            tranding

        }
        this.movieData.push(MovieObject)

    }

    saveMovie(movieName) {
        const movies = this.movieData.find(mv => mv.name === movieName)
        $.post("/movie/", movies)
    }

    





}