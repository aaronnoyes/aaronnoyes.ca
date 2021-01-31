import './Card.css'

function Card(props) {
    const inline_style = {backgroundImage: `url(${props.image})`, opacity: "90%"}

    if(props.dim === true) {
        inline_style.opacity = "100%"
    }

    return (
        <div className="card" style={inline_style}>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;