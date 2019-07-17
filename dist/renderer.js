class Renderer {
    constructor() {

    }
    // renders the trending movies
    renderTrending(movies) {
        $('#trendingContainer').empty()
        const source = $("#template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({data: movies})
        
        $('#trendingContainer').append(newHTML)
    }
    // renders suggestion
    renderSuggestion(movies) {
        console.log(movies)
        $('#suggestionContainer').empty()
        const source = $("#templateseg").html()
        const template = Handlebars.compile(source)
        const newHTML = template({data: movies})
        
        $('#suggestionContainer').append(newHTML)
    }
}