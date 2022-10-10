 //selecting elements

 const githubForm = document.getElementById("github-form");
 const nameInput = document.getElementById("githubname");
 const clearLastUsers = document.getElementById("clear-last-users");
 const lastUsers = document.getElementById("last-users");
 const github = new Github();

 eventListeners = () => {
   githubForm.addEventListener("submit", getData);
   clearLastUsers.addEventListener("click", clearAllSearched);
   document.addEventListener("DOMContentLoaded", getAllSearched);
 };

 getData = (e) => {
   let username = nameInput.value.trim();
   if (username === "") {
     alert("enter a user name");
   } else {
     github
       .getGithubData(username)
       .then((response) => {
           if (response.user.message === "Not Found") {
               console.log("wrong username");

           }
           else console.log(response);
       })
       .catch((err) => console.error("error"));
   }

   e.preventDefault();
 };

 clearAllSearched = () => {};

 getAllSearched = () => {};

 eventListeners();

