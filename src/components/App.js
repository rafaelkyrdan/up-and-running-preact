import { h, preact } from 'preact';
import User from './User';

const users = [
	{image: 'https://avatars2.githubusercontent.com/u/1071460?v=4&s=460', name: 'Rafael Kyrdan'},
	{image: 'https://avatars2.githubusercontent.com/u/15754928?v=4&s=460', name: 'Jaroslav Shkarupilo'}
]

export function App() {
	return (
		<div class="app">
			<h1>Hello world!</h1>
			{users.map(user => <User {...user} key={user.name} />)}
		</div>
	);
}

export default App;
