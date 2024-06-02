// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const btn = document.querySelector("#btn");
// const form = document.querySelector("form");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirmPassword");
// const file = document.querySelector('#file');
// const checkboxInput = document.querySelector('input[type="checkbox"]');
// const genderInputs = document.querySelectorAll('input[type="radio"]');

// console.log("Username:", username.value);
// console.log("Email:", email.value);
// console.log("Password:", password.value);
// console.log("File:", file.value);
// console.log("Checkbox checked:", checkboxInput.checked);

// const users = []

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const user = {
//     username: username.value
//   };
//   users.push(user);
//   console.log(user);
// });

// username.addEventListener('input', () => {
//     if (username.value.length >= 5 && email.value) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
// })

// email.addEventListener('input', () => {
//     if (email.value.length >= 5 && email.value) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
// })

// password.addEventListener('input', () => {
//     if (password.value.length >= 5 && password.value) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
// })

// confirmPassword.addEventListener('input', () => {
//     if (confirmPassword.value.length >= 5 && confirmPassword.value) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
// })

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const file = document.querySelector("#file");
const input = document.querySelector('input[type="checkbox"]');
const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");

const users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Username:", username.value);
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("File:", file.value);
  console.log("Checkbox checked:", input.checked);

  const user = {
    username: username.value,
  };
  users.push(user);
  console.log(user);
});

// username.addEventListener('input', () => {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
// })

// input.addEventListener('input', () => {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
// })

// email.addEventListener('input', () => {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
// })

// password.addEventListener('input', () => {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
// })

// confirmPassword.addEventListener('input', () => {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
// })

// genderMale.addEventListener('input' , ()=> {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value && (genderFemale.checked || genderMale.checked)) {
//         btn.disabled = false
//       } else {
//           btn.disabled = true
//       }
//   });

// genderFemale.addEventListener('input' , ()=> {
//     if (input.checked && password.value && confirmPassword.value && username.value && email.value && (genderFemale.checked || genderMale.checked)) {
//       btn.disabled = false
//     } else {
//         btn.disabled = true
//     }

//   });

username.addEventListener("input", triggerInput);
email.addEventListener("input", triggerInput);
password.addEventListener("input", triggerInput);
checkbox.addEventListener("input", triggerInput);
genderFemale.addEventListener("input", triggerInput);
genderMale.addEventListener("input", triggerInput);

function triggerInput() {
  if (
    username.value.length >= 5 &&
    email.value &&
    password.value &&
    checkbox.checked &&
    (genderFemale.checked || genderMale.checked)
  ) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
