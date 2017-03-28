var todos = [];
var input = prompt("What would you like to do?")

while (input !== "quit") {
    

    if (input === "list") {
        listTodos();
        
    }

    else if (input === "new") {
        addTodo();
    }

    else if (input == "delete") {
        deleteTodo();
    }

    input = prompt("What would you like to do?")
}

console.log("See you again!")

function listTodos() {
    console.log("****************");
        todos.forEach( function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("****************");
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(newTodo + " added to list");
}

function deleteTodo() {
    var indexToDelete = prompt("Enter index of todo to delete");
        todos.splice(indexToDelete,1);
        console.log("Deletion completed");
}