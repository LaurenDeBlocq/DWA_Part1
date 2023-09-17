import { authors } from "./data.js";

const template = document.createElement("template")
template.className = "preview"
template.dataset.id = ''
template.innerHTML = 
/* html */  `
    <style>
      * {
      box-sizing: border-box;
      }

      .preview {
        border-width: 0;
        width: 100%;
        font-family: Roboto, sans-serif;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-align: left;
        border-radius: 8px;
        border: 1px solid rgba(var(--color-dark), 0.15);
        background: rgba(var(--color-light), 1);
      }
      
      @media (min-width: 60rem) {
        .preview {
          padding: 1rem;
        }
      }
      
      .preview_hidden {
        display: none;
      }
      
      .preview:hover {
        background: rgba(var(--color-blue), 0.05);
      }
      
      .preview__image {
        width: 48px;
        height: 70px;
        object-fit: cover;
        background: grey;
        border-radius: 2px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      }
      
      .preview__info {
        padding: 1rem;
      }
      
      .preview__title {
        margin: 0 0 0.5rem;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        color: rgba(var(--color-dark), 0.8)
      }
      
      .preview__author {
        color: rgba(var(--color-dark), 0.4);
      }
    </style>

    <img class="preview__image" data-preview-image src=""/>
        
    <div class="preview__info">
        <div class="preview__title" data-preview-title></div>
        
        <div class="preview__author" data-preview-author></div>
    </div>
`


export class Preview extends HTMLElement {
    inner = this.attachShadow({mode: "open"});
    
    constructor(previewDetails){
        super()
        const { author, id, title, image } = previewDetails
        this.author = author
        this.id = id
        this.title = title
        this.image = image

        const {content} = template;
        this.inner.appendChild(content.cloneNode(true))
    }
    
    connectedCallback() {
        this.elements = {
            authorName: this.inner.querySelector("data-preview-author"),
            imageSource: this.inner.querySelector("data-preview-image"),
            bookTitle: this.inner.querySelector("data-preview-title"),
        }

        console.log(this.elements.authorName);
        this.elements.authorName.innerHTML = `${authors[this.author]}`;
        this.elements.imageSource.setAttribute('src', this.image);
        this.elements.bookTitle.textContent = `${this.title}`;
        this.inner.dataset.id = this.id

        return this.inner
    }

    // getHTML = () => {
        
    // // console.log("I am created");
        
    // }
}

customElements.define("book-preview", Preview)

// const createPreviewHtml = (preview) => {
//     const { author, id, title, image } = preview

//     const element = document.createElement('div')
//     element.className = 'preview'
//     element.dataset.id = id

//     element.innerHTML = /* html */ `
        
//     <img class="preview__image" data-preview-image src="${image}"/>
        
//     <div class="preview__info">
//         <div class="preview__title" data-preview-title>${title}</div>
        
//         <div class="preview__author" data-preview-author>${authors[author]}</div>
//     </div>
//     `

//     return element
// }