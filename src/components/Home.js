import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
	route(`/profile/${encodeURIComponent(query)}`);
}

export function Home(props) {
	return (
			<section>
				<p>Enter a Github Usernanme</p>
				<input type="search" 
						placeholder="eg: rafaelkyrdan" 
						onSearch={e => search(e.target.value) } />
			</section>
		);
}

export default Home;
