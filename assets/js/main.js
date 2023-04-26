function MyArray(){
    var arr = [1,4,78,23];
    this.remove = function(number){
        arr[arr.length--] = number;
        return arr;
    }
}

var arr = new MyArray();
console.log(arr.remove());



   
