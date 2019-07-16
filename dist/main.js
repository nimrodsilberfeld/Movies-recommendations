const movieManager = new MovieManager
const renderer = new Renderer

const loadPage = async function () {
    await movieManager.getTrending()
    const r = movieManager.trendingMovies
    console.log(r)
}

loadPage()

$('.search').on('click', async function(){ 
    
    const movie = $('.movieName').val()
    await movieManager.getMovie(movie)
    await renderer.renderData(m)
    console.log(m)

})
