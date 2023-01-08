const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

let numArray = [],
    secondArray = [];

function getEle(n){
    return document.getElementById(n);
}

function getNumber(){
    let a = Number(getEle("inputNum").value);
    numArray.push(a);
    getEle("txtArray").innerHTML = numArray;
}

function tinhTongSoDuong(){
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            sum += numArray[i];
        }
    }
    getEle("txtResult").innerHTML = "Tổng các số dương là: " + sum;
}

function demSoDuong(){
    let count = 0;
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    getEle("txtResult2").innerHTML = "Số lượng số dương là: " + count;
}

function timSoNhoNhat(){
    let min = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] < min){
            min = numArray[i];
        }
    }
    getEle("txtResult3").innerHTML = "Số nhỏ nhất là: " + min;
}

function timSoDuongNhoNhat(){
    let min = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0 && numArray[i] < min){
            min = numArray[i];
        }
    }
    getEle("txtResult4").innerHTML = "Số dương nhỏ nhất là: " + min;
}


function timSoChan(){
    let m = 0;
    for(let i = numArray.length - 1; i >= 0; i--){
        if(numArray[i] % 2 == 0){
            m = numArray[i];
            break;
        }
    }
    getEle("txtResult5").innerHTML = "Số chẵn cuối cùng là: " + m;
}

function swapNumber(){
    let a = Number(getEle("inputNum1").value);
    let b = Number(getEle("inputNum2").value);
    let temp = numArray[a];
    numArray[a] = numArray[b];
    numArray[b] = temp;
    getEle("txtResult6").innerHTML = "Mảng sau khi đổi: " + numArray;
}

function sortNumber(){
    numArray.sort(function(a, b){return a - b});
    getEle("txtResult7").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
}

function findPrime(){
    // check prime function
    function checkPrime(n){
        if(n < 2){
            return false;
        }
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }
    // find prime function
    let prime = 0;
    for(let i = 0; i < numArray.length; i++){
        if(checkPrime(numArray[i])){
            prime = numArray[i];
            break;
        }
    }
    getEle("txtResult8").innerHTML = "Số nguyên tố đầu tiên là: " + prime;
}

function getNumber2(){
    let e = Number(getEle("inputNum3").value);
    secondArray.push(e);
    getEle("txtArray2").innerHTML = secondArray;
}

function countNumber(){
    let count = 0;
    for(let i = 0; i < secondArray.length; i++){
        Number.isInteger(secondArray[i]) && count++;
    }
    getEle("txtResult9").innerHTML = "Số nguyên: " + count;
}

function compareNumber(){
    let count = 0;
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    if(count > numArray.length - count){

        getEle("txtResult10").innerHTML = "Số dương > số âm";
    }else if(count < numArray.length - count){
        getEle("txtResult10").innerHTML = "Số âm > số dương";
    }else{
        getEle("txtResult10").innerHTML = "Số âm = số dương";
    }
}