async function logJSONData() {
    const response = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538');
    const jsonData = await response.json();
    console.log(jsonData);

    // returns string version in "results" div
        // const jsonDataString = JSON.stringify(jsonData);
        //document.getElementById("results").innerHTML = jsonDataString;
}