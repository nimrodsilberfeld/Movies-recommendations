const movieManager = new MovieManager
const rednerer = new Renderer

const loadPage = async function () {
    await movieManager.getDataFromDB()
    const r = movieManager.movieData
    await rednerer.renderData(r)
}


$('.search').on('click', async function(){
    const movie = $('.movieName').val()
    await movieManager.getTranding(movie)
    const m = movieManager.movieData
    console.log(m)

})
