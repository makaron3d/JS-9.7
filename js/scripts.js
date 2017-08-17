function addEventListener(param) {
    console.log(param);
}
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
    var number = document.getElementsByTagName('li');
        if (number.length < 6) {
            var element = document.createElement('li');
            console.log(element);
            element.innerHTML = 'item ' + number.length;
            list.appendChild(element);
        }   else {
                console.log('List is full!')
            }
});

