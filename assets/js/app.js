function Input(){
    while(true){
        var x = prompt('yasini qeyd et')
    if(x.length <= 0 || x.indexOf(' ') >= 0){
        alert('Can not be empty')
    }
    else if(isNaN(x)){
        alert('Eded daxil et')
    }
    else if(x < 18){
        alert('18 yasdan kicikdir')
    }
    else{
        alert('Qeydiyyat Tamamlandi')
        break;
    }
    }
    function Show() {
        var value = document.getElementById("inp").value;
        console.log(value);
    }
}
function Show() {
    var value = document.getElementById("inp").value;
    console.log(value);
    var x = value.slice(1,2)
    if (x<4) {
        if (x==1) {
            document.body.style.backgroundColor = "yellow"
        }
        if (x==2) {
            document.body.style.backgroundColor = "red"
        }
        if (x==3) {
            document.body.style.backgroundColor = "Black"
        }
        if (x==0) {
            alert("bele qrup yoxdur")
        }
    }
    else{
        alert("bele qrup yoxdur")
    }
}