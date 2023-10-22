import React from 'react'
import './react.scss'

return Create() {
	<!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>New Profile</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body>
      <div id = "card-profile">
        <div id = "card-content">
          <div id = "card-title">
            <h2>NEW USER</h2>
            <div class="underline-title"></div>
          </div>
        <form method="post" class="form">
          <label for="user-email">
            &nbsp;Email
          </label>
          <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
          <div class="form-border"></div>
          <label for="user-password" style="padding-top:22px">
            &nbsp;Password
          </label>
          <input id="user-password" class="form-content" type="password" name="password" required />
          <div class="form-border"></div>
          <label for="user-name" style="padding-top:22px">
            &nbsp;Name
          </label>
          <input id="user-name" class="form-content" type="text" name="name" required />
          <div class="form-border"></div>
          <label for="user-major" style="padding-top:22px">
            &nbsp;Field of Study
          </label>
          <input id="user-major" class="form-content" type="text" name="major" required />
          <div class="form-border"></div>
          <label for="user-classes-taken" style="padding-top:22px">
            &nbsp;Classes taken:
          </label>
          <input id="user-classes-taken" class="form-content" type="text" name="classes-taken"  />
          <div class="form-border"></div>
          <label for="user-photo" style="padding-top:22px">
            &nbsp;Upload a picture of yourself!
          </label>
          <input id="user-photo" class="form-content" type="file" name="photo" />
          <div class="form-border"></div>
          <input id="submit-btn" type="submit" name="submit" value="CREATE" />
            </form>
          </div>
      </div>
    </body>

    </html>
}