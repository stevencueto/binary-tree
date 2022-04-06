// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
  
    insert(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
        if(value < this.value){
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
        if(this.value === null){
            return false
        }else if(this.value === value){
            return true
        }else if(value < this.value){
            if (this.left == null){
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
        }
    }
  
    remove(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
        if (this.value < value){
            
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
    getMaxVal(){
        if(this.right === null){
            return this.value;
        }else{
            return this.right.getMaxVal()
        }
    }
}
  
  // Do not edit the line below.
const bts = new BST(3);
bts.insert(3)
bts.insert(5)
bts.insert(4)
bts.insert(3)
console.log(bts)