import './styles/App.css';
import Card from './components/Card';
import Project from './components/Project';

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

function App() {
  return (
    <div className="app">
      <header>
        <h1>Aaron Noyes</h1>
      </header>

      <div className="portrait">
        <img src="/assets/me.png" alt="Aaron Noyes" />
      </div>

      <Card>
        <h2>About Me</h2>
        <p>
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

      <div className="skills">
        <h2>Skills</h2>
        <div className="skillsList">
          {logos.map((logo, index) => {
            return (
              <div className="logo">
                <img
                  alt={logo.name}
                  src={`./assets/logos/${logo.file}`}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <Project title="nn" image="/assets/nn.png">
          <p>
            nn is a simplistic neural network class built in python using NumPy.
            The purpose of this project was to analyze the selection of
            hyper-parameters in network training and compare their performance
            on a training dataset. A paper is attached to the project with
            explanations and analysis. One of the other focuses was to explain
            some of the basic math behind training a fully-connected neural
            network.
          </p>
          <p>
            The{' '}
            <a
              href="https://github.com/aaronnoyes/neural-network/blob/master/nn.pdf"
              target="_blank"
              rel="noopener"
            >
              paper (PDF format)
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/aaronnoyes/neural-network"
              target="_blank"
              rel="noopener"
            >
              code
            </a>{' '}
            can be found on my github.
          </p>
        </Project>

        <Project title="seedVPN">
          <p>
            This project implements a simple VPN using the Linux tun/tap driver
            created as a final project for a security course. A UDP tunnel is
            used to relay IP packets through a virtual TUN device. Each message
            is encrypted using AES-256 and secured using HMACs. A shared key is
            established on client connection via a TLS control channel
            implemented using OpenSSL.
          </p>
          <p>
            A handful of dynamic reconfiguration commands exist through the TLS
            channel which allow for the key and other parameters to be changed.
          </p>
          <p>
            The{' '}
            <a
              href="https://github.com/aaronnoyes/seedVPN/blob/master/paper.pdf"
              target="_blank"
              rel="noopener"
            >
              paper (PDF format)
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/aaronnoyes/seedVPN"
              target="_blank"
              rel="noopener"
            >
              code
            </a>{' '}
            can be found on my github.
          </p>
        </Project>

        <Project title="Iris" image="/assets/iris.png">
          <p>
            A group project for school aimed to improve the user experience of
            registering for courses. My primary contribution was the search
            engine and course registration system. Courses are listed clearly
            with a responsive search. An emphasis was placed on user interaction
            and page readability.
          </p>
          <p>
            The site can be found at{' '}
            <a
              href="https://aaronnoyes.github.io/aurora2/home.html?"
              target="_blank"
              rel="noopener"
            >
              aaronnoyes.github.io/aurora2
            </a>
            . My contribution can be found by selecting "Course Registration"
            from the menu under the banner.
          </p>
        </Project>
      </div>

      <footer>© 2020 Aaron Noyes</footer>
    </div>
  );
}

export default App;
