import '../assets/styles.css';

import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Keywords from '../routes/keywords'
import Party from '../routes/party';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Router>
                <Route path="/" component={Home} />
                <Route path="/party/:id" component={Party}  />
                <Route path="/keywords" component={Keywords} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
