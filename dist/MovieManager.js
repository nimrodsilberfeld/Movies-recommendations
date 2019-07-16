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
        const res2=response.results
        for(let a of res2){
            mv.push({name: a.title, img: a.poster_path})
            
        }
    console.log(mv.slice(0,3))
        // console.log(res2[3].title)
        // for(let i in response){
        //     console.log(i)
        // }
        // // if (response) {
        //     for (let i of response) {
        //         mv.push(i)
        //         console.log(mv)
        //     }
        // }
        // if (response) {

        // for (let r in response) {



        //         mv.push(r)
        //         console.log(mv)


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
    // console.log(Data)

 
}

saveMovie(movieName) {
    const movies = this.movieData.find(mv => mv.name === movieName)
    $.post("/movie/", movies)
}




}


