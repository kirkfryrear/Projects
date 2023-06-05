async function logJSONData() {
    const response = await fetch("http://openlibrary.org/api/books?bibkeys=ISBN:0451526538&jscmd=data");
    const data = await response.json;
    const x = JSON.parse(data);

    console.log(x);
    document.getElementById("results").innerHTML = x;
}