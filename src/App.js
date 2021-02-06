import styled from 'styled-components'
import Card from './components/Card'
import Header from './components/Header'
import SkillImage from './components/SkillImage';

import me from './assets/me.png'

const logos = [
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

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;;
  flex-flow: row wrap;
  padding-left: 100px;
  padding-right: 100px;

  @media only screen and (max-width: 1200px) {
      padding: 2px;
  }
`;

const Link = styled.a`
  color: rgb(107, 196, 255);
  text-decoration: none;
`;

function App() {
  return (
    <Container>
      <Header></Header>
      <Card>
        <h1>Aaron Noyes</h1>
      </Card>
      <Card image={me}></Card>
      <Card>
        <p>
        I am a software developer with a BSc majoring in Computer Science specializing in Networks and Security at the University of Manitoba. Prior to the University of Manitoba attended the University of Alberta where I played football and studied computer science. My primary interests lie in software and network security, as well as web and mobile development. I have been programming as a hobby since 2010 and for my studies since 2015. Most of my school work was written in C/C++, Java, and Python. For personal interest I have also learned about web and iOS development by taking courses on Udemy, and doing self guided learnng in my free time.
        </p>
      </Card>
      <Card>
        <h1>Skills</h1>
      </Card>
      <Card>
        <SkillList>
          {logos.map((logo, index) => {
            return (
              <SkillImage logo={logo} index={index}></SkillImage>
            );
          })}
        </SkillList>
      </Card>
      <Card>
        <h1>Projects</h1>
      </Card>
      <Card>
        <h2>nn</h2>
        <img src='/assets/nn.png'></img>
        <p>
          nn is a simplistic neural network class built in python using NumPy. The purpose of this project was to analyze the 
          selection of hyper-parameters in network training and compare their performance on a training dataset.
          A paper is attached to the project with explanations and analysis. 
          One of the other focuses was to explain some of the basic math behind training a fully-connected neural network.
        </p>
        <p>
          The <Link href="https://github.com/aaronnoyes/neural-network/blob/master/nn.pdf" target="_blank">paper</Link> and 
          <Link href="https://github.com/aaronnoyes/neural-network" class="external-link" target="_blank"> code</Link> can be found on my github.
        </p>
      </Card>
      <Card>
        <h2>seedVPN</h2>
        <p>
          This project implements a simple VPN using the Linux tun/tap driver created as a final project for a security course. 
          A UDP tunnel is used to relay IP packets through a virtual TUN device. Each message is encrypted using AES-256 and secured 
          using HMACs. A shared key is established on client connection via a TLS control channel implemented using OpenSSL.
        </p>
        <p class="project-description">
          A handful of dynamic reconfiguration commands exist through the TLS channel which allow for the key and other parameters to be changed.
        </p>
        <p class="project-description">The <Link href="https://github.com/aaronnoyes/seedVPN/blob/master/paper.pdf" target="_blank">paper and code can be found here.</Link></p>
      </Card>
      <Card>
        <h2>Iris</h2>
        <img src='/assets/iris.png'></img>
        <p>
          A group project for school aimed to improve the user experience of registering for courses. My primary contribution was the search 
          engine and course registration system. Courses are listed clearly with a responsive search. An emphasis was placed on user interaction and page readability.
        </p>
        <p>
          The site can be found at <Link href="https://aaronnoyes.github.io/aurora2/home.html?" target="_blank">aaronnoyes.github.io/aurora2</Link>. 
          My contribution can be found by selecting "Course Registration" from the menu under the banner.
        </p>
      </Card>
    </Container>
  );
}

export default App;
