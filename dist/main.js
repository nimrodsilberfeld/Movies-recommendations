const movieManager = new MovieManager
const renderer = new Renderer

const loadPage = async function () {
    await movieManager.getTrending()
    const r = movieManager.movieData
    await rednerer.renderData(r)
}

loadPage()

$('.search').on('click', async function(){
    const movie = $('.movieName').val()
    const data = await movieManager.getMovie(movie)
    const d = movieManager.movieData
    renderer.renderData(d)
    
    

})
