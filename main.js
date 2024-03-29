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

// =================  exercise 2 ================== //

var dataJSON = '';
        var output = document.getElementById('output')
        var taskList = document.querySelector('#taskList');

        window.onload = function (){
            if (sessionStorage['task'] != null){
                dataJSON = JSON.parse(sessionStorage['task']);
            }
            else{
                var data =
                    '[{"info": "make a coffee","status": false}, {"info": "take a bath","status": false}, {"info": "wash a cloth","status": false}, {"info": "feed a cat","status": false}]';
                dataJSON = JSON.parse(data);
            }
            buildCheckbox(dataJSON)
        }
        
        function buildCheckbox(data){
            for (var x in dataJSON) {
                console.log(x, dataJSON[x])
                var status = !dataJSON[x].status?'':'checked';
                var html = '<li>' + dataJSON[x].info + x  + '<input type="checkbox" value="'+x+'" '+ status+'></li>';
                taskList.innerHTML += html;
            }   
            addEvents()
        }

        function addEvents() {
            var checkBox = document.querySelectorAll('#taskList input[type="checkbox"]');
            for (var index in checkBox){
                checkBox[index].onchange = updateJSON;
            }
            console.log(checkBox)
        }

        function updateJSON() {
            var key = event.target.value;
            // console.log(key, event.target.checked)
            dataJSON[key] = event.target.checked
        }
        console.log(dataJSON)
