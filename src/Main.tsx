import { Sidebar, Topbar, Footer } from './components/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';

function Main() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Topbar />
          <main className="content">
            <div className="container-fluid p-0">
              <Switch>
                <Route exact path="/profile" component={Home}/>
                <Route exact path="/dashboard" component={Dashboard}/>
              </Switch>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Main;