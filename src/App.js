import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Route exact path="/" component={home} />
          <Route path="/email" component={email} />
          <Route path="/password" component={password} />
          <Route path="/protect-me" component={protectMe} />
        </Router>
      </div>
    </div>
  );
}

const home = () => {
  return (
    <div className="home">
      <h2>ProTectMeFrom.Tech</h2>
      <Link to="/email">
        <a>Disposable E-Mail</a>
      </Link>
      <Link to="/password">
        <a>Random Password</a>
      </Link>
      <Link to="/protect-me">
        <a>How to Protect Myself</a>
      </Link>
      <a href="https://www.paypal.me/orstac">Donate</a>
    </div>
  );
}

const email = () => {
  return (
    <div className="email">
      <br />
      <Link to="/">
        <a className="return">Return Home</a>
      </Link>
      <br />
      <p>Coming Soon</p>
    </div>
  );
}

const password = () => {
  const chars = ['!', '#', "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  let arr = chars;
  const gen = (array, len) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let pass = array.slice(0, len + 1);
    let password = pass.join('');
    return password
  }
  const pass6 = gen(arr, 6);
  const pass12 = gen(arr, 12);
  const pass18 = gen(arr, 18);
  return (
    <div className="password">
      <br />
      <Link to="/">
        <a className="return">Return Home</a>
      </Link>
      <br />
      <br />
      <code>{pass6}</code>
      <br />
      <br />
      <code>{pass12}</code>
      <br />
      <br />
      <code>{pass18}</code>
      <br />
      <br />
      <p>To copy the passwords, double click then press ctrl+c to copy it. To paste it press ctrl+v.</p>
      <br />
      <p>All of the password that are generated are not stored in a database. If you want to see the code then go to our<a href="https://github.com/orstac/protectmefrom.tech">Github.</a>Although the 6 digits password can be solved by a computer in under a minute, the 12 digit and the 18 digit password would take around 1 million to 1 quintillion years to solve. If you memorize all of your passwords then we suggest you go with the 6 digits password because it's easier than the other ones to remember. But, we would suggest you use a password manager and use long passwords instead of using the small passwords. It's more secure and would take a very long time to crack.</p>
    </div>
  );
}

const protectMe = () => {
  return (
    <div className="protectMe">
      <br />
      <Link to="/">
        <a className="return">Return Home</a>
      </Link>
      <br />
      <p>Coming Soon</p>
    </div>
  );
}

export default App;
