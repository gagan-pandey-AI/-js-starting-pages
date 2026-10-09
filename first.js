// console.log("hello world");



// alert("Hello Gagan!");



// function login() {

// ```
// let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;

// if (username === "gagan" && password === "1234") {
//     alert("Login Successful!");
// } else {
//     alert("Invalid Username or Password!");
// }
// ```

// }





function login() {

```
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "" || password === "") {
    alert("Please enter username and password!");
}
else if (password === "1234") {

    document.body.innerHTML =
        "<h1>Namaste, " + username + "!</h1>" +
        "<p>Login Successful!</p>";

}
else {
    alert("Wrong Password!");
}
```

}
