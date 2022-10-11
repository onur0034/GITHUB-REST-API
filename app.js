//selecting elements

const githubFormData = document.getElementById("github-form");
const inputName = document.getElementById("githubname");
const lastUsers = document.getElementById("last-users");
const clearLastUsers = document.getElementById("clear-last-users");
const github = new Github();

// neat functions

eventListeners = () => {
  githubFormData.addEventListener("submit", githubDataFunc);
  clearLastUsers.addEventListener("click", clearFunc);
  document.addEventListener("DOMContentLoaded", getAllSearched);
};

//functions

githubDataFunc = (e) => {
  let username = inputName.value.trim();
  console.log(username);

  if (username === "") {
    console.log("enter a user name");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          console.log("wrong username");
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  e.preventDefault();
};

clearFunc = () => {};

getAllSearched = () => {};

eventListeners();
