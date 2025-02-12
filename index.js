const itemInput =document.getElementById('item');
const todoTimeInput=document.getelementbyId('Time')
const saveBtn=document.getElementById('save');
const tableBody=document.getElementById('tableBody');

//pick the values to the given element
const getElementbyValue = (element) => {
    return element.value;
}
//on button click
saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    //pick value of the task name
    const itemValue = getElementbyValue(itemInput);
    const todoTimevalue = getElementbyValue(todoTimeInput);

    const tableRow = document.createElement("tr");

    const itemTd = document.createElement("td");

    itemTd.innerHTML = itemValue;
    tableRow.appendChild(itemTd)

    const toDoTimeTd = document.createElement("td");
    toDoTimeTd.innerHTML = todoTimevalue;
    tableRow.appendChild(toDoTimeTd);

    tableBody.appendChild(tableRow);
})
//console.log('js is created);