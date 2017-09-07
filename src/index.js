import { h, render } from 'preact';
import App from './components/App';

const config = {
	urls: {
		user: "https://api.github.com/users/rafaelkyrdan"
	}
}
render(<App config={config} />, document.querySelector('main'));
console.log('index.js');
