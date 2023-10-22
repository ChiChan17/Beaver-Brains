import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './login.scss';

function Login() {
  return (
    <div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <a href="#" id="signup">
            <Link to="/createaccount">
              Don't have an account yet?
            </Link>
            </a>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{ paddingTop: '13px' }}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required
            />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{ paddingTop: '22px' }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
            />
            <div className="form-border"></div>
            {/* Use the Link component to route to the home page */}
            {/* Placeholder login Button */}
            <Link to="/homepage" id="submit-btn">
              LOGIN
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
