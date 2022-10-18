class Storage {

    static getSearchedUsersFromStorage() {
        //get all users

        let users; 
        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchedUserToStorage() {
        // adding users
        

    }

    static clearAllSearchedUsersFromStorage() {
        //clear users from storage
    }





}