import './Quad.css';

function Quad({ a1, a2, b1, b2 }) {
  return (
    <div className="quad">
      {a1 && (
        <div className="quad__corner">
          <img src={a1} className="a1 quad__corner__img"></img>
        </div>
      )}
      {a2 && (
        <div className="quad__corner">
          <img src={a2} className="a2 quad__corner__img"></img>
        </div>
      )}
      {b1 && (
        <div className="quad__corner">
          <img src={b1} className="b1 quad__corner__img"></img>
        </div>
      )}
      {b2 && (
        <div className="quad__corner">
          <img src={b2} className="b2 quad__corner__img"></img>
        </div>
      )}
    </div>
  );
}

export default Quad;
