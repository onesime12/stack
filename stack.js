class Stack{
    constructor(){
        this.table=[];
        this.count=0;
    }

    push(data){
        this.table[this.count]=data;
        console.log(this.table[this.count]);
        this.count++;
    }

    pop(){
        this.table[this.count--];
        console.log(this.table[this.count])
    }
}

const stack=new Stack();

stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()

module.exports={Stack};