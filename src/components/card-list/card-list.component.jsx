import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
    const { items } = props;
    return (
        <div className='card-list'>
            {items.map((item) => {
                return (
                    <Card key={item.id} monster={item} />
                )
            })}
        </div>
    )
}

export default CardList