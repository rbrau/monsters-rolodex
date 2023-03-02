import './card.styles.css';

const Card = ({ monster }) => {
	const { name, email, id } = monster;

	return (
		<div className='card-container' key={id}>
			<img
				alt={`monsters ${name}`}
				src={`https://robohash.org/${id}?set=set2size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
