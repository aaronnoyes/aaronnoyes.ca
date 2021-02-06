import './Card.css'

function Card(props) {
    const inline_style = {}

    if(props.image) {
        inline_style.backgroundImage = `url(${props.image})`
    }

    return (
        <div className="card" style={inline_style}>
            {props.children}
        </div>
    )
}

export default Card;