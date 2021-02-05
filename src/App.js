import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Quad from './components/Quad/Quad';

import me from './assets/me.png';

import img_html from './assets/logos/html5.png';
import img_css from './assets/logos/css.png';
import img_js from './assets/logos/js.png';
import img_nodejs from './assets/logos/nodejs.png';
import img_react from './assets/logos/react.png';
import img_nginx from './assets/logos/nginx.png';
import img_python from './assets/logos/python.png';
import img_aws from './assets/logos/aws.png';
import img_gcp from './assets/logos/gcp.png';
import img_cpp from './assets/logos/cpp.png';
import img_docker from './assets/logos/docker.png';
import img_mongo from './assets/logos/mongo.png';
import img_sql from './assets/logos/sql.png';

/* const logos = [
  { name: 'html5', file: 'html5.png' },
  { name: 'css', file: 'css.png' },
  { name: 'js', file: 'js.png' },
  { name: 'nodejs', file: 'nodejs.png' },
  { name: 'react', file: 'react.png' },
  { name: 'nginx', file: 'nginx.png' },
  { name: 'python', file: 'python.png' },
  { name: 'aws', file: 'aws.png' },
  { name: 'gcp', file: 'gcp.png' },
  { name: 'cpp', file: 'cpp.png' },
  { name: 'docker', file: 'docker.png' },
  { name: 'mongo', file: 'mongo.png' },
  { name: 'sql', file: 'sql.png' },
]; 

I'd also add the rest of the images in here, but this is just for an example.
*/

import img_nn from './assets/nn.png';
import img_iris from './assets/iris.png';

function App() {
  return (
    <div className="app">
      <Header />
      {/* I'd suggest removing the Header component and just putting the contained <div> element directly in this file, unless you intend to have multiple pages with the same header. Check out https://github.com/Taouen/next-site/blob/master/components/Header.js. I import that header into a page layout component that is used for every page so that I don't have to rewrite the header every time.*/}

      <Card dim={true}>
        <h1>About Me</h1>
      </Card>
      <Card image={me} />
      <Card>
        <p className="bio">
          I am a software developer with a BSc majoring in Computer Science
          specializing in Networks and Security at the University of Manitoba.
          Prior to the University of Manitoba attended the University of Alberta
          where I played football and studied computer science. My primary
          interests lie in software and network security, as well as web and
          mobile development. I have been programming as a hobby since 2010 and
          for my studies since 2015. Most of my school work was written in
          C/C++, Java, and Python. For personal interest I have also learned
          about web and iOS development by taking courses on Udemy, and doing
          self guided learnng in my free time.
        </p>
      </Card>

      <Card dim={true}>
        <h1>Skills</h1>
      </Card>

      {/*
      This quad setup is causing some of the weird layout issues. You have a flex container laying out groups of 4 items, but the last one only having 2 is causing the gap you see near the "Projects title card". Here is what I'd do (notice the array on line 22):

      <div>
        {logos.map((logo) => {
          return (
            <img alt={logo.name} src={`./assets/logos/${logo.file}`} />
          );
        })} 
      </div>

      Then you can style the div as a flex or grid or whatever, and all the images are in the same layout container.

      I'd also suggest moving the assets directory to the public folder. Having it in the src folder can sometimes cause issues at build time.
      */}

      <Quad a1={img_html} a2={img_css} b1={img_js} b2={img_react} />
      <Quad a1={img_nodejs} a2={img_nginx} b1={img_js} b2={img_python} />
      <Quad a1={img_aws} a2={img_gcp} b1={img_docker} b2={img_cpp} />
      <Quad a1={img_mongo} a2={img_sql} />

      <Card>
        <h1>Projects</h1>
      </Card>
      <Card>
        <h1>nn</h1>
        <img src={img_nn}></img>
        <p>
          nn is a simplistic neural network class built in python using NumPy.
          The purpose of this project was to analyze the selection of
          hyper-parameters in network training and compare their performance on
          a training dataset. A paper is attached to the project with
          explanations and analysis. One of the other focuses was to explain
          some of the basic math behind training a fully-connected neural
          network.
        </p>
        <p>
          The{' '}
          <a
            href="https://github.com/aaronnoyes/neural-network/blob/master/nn.pdf"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            paper
          </a>{' '}
          and
          <a
            href="https://github.com/aaronnoyes/neural-network"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            {' '}
            code
          </a>{' '}
          can be found on my github.
        </p>
      </Card>
      <Card>
        <h1>seedVPN</h1>
        <p>
          This project implements a simple VPN using the Linux tun/tap driver
          created as a final project for a security course. A UDP tunnel is used
          to relay IP packets through a virtual TUN device. Each message is
          encrypted using AES-256 and secured using HMACs. A shared key is
          established on client connection via a TLS control channel implemented
          using OpenSSL.
        </p>
        <p class="project-description">
          A handful of dynamic reconfiguration commands exist through the TLS
          channel which allow for the key and other parameters to be changed.
        </p>
        <p class="project-description">
          The{' '}
          <a
            href="https://github.com/aaronnoyes/seedVPN/blob/master/paper.pdf"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            paper and code can be found here.
          </a>
        </p>
      </Card>
      <Card>
        <h1>Iris</h1>
        <img src={img_iris}></img>
        <p>
          A group project for school aimed to improve the user experience of
          registering for courses. My primary contribution was the search engine
          and course registration system. Courses are listed clearly with a
          responsive search. An emphasis was placed on user interaction and page
          readability.
        </p>
        <p>
          The site can be found at{' '}
          <a
            href="https://aaronnoyes.github.io/aurora2/home.html?"
            class="external-link"
            target="_blank"
            rel="noopener"
          >
            aaronnoyes.github.io/aurora2
          </a>
          . My contribution can be found by selecting "Course Registration" from
          the menu under the banner.
        </p>
      </Card>
    </div>
  );
}

export default App;
