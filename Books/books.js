function getBook() {
    const genreValue = document.getElementById("bookGenre").value;
    document.getElementById("output").innerHTML = "";
    fetch("https://openlibrary.org/search.json?subject="+genreValue)
    .then(a => a.json())
    .then(response => {
        for(var i=0;i<1;i++) {
            const bookImage = "<img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg' />";
            const bookAuthor = response.docs[i].author_name ? " by <span class='author'>"+response.docs[i].author_name[0]+"</span>" : "";
            const bookInfo = "<h2>"+response.docs[i].title+" ("+response.docs[i].first_publish_year+")"+bookAuthor+"</h2>";
            const bookOutput = document.getElementById("output").innerHTML+=bookImage+bookInfo;
        }
    });
}
function fadeIn() {
    //document.getElementById("output").classList.add("textfade");
    alert("did it work?");
}