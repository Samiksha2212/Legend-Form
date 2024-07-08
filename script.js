function fa() {
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const bt = document.getElementById('bt');
    if (a.value == "" || b.value == "") {
        f();
        a.style.border = "3px solid red";
        b.style.border = "3px solid red";
        bt.value = "Fill all the details";
    } else {
        a.style.border = "3px solid green";
        b.style.border = "3px solid green";
        bt.value = "Thank you";
        bt.style.left = "120px";
    }
}

let flag = 1;
function f() {
    const bt = document.getElementById('bt');
    if (flag == 1) {
        bt.style.left = "210px";
        flag = 2;
    } else if (flag == 2) {
        bt.style.left = "80px";
        flag = 1;
    }
}
