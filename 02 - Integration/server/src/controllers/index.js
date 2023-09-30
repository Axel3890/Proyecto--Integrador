const getCharById = require("./getCharById");
const login = require("./login");
const {postFav, deleteFav} = require("./handleFavorites");
const postUser = require("./postUser");

module.exports = {
    getCharById,
    login,
    postFav,
    deleteFav,
    postUser,
}