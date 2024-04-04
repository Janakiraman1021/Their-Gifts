function validateForm() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;

    // Check if username and password match the given values
    if (username == "boomica19@birthday.com" && (password == 270505 || password=="27505")) {
      alert("Login successful! Now You will be redirected to the Choice of Gifts Page ");
      window.location.href = "choice.html";
      return false; // Prevent form submission
    } else {
      alert("Incorrect username or password. Please try again.");
      return false; // Prevent form submission
    }
  }