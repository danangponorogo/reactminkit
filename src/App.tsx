import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar, Topbar, Footer } from './components/index';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route path="/dashboard">
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Topbar />
              <main className="content">
                <div className="container-fluid p-0">
                  <Dashboard />
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </Route>
        <Route path="/profile">
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Topbar />
              <main className="content">
                <div className="container-fluid p-0">
                  <Home />
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
