"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStarships = exports.createStarship = exports.getFilms = exports.createFilm = exports.hello = void 0;
var hello_1 = require("./handlers/hello");
Object.defineProperty(exports, "hello", { enumerable: true, get: function () { return hello_1.hello; } });
var films_1 = require("./handlers/starwars/films");
Object.defineProperty(exports, "createFilm", { enumerable: true, get: function () { return films_1.createFilm; } });
Object.defineProperty(exports, "getFilms", { enumerable: true, get: function () { return films_1.getFilms; } });
var starships_1 = require("./handlers/starwars/starships");
Object.defineProperty(exports, "createStarship", { enumerable: true, get: function () { return starships_1.createStarship; } });
Object.defineProperty(exports, "getStarships", { enumerable: true, get: function () { return starships_1.getStarships; } });
//# sourceMappingURL=index.js.map