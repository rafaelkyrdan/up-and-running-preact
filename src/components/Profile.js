import { h, Component} from 'preact';
import { route } from 'preact-router';
import User from './User';
import { connect } from 'preact-redux';
import { fetchUser } from '../actions';

function search(query) {
	route(`/profile/${encodeURIComponent(query)}`);
}

export class Profile extends Component {
	

	componentDidMount() {
		const username = this.props.match.params.user;		
		this.props.fetchUser(username);
	}

	render({loading, user}) {
		return (
			<div class="app">

				{loading
					? <p>Please wait ...</p>
					: <User name={user.name} image={user.avatar_url} key={user.name} />
				}
				
			</div>			
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: (username) => dispatch(fetchUser(username))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
