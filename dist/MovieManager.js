class MovieManager {
    constructor() {
        this.movieData = []
    }

    async getDataFromDB() {
        let mv = this.movieData
        let response = await $.get('http://localhost:3000/movies')
        if (response) {
            for (let i of response) {
                mv.push(i)
            }
        }

        return
    }


    // const UserSchema = new Schema({
    //     name: String,
    //     password: Date,
    //     apiKey: Number,
    //     movies: [],
    // })

    async getTranding(tranding) {
        let data = await $.get(`http://localhost:3000/user/${tranding}`)
        data = JSON.parse(data)

        let MovieObject = {
            name:data.title,
            img:data.poster_path

        }
        this.movieData.push(MovieObject)

    }

    saveMovie(movieName) {
        const movies = this.movieData.find(mv => mv.name === movieName)
        $.post("/movie/", movies)
    }







}