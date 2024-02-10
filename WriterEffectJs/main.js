var h2 = document.querySelector('h2');
var txt = h2.innerHTML;
var i = 0;

const writeText = () => {
    h2.innerHTML = h2.innerHTML.replace('|','');

    if(txt.length > i){
        if(i == 0){
            h2.innerHTML = txt.charAt(i)
        }else{
            h2.innerHTML += txt.charAt(i)
        }

        h2.innerHTML += '|';
        i++
        setTimeout(writeText,65);
    }
}

writeText()