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


Function addNewItem(list, itemText){
    var listItem=document.createElement('li');
    listItem.innerText=itemText;
    list.appendChild(listItem);
}

var btnNew=document.getElementById('btnAdd');

btnNew.onClick=function(){
    var inputText=document.getElementById('inputText');
    var itemText=inputText.nodeValue;

    if(!itemText || itemText===""||itemText==="") return false;//blank방지

    addNewItem(document.getElementById('todolist'), itemText);
};