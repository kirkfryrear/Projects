function getBook() {
    document.getElementById("output").innerHTML = "";
    fetch("https://openlibrary.org/search.json?q=julius")
    .then(a => a.json())
    .then(response => {
        for(var i=0;i<10;i++) {
            document.getElementById("output").innerHTML+=
                "<h2>"+response.docs[i].title+"</h2>"
                +"<em>by "+response.docs[i].author_name[0]+"</em>"
        }
    });
}