const baseURL= 'https://api.themoviedb.org'
const key= 'a4ede8ff276cd5e76cd27b41cf8f0b05'

const requests = {
    requestPopular: `/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests;