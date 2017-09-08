import { h } from 'preact';
//import { route } from 'preact-router';
import { withRouter } from 'react-router-dom';

function search(router, query) {
	router.history.push(`/profile/${encodeURIComponent(query)}`);
}

const Home = withRouter((router) => {
	return (
			<section>
				<p>Enter a Github Usernanme</p>
				<input type="search" 
						placeholder="eg: rafaelkyrdan" 
						onSearch={e => search(router, e.target.value) } />
			</section>
		);
});

export default Home;
