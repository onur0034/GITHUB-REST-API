

class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }

  async getGithubData(username) {
    const getUserData = await fetch(this.url + username);
    const getRepoData = await fetch(this.url + username + "/repos");

    let userData = await getUserData.json();
    let repoData = await getRepoData.json();

    return {
      user: userData,
      repo: repoData,
    };
  }
}


// note: its necessary to remember : await  on fetch and getting json data...