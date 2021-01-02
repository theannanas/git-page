
onload = async() =>{

    const button = document.querySelector('button');
    button.onclick = buttonClick;

};

function buttonClick() {
    const para = document.querySelector('p');
    if (para.style.visibility == 'hidden'){
        para.style.visibility = 'visible';
    } else {
        para.style.visibility = 'hidden';
    }
}