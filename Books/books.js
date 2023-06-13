function getBook() {
    document.getElementById("output").innerHTML = "";
    const subjectUrl = "https://openlibrary.org/subjects/"
    const genreValue = document.getElementById("bookGenre").value;
    fetch (subjectUrl+genreValue+".json")
    .then(a => a.json())
    .then(response => {
        const workCount = response.work_count - 1;
        const randomOffset = Math.floor(Math.random() * (workCount - 1 + 1)) + 1;
        return fetch(subjectUrl+genreValue+".json?limit=1&offset="+randomOffset)
    })
    .then(response => response.json())
    .then(response => {
      const bookUrl = "https://openlibrary.org"+response.works[0].key; //fix URL later
      const bookInfo = "<h2 class='book-title'><a href='"+bookUrl+"' target='_blank'>"+response.works[0].title+"</a> by "+response.works[0].authors[0].name+" ("+response.works[0].first_publish_year+")</h2>";
      const bookOutput = document.getElementById("output").innerHTML+=bookInfo;
  })
}