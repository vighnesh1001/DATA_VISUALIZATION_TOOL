// const uploadBtn = document.getElementById("uploadBtn");
// const csvFileInput = document.getElementById("csvfile");
// const columnList = document.getElementById("columnnames");

// uploadBtn.addEventListener("click", async () => {
//     const csvFile = csvFileInput.files[0];

//     if (!csvFile) {
//         alert("Please select a CSV file to upload.");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("csvfile", csvFile);

//     try {
//         const response = await fetch("/parser/uploads", {
//             method: "POST",
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const result = await response.json();

//         console.log(result);

//         // Clear the previous list
//         columnList.innerHTML = '';

//         // Append new column names
//         result.columns.forEach(column => {
//             const li = document.createElement("li");
//             li.textContent = column;
//             columnList.appendChild(li);
//         });

//     } catch (error) {
//         console.error('Error:', error);
//     }
// });