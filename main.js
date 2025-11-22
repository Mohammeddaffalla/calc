
var result = document.getElementById('display')

function display(num){
    result.value += num
}

function clear_input(){
    result.value = ""
}
function del_one(){
   result.value = result.value.slice(0 , -1)
}
function equal(){
    result.value = eval(result.value)
}