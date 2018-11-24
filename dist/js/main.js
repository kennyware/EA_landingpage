function getResources(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var name = document.getElementById('first_name').value;
    var data = "name=" + name;
    xhr.open('post', '../php/processes.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        console.log(this.responseText);
    }
    xhr.send(data);
}

$(document).ready(function() {
    $('#signup-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '../php/process.php',
            method: 'post',
            success: function(res) {
                console.log(res);
            }
        })
    })
})