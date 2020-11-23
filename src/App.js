import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import AvatarSelection from './components/AvatarSelection/AvatarSelection';
import MessageCenter from './components/MessageCenter/MessageCenter';

function App() {
  return (
    <Router>      
      <div className="App">
        <Switch>
          <Route path='/message-center' exact component={MessageCenter} />
          <Route path="/avatar" exact component={AvatarSelection} />          
          <Route path="/" exact component={Auth} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
