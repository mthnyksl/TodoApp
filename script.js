var list = document.querySelector('#myList');
var items = ['item1','item2','item3','item4'];
items.forEach(function (item) {
    CreateItem(item);
});

list.addEventListener('click',function (item) {
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }
});

document.querySelector('#deleteAll').onclick=function () {
    var elements = document.querySelectorAll('.checked');
    elements.forEach(function (item) {
        item.style.display='none';
    });
}

function ToogleDeleteButton() {
    var checkList = document.querySelectorAll('.list-group-item.checked');
    if (checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');
    }

}


document.querySelector('#btnCreate').onclick=function(){
    var item = document.querySelector('#txtItem').value;
    if(item===''){
        alert('llütfen bir değer giriniz');
        return;
    }
    CreateItem(item);
};

function CreateItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick=function () {
        var li = this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    }
}