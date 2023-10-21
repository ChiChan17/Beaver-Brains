import React from 'react';
import './login.scss'
function Login() {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <title>Login</title>
                <link href="style.css" rel="stylesheet" type="text/css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <h2>LOGIN</h2>
                            <div className="underline-title"></div>
                            <a href="#" id="signup">
                                Don't have an account yet?
                            </a>
                        </div>
                        <form method="post" className="form">
                            <label for="user-email" style={{ paddingTop: '13px' }}>
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
                            <label for="user-password" style={{ paddingTop: '22px' }}>
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
                            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
                        </form>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Login;
