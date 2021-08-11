let blogContainer = document.querySelector(".allBlogs")

let database = firebase.database().ref();


//Set the database "child_added" event here:
database.on("child_added", addBlogToBoard);

function addBlogToBoard(rowData) {
    let row =  rowData.val();
    let title = row.TITLE;
    let username = row.NAME;
    let message = row.MESSAGE;
    let time = row.TIME;
    let pElement = document.createElement("p");
    let p1Element = document.createElement("p");
    let p2Element = document.createElement("p");
    let p3Element = document.createElement("p");

    pElement.setAttribute("class", "pTags");
    p1Element.setAttribute("class", "pTags");
    p2Element.setAttribute("class", "pTags");
    p3Element.setAttribute("class", "pTags");

    pElement.innerText = "Title: " + title;
    p1Element.innerText = "Name: " + username;
    p2Element.innerText = "Message: " + message;
    p3Element.innerText = "Date and Time: " + time;

    
    p1Element.innerHTML = username + " : " + message; 
    

    blogContainer.appendChild(pElement);

    

    blogContainer.appendChild(pElement);
    blogContainer.appendChild(p1Element);
    blogContainer.appendChild(p2Element);
    blogContainer.appendChild(p3Element);
    
}