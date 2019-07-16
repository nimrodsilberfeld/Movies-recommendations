class Renderer {
    constructor() {

    }
    renderData(movies) {
        $('#container').empty()
        const source = $("#template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({data: movies})
        
        $('#container').append(newHTML)
    }
}