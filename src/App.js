import './App.css';
import Card from './Card'
import Header from './Header'
import Quad from './Quad'

import me from './me.jpeg'

import img_html from './logos/html5.png'
import img_css from './logos/css.png'
import img_js from './logos/js.png'
import img_nodejs from './logos/nodejs.png'
import img_react from './logos/react.png'
import img_nginx from './logos/nginx.png'
import img_python from './logos/python.png'

const skills_images = {img_html, img_css, img_js, img_nodejs, img_react, img_nginx, img_python}

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Card dim={true}>
        <h1>About Me</h1>
      </Card>
      <Card image={me}/>
      <Card>
        <p className="bio">
        I am a software developer with a BSc majoring in Computer Science specializing in Networks and Security at the University of Manitoba. Prior to the University of Manitoba attended the University of Alberta where I played football and studied computer science. My primary interests lie in software and network security, as well as web and mobile development. I have been programming as a hobby since 2010 and for my studies since 2015. Most of my school work was written in C/C++, Java, and Python. For personal interest I have also learned about web and iOS development by taking courses on Udemy, and doing self guided learnng in my free time.
        </p>
      </Card>
      <Card dim={true}>
        <h1>Skills</h1>
      </Card>
      <Quad a1={img_html} a2={img_css} b1={img_js} b2={img_react}/>
      <Quad a1={img_nodejs} a2={img_nginx} b1={img_js} b2={img_python}/>
    </div>
  );
}

export default App;
