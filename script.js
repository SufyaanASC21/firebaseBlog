let titleElement = document.querySelector("#title_input");
let usernameElement = document.querySelector("#username_input");
let paragraphElement = document.querySelector("#paragraph_input");
let timeElement = document.querySelector("#time_input");
let button = document.querySelector("#submit_button");


// Set database object REFERENCE here:
    let database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
 button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing

    window.open("index.html", "_blank")

    let title           = titleElement.value;
    let username        = usernameElement.value;
    let paragraph       = paragraphElement.value;
    let time            = timeElement.value;
    
    titleElement.value      = "";
    usernameElement.value   = "";
    paragraphElement.value  = "";
    timeElement.value       = "";
    console.log(title + " : " + username + " : " + paragraph + " : " + time + " : ");
 


    //Create a JSON object with the username and message
    let value = {
        TITLE: title,
        NAME: username,
        MESSAGE: paragraph,
        TIME: time,
    }
    

    //Pass the  JSON object to our database
    database.push(value);
    

}

