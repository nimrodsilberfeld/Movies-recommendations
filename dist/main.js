const movieManager = new MovieManager
const rednerer = new Renderer

const loadPage = async function () {
    await movieManager.getTrending()
    const r = movieManager.movieData
    console.log(r)
}

loadPage()

$('.search').on('click', async function(){
    const movie = $('.movieName').val()
    await movieManager.getMovie(movie)
    const m = movieManager.movieData
    console.log(m)

})
