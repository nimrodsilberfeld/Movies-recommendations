class Renderer {
    constructor() {

    }
    renderData() {
        $('#container').empty()
        const source = $("#template").html()
        $('#container').append(`
        <p>Enter a movie name:</p>
        <input class="movieName" type="text" placeholder="Movie name">
        <button class="search">Search</button>
        `)
        $('#container').append(newHTML)
    }
}