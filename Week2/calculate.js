let calculate = ()=>{
    expression = document.getElementById("expression").value;
    console.log(expression);
    answer = eval(expression);
    document.getElementById("expression").value = answer;
};