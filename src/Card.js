import './Card.css'

function Card(props) {
    return (
        <div className="card" style={{backgroundImage: `url(${props.image})`}}>
            <p className="card__title">{props.title}</p>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;