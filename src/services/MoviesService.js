import axios from "axios";

//Http request service, axios
const baseUrl = "http://localhost:5089/api";
const MoviesRoute = `${baseUrl}/Movies`;

const MoviesService = {
    async getPopularMovies() {
        let myMovies = [];
        const tempResult = (await axios.get(`${MoviesRoute}`)).data;
        tempResult.map((movie) => myMovies.push(movie))
        return myMovies;
    },

    
    async searchMovies(query) {
        let myMovies = [];
        const tempResult = (await axios.get(`${MoviesRoute}/${query}`)).data;
        tempResult.map((movie) => myMovies.push(movie))
        return myMovies;
    }
    

}



export default MoviesService;