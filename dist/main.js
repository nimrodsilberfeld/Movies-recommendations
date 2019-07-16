const movieManager = new movieManager
const rednerer = new Renderer

const loadPage = async function () {
      await movieManager.getDataFromDB()
      const r = movieManager.movieData
      await rednerer.renderData(r)
}

$('.login').on('click', function(){
    const user = $('.user').val()
    const pass = $('.password').val()
    $.get(`user/${user}`, function(data, status){
        console.log(data)
        console.log(status)
    })
})