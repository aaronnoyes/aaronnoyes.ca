import './Card.css'

function Card(props) {
    const inline_style = {backgroundImage: `url(${props.image})`, opacity: "90%"}

    if(props.dim === true) {
        inline_style.opacity = "100%"
    }

    return (
        <div className="card" style={inline_style}>
            <p className="card__title">{props.title}</p>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;