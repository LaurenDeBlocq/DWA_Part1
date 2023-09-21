import { html } from "./view.js";
import { authors } from "./data.js";

export const detailedPreview = ( {image, title, author, description, publish,}) => {

    const authorName = authors[author]
    const yearPublished = publish.getFullYear()
    
    const createPreviewHtml = () => {
        
        html.list.blur.setAttribute('src', `${image}`)
        html.list.image.setAttribute('src', `${image}`)
        html.list.title.innerText = `${title}`
        html.list.subtitle.innerText = `${authorName} (${yearPublished})`
        html.list.description.innerText = `${description}`
    }
    

    return {
        createPreviewHtml,
    }
}