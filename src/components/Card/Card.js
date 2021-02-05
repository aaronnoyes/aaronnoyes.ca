import './Card.css';

function Card(props) {
  /* const inline_style = { opacity: '90%' };

  if (props.dim === true) {
    inline_style.opacity = '100%';
  }

  if (props.image) {
    inline_style.backgroundImage = `url(${props.image})`;
  } */

  /* Regarding seaparation of concerns, this is how I'd dynamically change the styles. Change the classnames here dynamically and keep the styles together in the CSS file. There is also a useful package I've used before for conditionally applying classnames: https://www.npmjs.com/package/classnames */
  const className = `card ${props.dim ? 'dim' : null} ${
    props.image ? 'photo' : null
  }`;

  return <div className={className}>{props.children}</div>;
}

export default Card;
