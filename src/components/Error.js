import { h } from 'preact';
import { Link } from 'react-router-dom';


export function Error(props) {
	return (
			<section>
				<p>Error!!</p>
				<p>
					<Link to="/">Home</Link>
				</p>
			</section>
		);
}

export default Error;
