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

var inputText=document.getElementById('inputText');
inputText.focus();
//enter키를 통해 값 입력하자. 웹애플리케이션 시작했을 때 작동으로 input태그로 커서를 위치시키자. 
//입력하고 나서는 백스페이스를 입력할 필요가 없도록 입력값을 블록설정해주자
inputText.onkeyup=function(event){
    //Event.which(13)===ENTER Key!!
    if(event.which===13){
    var itemText=inputText.Value;
    if(!itemText || itemText===""||itemText==="") return false;//blank방지
    addNewItem(document.getElementById('todolist'), itemText);
    inputText.focus();
    inputText.querySelector();
 }
};