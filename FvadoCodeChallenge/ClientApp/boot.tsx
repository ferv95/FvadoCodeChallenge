import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PhoneListContainer } from './components/phoneListContainer/phoneListContainer';
import { Layout } from './components/Layout/Layout';

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Layout children={<PhoneListContainer/>}/>
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

if (module.hot) {
    renderApp();
}