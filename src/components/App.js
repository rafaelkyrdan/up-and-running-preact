import { h, preact, Component } from 'preact';
import User from './User';
import linkState from 'linkstate';

const users = [
	{image: 'https://avatars2.githubusercontent.com/u/1071460?v=4&s=460', name: 'Rafael Kyrdan'},
	{image: 'https://avatars2.githubusercontent.com/u/15754928?v=4&s=460', name: 'Jaroslav Shkarupilo'}
]

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: true,
			text: ''
		}
		this.setText = this.setText.bind(this);
		this.submit = this.setText.bind(this);
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
				<h1>Hello world!</h1>
				{loading
					? <p>Please wait ...</p>
					: users.map(user => <User name={user.name} image={user.avatar_url} key={user.name} />)
				}
				<div>
					<form onSubmit={this.submit} action="javascript:">
						<input type="text" value={text} onInput={linkState(this, 'text')} />
					</form>					
					<pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
				</div>								
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
