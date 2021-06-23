import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.js";
import NewMeetupPage from "./pages/NewMeetup.js";
import FavouritesPage from "./pages/Favorites.js";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
