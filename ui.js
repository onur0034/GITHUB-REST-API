class UI {
  constructor() {
    this.cardBody = document.querySelector(".card-body");
    this.profileDiv = document.getElementById("profile");
    this.repoDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
  }

  clearInput() {
    this.inputField = "";
  }

  showUserInfo(user) {
    this.profileDiv.innerHTML = `

        <div class="card card-body mb-3 GradientBorder">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2 avatar" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong> ${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.repos_url}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>

                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> ${user.location}<span id = "location">sadasdsad</a>

                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>

                                </li>

                            </div>

                      </div>
                </div>
        `;
  }

  showAlert(message) {
    let div = document.createElement("div");
    div.className = "alert alert-warning"; // RESOLVED AFTER NOT A FUNC...

    div.textContent = message;
    this.cardBody.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  showRepoInfo(repos) {
    this.repoDiv.innerHTML = "";
    repos.forEach((repo) => {
      this.repoDiv.innerHTML += `
      
      <div class="mb-2 card-body repoClass">
                    <div class="row" style="display: flex; ">
                        <div class="col-md-2">
                        <span><a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a></span> 
                        
                        </div>
                        <div class="col-md-6 badges" style= "justify-self: end">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
      
      `;
    });
  }
  addSearchedUserToUI(username) {
    let users = Storage.getSearchedUSersFromStorage();
    if (users.indexOf(username) === -1) {
      //<li class="list-group-item">asdaskdjkasjkşdjşasjd</li>;
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = username;
      this.lastUsers.appendChild(li);
    }
  }
  clearAllSearchedFromUI() {
    while (this.lastUsers.firstElementChild !== null) {
      this.lastUsers.removeChild(this.lastUsers.firstElementChild);
    }
  }
}
