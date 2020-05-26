/*
var btnNew=document.getElementById('btnAdd');
btnNew.onClick=addNewItem;

function addNewItem(){
    var listItem=document.creatElement('li');
    listItem.innerText='Hello';

    var list=document.getElementById('todolist');
    list.appendChild(listItem);
}
*/

var btnNew=document.getElementById('btnAdd');
btnNew.onClick=function(){
    addNewItem(document.getElementById('todolist'));
};

Function addNewItem(list){
    var listItem=document.createElement('li');
    listItem.innerText='Hello';
    list.appendChild(listItem);
}