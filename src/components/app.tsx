import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import Party from '../routes/party';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">

            <Router>
                <Route path="/" component={Home} />
                <Route path="/party/:id" component={Party}  />
                <Route path="/profile/:user" component={Profile} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
