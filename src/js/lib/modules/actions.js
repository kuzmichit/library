/**
 * Augments the provided query selection library `$` with additional DOM manipulation methods.
 * 
 * Methods added to the prototype of `$` include:
 * 
 * - `html(content)`: Gets or sets the innerHTML of the selected elements.
 * - `eq(i)`: Reduces the set of matched elements to the one at the specified index.
 * - `index()`: Returns the index of the first element within its parent's child elements.
 * - `find(selector)`: Finds all descendant elements that match the specified selector.
 * - `iter(obj)`: Iterates over the properties of the given object and logs them.
 *
 * This module is intended to enhance the functionality of the `$` library by 
 * providing convenient methods for common DOM operations.
 */
const actions = ($) => { 
   
 $.prototype.html = function(content) {
    for (let i=0; i<this.length; i++) {
      if(content) {
        this[i].innerHTML = content;
      } else 
      
      return this[i].innerHTML;
    }  
    
    return this;
}

$.prototype.eq = function(i) {
  
  const swap =  this[i];
  const objLength = Object.keys(this[i]).length
  
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  
  this[0] = swap;
  this.length = 1;
  
  return this;
}

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  
  const findMyIndex = (item) => {
    
    return item == this[0];
  }
  console.log(this[1])
  return childs.findIndex(findMyIndex)
}

$.prototype.find = function (selector) {
  let numberOfElements = 0;
  counter = 0;
  
  const copyObj = Object.assign({}, this)
  
  for(i=0; i<copyObj; i++) {
    let arr = copyObj.querySelectorAll(selector);
    if(arr.length === 0) continue;
    
    
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
  
    numberOfElements += arr.length;
  }
  
  this.length = numberOfElements;
  let objLength = Object.keys.length;
  for(; numberOfElements<objLength; numberOfElements++) {
    delete this[numberOfElements];
  }
  
  return this;
}

$.prototype.iter = function (obj) {
  //const obj = this;
  
  for(let item in obj) {
    if (obj.hasOwnProperty(item)) {
      console.log(item)
    }
  }
  
  return this;
}
};
export default actions;
