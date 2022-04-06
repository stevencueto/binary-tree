class BST {
    constructor(value) {//to make the "root" node
        this.value = value;
        this.left = null;
        this.right = null;
    }
  
	insert(value) {
        if(value < this.value){//checks is it has to go to le left or ro the right if is more than the root is right else is left
            if(this.left === null){
                this.left = new BST(value)
            }else{
                this.left.insert(value)
            }
        }else{
            if(this.right === null){
                    this.right = new BST(value)
            }else{
                this.right.insert(value)
            }
        }
        return this;
    }
  
    contains(value) {
      // Write your code here.
        if(value < this.value){
            if (this.left === null){
                return false
            }else{
                return this.left.contains(value)
            }
        }else if (value > this.value){
            if(this.right === null){
                return false
            }else{
                return this.right.contains(value)
            }
        }else{
            return true
        }
    }
  
    remove(value, parent = null) {
        if(value < this.value){
            if(this.left !== null){
                this.left.remove(value, this)
            }
        }else if(value > this.value){
            if(this.right !== null){
                this.right.remove(value, this)
            }
        }else{
            if(this.left !== null && this.right !== null){
                this.value = this.right.getMinVal()
                this.right.remove(this.value, this)
            }else if (parent === null){
                if(this.left !== null){
                    this.value = this.left.value
                    this.right = this.left.right
                    this.left = this.left.left
                }else if (this.right !== null){
                    this.value = this.right.value
                    this.left = this.right.left
                    this.right = this.right.right
                }else{
                //do nothing no more nodes to look at
                }
            }else if (parent.left ===  this){
                parent.left = this.left !== null ? this.left : this.right
            }else if (parent.right === this){
                parent.right = this.left !== null ? this.left : this.right
            }
         }
      return this;
    }
      
    getMinVal(){
        if(this.left === null){
              return this.value;
        }else{
            return this.left.getMinVal()
        }
    }
    getMinVal(){
        if(this.left === null){
              return this.value;
        }else{
            return this.left.getMinVal()
        }
    }
}
  
  // Do not edit the line below.
const bts = new BST(5);
bts.insert(6)
bts.insert(7)
bts.insert(8)
bts.insert(4)
bts.insert(3)
bts.insert(2)
bts.insert(1)
bts.insert(0)
bts.remove(6)
console.log(bts)


