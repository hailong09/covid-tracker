import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Widget from './pages/Widget';
import Charts from './pages/Charts';
function App() {
  return (
    <Router>

        <div className="App">
            <Header/>
            <Switch>
              <Route  path="/charts" component={Charts}/>
              <Route  path="/widget" component={Widget}/>
              <Route  path="/" component={Dashboard}/>
            </Switch>

        </div>

    </Router>
   
  );
}

export default App;
