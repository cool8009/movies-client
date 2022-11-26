import axios from "axios";
const baseUrl = "http://localhost:5089/api";

const serverPostRoute = `${baseUrl}/Movies`;

const MoviesService = {
    async getPopularMovies() {
        let myMovies = [];
        const tempResult = (await axios.get(`${serverPostRoute}`)).data;
        tempResult.map((movie) => myMovies.push(movie))
        return myMovies;
    },

    
    async searchMovies(query) {
        let myMovies = [];
        const tempResult = (await axios.get(`${serverPostRoute}/${query}`)).data;
        tempResult.map((movie) => myMovies.push(movie))
        return myMovies;
    }
    

}



export default MoviesService;