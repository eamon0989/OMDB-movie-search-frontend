Steps taken

I tested the API key using curl
curl -v 'http://www.omdbapi.com/?apikey=c491a5c4&t="The+hunger+games"'

Create a search bar that takes the input string and appends it to http://www.omdbapi.com/?apikey=c491a5c4&t=
Send request to server
Parse request
If request contains movies, show the results

If there are no movies, show a movie not found message

To show the build number publicly, I added it to index.html
It gets the value from .env
Normally .env would not be made public, but in this case it doesn’t matter

I chose to hide ‘movies’ that didn’t have posters as they are generally not real movies. If I had more time I would probably have added a placeholder style image instead.

If I had more time I would add a feature where a user could click on a movie and display more information and I would improve the styling and layout

I would also add a more robust fallback component solution