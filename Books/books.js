function getBook() {
    document.getElementById("output").innerHTML = "";

    const genreValue = document.getElementById("bookGenre").value;

    const randomIsbn = Math.floor(Math.random() * (9999999999 - 1 + 1)) + 1;
    function thirteenDigits(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }
    const thirteenIsbn = thirteenDigits(randomIsbn, 13);
    const bookUrl = "https://openlibrary.org/isbn/978"+randomIsbn;
    const bookLink = "<div class='book-link'><a href='"+bookUrl+"' target='_blank'>See if it's available on OpenLibrary.org</a></div>"
    const bookOutput = document.getElementById("output").innerHTML+=bookLink;

    // fetch ("https://openlibrary.org/isbn/"+randomIsbn)
    // .then(a => a.json())
    // .then(response => {
    //     for(var i=0;i<1;i++) {
    //         const bookUrl = "https://openlibrary.org/isbn/"+randomIsbn;
    //         const bookLink = "<div><a href='"+bookUrl+"' target='_blank'>See if it's available on OpenLibrary.org</a></div>"
    //         // const bookAuthor = response.docs[i].author_name ? " by <span class='author'>"+response.docs[i].author_name[0]+"</span>" : "";
    //         // const bookInfo = "<h2>"+response.docs[i].title+" ("+response.docs[i].first_publish_year+")"+bookAuthor+"</h2>";
    //         // const bookImage = "<img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg' />";
    //         // const bookOutput = document.getElementById("output").innerHTML+=bookInfo+bookImage+bookLink;
    //     }
    // });
}