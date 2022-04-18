import './card.styles.css';

const Card = ({monster}) => {
    const {id,name,email} = monster;
    console.log(id);
    return (
        <div className='card-container' key={id}>
            <img 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=150x150`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;