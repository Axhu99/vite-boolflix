const api = {
    baseUri: 'https://api.themoviedb.org/3',
    apiKey: '758b173e5acd29b4c0c725e2b31ed88e',
    language: 'it-It',
}

const mapProductions = production => {
    return {
        id: production.id,
        title: production.title || production.name,
        originalTitle: production.original_title || production.original_name,
        voteAverage: production.vote_average,
        lang: production.original_language,
        posterPath: production.poster_path
    }
}

const pics = {
    baseUri: 'https://image.tmdb.org/t/p/w342',
    placeholder: 'https://www.altavod.com/assets/images/poster-placeholder.png'
}
export { api, mapProductions, pics }  