## Hi!

<br />

### `Correct login credentials`

You can successfully log in with provided credentials:

email: **johndoe@gmail.com** <br />
password: **SecretPassword1**

Any other credentials will fail with logging in.

<br />

Mock endpoint is provided with ​[Mocky](https://designer.mocky.io/​). <br />
I decided to hardcode email and password in code, so data is being fetch by reaching correct endpoint conditionally, only when credentials match hardcoded ones. I assumed that more important is the way I handle incoming data rather than how I handle credentials check on server side.

### `State and store`
I also decided not to use any state manager for this tiny application. Probably this would show how I can use it and handle global store, but I ran out of time and decided to leave it like it is.

### `Tests`
Tests can be found only in **helpers** folder. Again, I ran out of time, so I wrote only tests for helper functions - testing components, especially with typescript requires a little bit more settings before, so I decided to not write any of them.

### `Styles`
I wrote styles in css files and some of them inline. I should be more consistent and probably use **makeStyles** because of **Material UI**, but again short available time did not allow me to make it better.

### `Tech stack`
* React
* Typescript
* Axios
* Material UI