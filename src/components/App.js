import { h, preact, Component } from 'preact';
import User from './User';

const users = [
	{image: 'https://avatars2.githubusercontent.com/u/1071460?v=4&s=460', name: 'Rafael Kyrdan'},
	{image: 'https://avatars2.githubusercontent.com/u/15754928?v=4&s=460', name: 'Jaroslav Shkarupilo'}
]

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: true
		}
	}

	componentDidMount() {
		fetch(this.props.config.urls.user)
			.then(resp => resp.json())
			.then(user => {
				console.log(user);
				this.setState({
					users: [user],
					loading: false	
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div class="app">
				<h1>Hello world!</h1>
				{this.state.loading
					? <p>Please wait ...</p>
					: this.state.users.map(user => <User name={user.name} image={user.avatar_url} key={user.name} />)
				}								
			</div>
		);
	}	
}

/*
export function App() {
	return (
		<div class="app">
			<h1>Hello world!</h1>
			{users.map(user => <User {...user} key={user.name} />)}
		</div>
	);
}
*/

export default App;
