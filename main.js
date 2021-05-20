// =================  exercise 1 ================== //

var data =
'{"task":{"makeacoffee":true,"takeabath":false,"washacloth":true,"feedacat":false}}';

var dataJSON = JSON.parse(data)
var output = document.getElementById('output')
var taskList = document.querySelector('#taskList');

for (var x in dataJSON.task) {
    console.log(x, dataJSON.task[x])
    var status = !dataJSON.task[x]?'':'checked';
    var html = '<li>' + x  + '<input type="checkbox" value="'+x+'" '+ status+'></li>';
    taskList.innerHTML += html;
}
addEvents()

function addEvents() {
    var checkBox = document.querySelectorAll('#taskList input[type="checkbox"]');
    for (var index in checkBox){
        checkBox[index].onchange = updateJSON;
    }
    console.log(checkBox)
}

function updateJSON() {
    var key = event.target.value;
    console.log(key, event.target.checked)
    dataJSON.task[key] = event.target.checked
}
console.log(dataJSON)
