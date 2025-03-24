const itemInput = document.getElementById("item")
const todoTimeInput = document.getElementById("Time") // Fixed the method name
const saveBtn = document.getElementById("save")
const tableBody = document.getElementById("tableBody")

// Pick the values to the given element
const getElementbyValue = (element) => {
  return element.value
}

// On button click
saveBtn.addEventListener("click", (event) => {
  event.preventDefault()

  // Pick value of the task name
  const itemValue = getElementbyValue(itemInput)
  const todoTimeValue = getElementbyValue(todoTimeInput)

  const tableRow = document.createElement("tr")

  const itemTd = document.createElement("td")
  itemTd.innerHTML = itemValue
  tableRow.appendChild(itemTd)

  const toDoTimeTd = document.createElement("td")
  toDoTimeTd.innerHTML = todoTimeValue
  tableRow.appendChild(toDoTimeTd)

  tableBody.appendChild(tableRow)

  // Clear input fields after adding
  itemInput.value = ""
  todoTimeInput.value = ""
})

