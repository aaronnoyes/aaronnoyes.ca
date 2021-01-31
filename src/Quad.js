import './Quad.css'

function Quad(props) {
    return (
        <div className="quad">
            <div className="quad__corner">
                {props.a1 && <img src={props.a1} className="a1 quad__corner__img"></img>}
            </div>
            <div className="quad__corner">
                {props.a2 && <img src={props.a2} className="a2 quad__corner__img"></img>}
            </div>
            <div className="quad__corner">
                {props.b1 && <img src={props.b1} className="b1 quad__corner__img"></img>}
            </div>
            <div className="quad__corner">
                {props.b2 && <img src={props.b2} className="b2 quad__corner__img"></img>}
            </div>
        </div>
    )
}

export default Quad;