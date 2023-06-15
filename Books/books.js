const subjectWorkCount = 0

async function getCount() {
  const genreValue = document.getElementById("bookGenre").value
  const subjectResponse = await fetch ("https://openlibrary.org/subjects/"+genreValue+".json")
  const subjectData = await subjectResponse.json()
  const subjectWorkCount = await subjectData.work_count   // produces needed number
  return subjectWorkCount
}

async function getBook() {
  const subjectWorkCount = getCount()
  console.log(subjectWorkCount)
  const genreValue = document.getElementById("bookGenre").value
  const randomOffset = (Math.floor(Math.random() * (workCount - 1 + 1)) + 1) - 1
  fetch("https://openlibrary.org/subjects/"+genreValue+".json?limit=1&offset="+randomOffset)
  .then(response => response.json())
  .then(response => {
    const bookUrl = "https://openlibrary.org"+response.works[0].key
    const bookInfo = "<h2 class='book-title'><a href='"+bookUrl+"' target='_blank'>"+response.works[0].title+"</a> by "+response.works[0].authors[0].name+" ("+response.works[0].first_publish_year+")</h2>"
    const bookOutput = document.getElementById("output").innerHTML+=bookInfo
  })
}