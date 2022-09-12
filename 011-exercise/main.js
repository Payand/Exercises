const registeringChoise = confirm("want to register?");

if (registeringChoise) {
  const firstName = prompt("Please Enter your firstName");
  const lastName = prompt("Please Enter your family name");
  const birthyear = prompt("Please Enter your birth year");
  const password = prompt("Please Enter your password");
  if (!firstName || !lastName || !birthyear || !password) {
    alert("please complete the form");
  } else if (password < 6) {
    alert("your password should be at least 6 character");
  } else if (new Date().getFullYear() - birthyear < 18) {
    alert("Your age must be at least 18 years old");
  } else {
    alert(`${firstName} ${lastName} your registration is compelete`);
  }
}
