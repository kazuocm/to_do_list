function addnewtask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    //if nao ta funcionando
    if (text.lenght === 0) {
        alert("Tarefa Inválida");
        return;
    }
    var listitem = document.createElement("li");
    const textelement = document.createTextNode(text);
    listitem.appendChild(textelement);
    list.appendChild(listitem);
}