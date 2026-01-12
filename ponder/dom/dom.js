let title = document.querySelector('h1');
console.log(title)

title.textContent = 'Web Page Components';

document.getElementById('topics').style.color = 'purple';

let topic_title = document.getElementById('topics');

topic_title.style.color = 'purple'

let list = document.querySelector('.list')

list.style.border = '3px solid black';

let para = document.querySelector('p');

para.classList.add('background');

let image = document.querySelector('img')

image.setAttribute('src', 'images/hcj.jpg')


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'red';
})


const newPara = document.createElement('p');
newPara.innerText = 'Added with JavaScript';
document.body.appendChild(newPara);
                

