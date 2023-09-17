import { html } from "./view.js";
import { authors } from "./data.js";

export const detailedPreview = ( {image, title, author, description, publish,}) => {
   
    const previewDetails = {
        image: image,
        title: title,
        authorName: authors[author],
        description: description,
        yearPublished: publish.getFullYear()
    }

    const createPreviewHtml = () => {
        const { authorName, title, image, yearPublished, description } = previewDetails
        
        html.list.blur.setAttribute('src', `${image}`)
        html.list.image.setAttribute('src', `${image}`)
        html.list.title.innerText = `${title}`
        html.list.subtitle.innerText = `${authorName} (${yearPublished})`
        html.list.description.innerText = `${description}`
        }
    

    return {previewDetails,
    createPreviewHtml,
}
}