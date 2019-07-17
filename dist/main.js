const movieManager = new MovieManager
const renderer = new Renderer

const loadPage = async function () {
    await movieManager.getTrending()
    const r = movieManager.trendingMovies
    await renderer.renderData(r.slice(0,3))
}

loadPage()

$('.search').on('click', async function () {

    let m = movieManager.movieData
    m.splice(0, 1)
    const movie = $('.movieName').val()
    await movieManager.getMovie(movie)
    await renderer.renderData(m)
    console.log(m)

})

 $('.login').on('click', function(){
    const login = $('.user').val()
    const pass = $('.password').val()
    movieManager.saveUser(login)
})

$('body').on('click', '.like', function () {
    let movieName = $(this).siblings('.name').text()
    let movieImg = $(this).siblings('.image').prop('src')
    let login = $('.user').val()
    let like = true
    const id = movieManager.movieData.id
   
    movieManager.saveMovie({name: movieName, id: trendingId || id,img: movieImg, like: like} ,login)
})

$('body').on('click', '.dislike', function () {
    let movieName = $(this).siblings('.name').text()
    let movieImg = $(this).siblings('.image').prop('src')
    let login = $('.user').val()
    let like = false
   
    movieManager.saveMovie({name: movieName, img: movieImg, like: like} ,login)
})