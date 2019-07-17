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
        const res2 = response.results
        for (let a of res2) {
            mv.push({ name: a.title, img: `https://image.tmdb.org/t/p/w300${a.poster_path}` })

        }

        console.log(mv.slice(0, 3))

    }











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

    saveUser(user) {
        $.post(`/user/${user}`, { name: user, movies: []}, function (data, status) {

        })
    }


    saveMovie( movieinfo,user) {
         //  this.likeData.push(movies)
           $.ajax({
               method: "PUT",
               url: `http://localhost:3000/user/${user}`,
               data:   movieinfo,
               success: function(data){
                   
                       console.log(data)
               }
           })
    }



}


