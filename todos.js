var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //converte JSON em array

function renderTodos(){ //carregar lista 
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li'),
            todoText    = document.createTextNode(todo),
            linkElement = document.createElement('a'),
            linkText    = document.createTextNode('Excluir');
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        todoElement.appendChild(linkElement);

        var position = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+ position +')');
    }
}

renderTodos();

function addTodo(){ //adicionar na lista
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(position){ //deleta da lista
    todos.splice(position, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage(){ //salva no banco do navegador
    localStorage.setItem('list_todos', JSON.stringify(todos)); //converte array em JSON
}
