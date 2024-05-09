function LinkedList(){
    this.MyArray = [];
}
LinkedList.prototype.added = function(num){
    this.MyArray.push(num);
}
LinkedList.prototype.print = function(){
    console.log(this.MyArray);
}

LinkedList.prototype.removed = function(num){
    let i = this.MyArray.indexOf(num);
    this.MyArray.splice(i,1);

}

let lists = new LinkedList();
lists.added(1);
lists.added(2);
lists.added(3);
lists.added(4);
lists.removed(2);

lists.print();
