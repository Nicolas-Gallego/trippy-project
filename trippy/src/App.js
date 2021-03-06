import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../src/utils/api'
import "./App.css"
import Home from './views/Home';
import Hotels from './views/Hotels';
import HotelPage from './views/HotelPage';
import Error404 from './views/Error';
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
    console.log()
    return (
      <BrowserRouter>
        <div>
          
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hotels/:city" component={Hotels} />
          <Route path="/hotel/:id" component={HotelPage} />
          <Route path="*" component={Error404} /> 
        </Switch>

      </BrowserRouter>

  

    );
  }
}

export default App;