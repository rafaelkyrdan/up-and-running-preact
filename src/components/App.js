import { h, preact, Component } from 'preact';
import User from './User';
import linkState from 'linkstate';
//import { Router } from 'preact-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Error from './Error';

const users = [
	{image: 'https://avatars2.githubusercontent.com/u/1071460?v=4&s=460', name: 'Rafael Kyrdan'},
	{image: 'https://avatars2.githubusercontent.com/u/15754928?v=4&s=460', name: 'Jaroslav Shkarupilo'}
]

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.setText = this.setText.bind(this);
		this.submit = this.setText.bind(this);
	}

	componentDidMount() {
		
	}

	setText(e) {
		this.setState({
			text: e.target.value
		})
	}

	submit() {
		console.log(this.state.text);
		return false;	
	}

	render(props, {loading, users, text}) {
		return (
			<div class="app">
				<h1>Up and running Preact!</h1>

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/profile/:user" component={Profile} />
						<Route component={Error} />
					</Switch>
				</Router>
				
			</div>			
		);
	}	
}

export default App;
