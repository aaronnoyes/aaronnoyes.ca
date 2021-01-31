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
import img_aws from './logos/aws.png'
import img_gcp from './logos/gcp.png'
import img_cpp from './logos/cpp.png'
import img_docker from './logos/docker.png'
import img_mongo from './logos/mongo.png'
import img_sql from './logos/sql.png'

import img_nn from './nn.png'
import img_iris from './iris.png'

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
      <Quad a1={img_aws} a2={img_gcp} b1={img_docker} b2={img_cpp}/>
      <Quad a1={img_mongo} a2={img_sql}/>
      <Card>
        <h1>Projects</h1>
      </Card>
      <Card>
        <h1>nn</h1>
        <img src={img_nn}></img>
        <p>
          nn is a simplistic neural network class built in python using NumPy. The purpose of this project was to analyze the 
          selection of hyper-parameters in network training and compare their performance on a training dataset.
          A paper is attached to the project with explanations and analysis. 
          One of the other focuses was to explain some of the basic math behind training a fully-connected neural network.
        </p>
        <p>
          The <a href="https://github.com/aaronnoyes/neural-network/blob/master/nn.pdf" class="external-link" target="_blank">paper</a> and 
          <a href="https://github.com/aaronnoyes/neural-network" class="external-link" target="_blank"> code</a> can be found on my github.
        </p>
      </Card>
      <Card>
        <h1>seedVPN</h1>
        <p>
          This project implements a simple VPN using the Linux tun/tap driver created as a final project for a security course. 
          A UDP tunnel is used to relay IP packets through a virtual TUN device. Each message is encrypted using AES-256 and secured 
          using HMACs. A shared key is established on client connection via a TLS control channel implemented using OpenSSL.
        </p>
        <p class="project-description">
          A handful of dynamic reconfiguration commands exist through the TLS channel which allow for the key and other parameters to be changed.
        </p>
        <p class="project-description">The <a href="https://github.com/aaronnoyes/seedVPN/blob/master/paper.pdf" class="external-link" target="_blank">paper and code can be found here.</a></p>
      </Card>
      <Card>
        <h1>Iris</h1>
        <img src={img_iris}></img>
        <p>
          A group project for school aimed to improve the user experience of registering for courses. My primary contribution was the search 
          engine and course registration system. Courses are listed clearly with a responsive search. An emphasis was placed on user interaction and page readability.
        </p>
        <p>
          The site can be found at <a href="https://aaronnoyes.github.io/aurora2/home.html?" class="external-link" target="_blank">aaronnoyes.github.io/aurora2</a>. 
          My contribution can be found by selecting "Course Registration" from the menu under the banner.
        </p>
      </Card>
    </div>
  );
}

export default App;
