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
    let divElement = document.createElement("div")
    let pElement = document.createElement("p");
    let p1Element = document.createElement("p");
    let p2Element = document.createElement("p");
    let p3Element = document.createElement("p");
    let linebr = document.createElement("br");


    divElement.setAttribute("id", "divid")
    pElement.setAttribute("id", "p1");
    p1Element.setAttribute("id", "p2");
    p2Element.setAttribute("id", "p3");
    p3Element.setAttribute("id", "p4");

    pElement.innerText = "Title: " + title;
    p1Element.innerText = "Name: " + username;
    p2Element.innerText = "Message: " + message;
    p3Element.innerText = "Date and Time: " + time;
    linebr;
    
     


    blogContainer.prepend(linebr);
    blogContainer.appendChild(divElement);
    divElement.prepend(p3Element);
    divElement.prepend(p2Element);
    divElement.prepend(p1Element);
    divElement.prepend(pElement);
    blogContainer.prepend(linebr);
    
}