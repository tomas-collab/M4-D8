Netflix, Navigation
In this exercise you'll apply your new knowledge about react-router-dom. Remember to install the package from npm (npm i react-router-dom).

Netflix App - React Router
Create a Route for a ShowDetail component. It should be able to receive a ID parameter from the querystring.
Create the ShowDetail component that receives from the url the ID parameter and fetches all the informations about the movie (from omdb & comments too).
Make every Show (Movie or Series) clickable and create an onClick redirect to the ShowDetail route.
From the main component pass also a prop called 'title' to every other component wrapped inside a Route, and use it for displaying inside of it the title of that section (in an "h1").

EXTRA
Add a Link for TV Shows in the Navbar to navigate to a TV Shows component.
Pass a route parameter named "series" in the TV Shows component route and use it for querying APIs like: ?s={series}&type={series}.
Display results accordingly, and link every show in the result with its detail page.
If you haven't already, polish the browsing experience with loaders.