import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './Components/NavBar';
// import CityCard from './Components/CityCard';
// import HotelCard from './Components/HotelCard';
// import HotelMap from './Components/HotelMap';
// import HotelMaker from './Components/HotelMaker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link Link to="/" class="navbar-brand">Trippy</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link Link to="/" class="nav-link active" aria-current="page">Home</Link>
                <Link to="/hotel" class="nav-link">Hotel</Link>
                <Link to="/hotel-page" class="nav-link">HotelPage</Link>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          {/* <Route exact path="/" component={Home}/>
						<Route path="/:city" component={Hotels}/>
            <Route path="/:id" component={HotelPage}/>
						<Route path="*" component={Error404}/> */}
        </Switch>

      </BrowserRouter>



    );
  }
}

export default App;