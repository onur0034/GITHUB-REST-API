//selecting elements

const githubFormData = document.getElementById("github-form");
const inputName = document.getElementById("githubname");
const lastUsers = document.getElementById("last-users");
const clearLastUsers = document.getElementById("clear-last-users");
const github = new Github();
const ui = new UI();

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
          ui.showAlert("wrong user name!");
        } else {
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => ui.showAlert("enter a user name"));
  }

  ui.clearInput();
  e.preventDefault();
};

clearFunc = () => {};

getAllSearched = () => {};

eventListeners();
