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


const handleItemClick = (event) => {
    event.preventDefault()
    let idValue = null

    if (['preview', 'preview__image', 'preview__info', 'preview__author', 'preview__title'].includes(event.srcElement.classList[0])){
        
        const path = event.path || event.composedPath()
        for (const element of path) {
            const { id } = element.dataset
            if (id) {
                idValue = id
                break;
            }
        }
    
        html.list.overlay.toggleAttribute('open')
        html.list.blur.setAttribute('src', `${state.loaded[idValue].image}`)
        html.list.image.setAttribute('src', `${state.loaded[idValue].image}`)
        html.list.title.innerText = `${state.loaded[idValue].title}`
        html.list.subtitle.innerText = `${authors[state.loaded[idValue].author]} (${state.loaded[idValue].publish.getFullYear()})`
        html.list.description.innerText = `${state.loaded[idValue].description}`
    } else {
        html.list.overlay.removeAttribute('open')
    }
}