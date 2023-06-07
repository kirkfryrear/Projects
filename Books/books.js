function getBook() {
    document.getElementById("output").innerHTML = "";

    const genreValue = document.getElementById("bookGenre").value;
    fetch("https://openlibrary.org/search.json?subject="+genreValue)
    .then(a => a.json())
    .then(response => {
        const getNumber = Math.floor(Math.random() * (response.numFound - 1 + 1)) + 1;  //works
        const getBookTitle = response.docs[getNumber].title;    //API only seems to pull 0-99 docs per subject, WIP
        console.log(getNumber);
        for(var i=0;i<1;i++) {
            // const bookUrl = "https://openlibrary.org/isbn/"+randomIsbn;
            // const bookLink = "<div><a href='"+bookUrl+"' target='_blank'>See if it's available on OpenLibrary.org</a></div>"
            // const bookAuthor = response.docs[i].author_name ? " by <span class='author'>"+response.docs[i].author_name[0]+"</span>" : "";
            // const bookInfo = "<h2>"+response.docs[i].title+" ("+response.docs[i].first_publish_year+")"+bookAuthor+"</h2>";
            // const bookImage = "<img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg' />";
            // const bookOutput = document.getElementById("output").innerHTML+=bookInfo+bookImage+bookLink;
        }
    });
}