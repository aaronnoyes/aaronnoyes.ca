import './Quad.css'

function Quad(props) {
    return (
        <div className="quad">
            {props.a1 &&
                <div className="quad__corner">
                    <img src={props.a1} className="a1 quad__corner__img"></img>
                </div>
            }
            {props.a2 &&
                <div className="quad__corner">
                    <img src={props.a2} className="a2 quad__corner__img"></img>
                </div>
            }
            {props.b1 &&
                <div className="quad__corner">
                    <img src={props.b1} className="b1 quad__corner__img"></img>
                </div>
            }
            {props.b2 &&
                <div className="quad__corner">
                    <img src={props.b2} className="b2 quad__corner__img"></img>
                </div>
            }
        </div>
    )
}

export default Quad;