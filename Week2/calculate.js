function calculate(){
    expression = document.getElementById("expression").value;
    console.log(expression);
    try{
    answer = eval(expression);
    document.getElementById("expression").value = answer;
    addLog(expression+"="+answer);
}
catch(e){
    addLog(expression+" is bad, please fix it");
}};


function addLog(msg){
    var ul = document.getElementById('log');
    var li = document.createElement('li');
    var msg_text = document.createTextNode(msg);
    li.appendChild(msg_text);
    ul.appendChild(li);
}