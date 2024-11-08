imageUrl = 'https://image.tmdb.org/t/p/original'

apiBaseUrl='https://api.themoviedb.org/3'

trending ='https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY_HERE}&language=en-US'

action ='https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}&with_genres=28'

originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213'

ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',

HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',

ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',

RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',

Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',

video:'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=YOUR_API_KEY'


//// API_KEY= GET THE API KEY FROM TMDB ////
->set your api key generated from tmdb to the constants.js file