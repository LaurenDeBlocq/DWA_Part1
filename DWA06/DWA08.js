const bookPreview = () => {
    const previewDetails = {
        image: state.loaded[idValue].image,
        title: state.loaded[idValue].title,
        author: state.loaded[idValue].author,
        description: state.loaded[idValue].description,
        yearPublished: state.loaded[idValue].publish.getFullYear()
    }

    return previewDetails
}

