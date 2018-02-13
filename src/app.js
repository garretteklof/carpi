import './lib/react-dates-styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routes/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import Loading from './components/Loading';
import './styles/styles.scss';

ReactDOM.render(<Loading />, document.getElementById('app'));

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		renderApp();
		history.push('/dashboard');
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});