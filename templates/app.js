const form = document.getElementById("upload_form");
const columnlist = document.getElementById("columnnames");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formdata = new FormData(form);
    const response = await fetch("/upload", {
        method: "POST",
        body: formdata
    })
    const result = await response.json();


    const columns = await response.json();
    result.columns.forEach(column => {
        const li = document.createElement("li");
        li.textContent = column;
        columnlist.appendChild(li);




    });

}
)