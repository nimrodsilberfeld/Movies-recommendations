class MovieManager {
    constructor() {
        this.trendingMovies = []
        this.movieData = []
    }

    async getTrending() {

        let mv = this.trendingMovies



        let response = await $.get('http://localhost:3000/movies', function (req, res) {
            return res
        })
        console.log(response)
        if (response) {

            for (let r in response) {
                for (let a of r) {
                    mv.push(a)
                    console.log(mv)

                }
            }
        }


    }


    // const UserSchema = new Schema({
    //     name: String,
    //     password: Date,
    //     apiKey: Number,
    //     movies: [],
    // })

    async getMovie(movie) {
        let Data = this.movieData
        let data = await $.get(`http://localhost:3000/movies/${movie}`)


        let MovieObject = {
            name: data.Title,
            img: data.Poster

        }
        Data.push(MovieObject)
        console.log(Data)


    }

    saveMovie(movieName) {
        const movies = this.movieData.find(mv => mv.name === movieName)
        $.post("/movie/", movies)
    }







}