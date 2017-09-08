import { h, Component} from 'preact';
import { route } from 'preact-router';
import User from './User';

function search(query) {
	route(`/profile/${encodeURIComponent(query)}`);
}

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: true,
		}		
	}

	componentDidMount() {
		const username = this.props.match.params.user;
		fetch(`https://api.github.com/users/${username}`)
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

	render({}, {loading, users}) {
		return (
			<div class="app">

				{loading
					? <p>Please wait ...</p>
					: users.map(user => <User name={user.name} image={user.avatar_url} key={user.name} />)
				}
				
			</div>			
		);
	}
}

export default Profile;
