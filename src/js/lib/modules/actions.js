/**
 * - `html(content)`: Gets or sets the innerHTML of the selected elements.
 * - `eq(i)`: Reduces the set of matched elements to the one at the specified index.
 * - `index()`: Returns the index of the first element within its parent's child elements.
 * - `find(selector)`: Finds all descendant elements that match the specified selector.
 * - `iter(obj)`: Iterates over the properties of the given object and logs them.
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

  return childs.findIndex(findMyIndex)
}

$.prototype.find = function(selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
      const arr = copyObj[i].querySelectorAll(selector);
      if (arr.length == 0) {
          continue;
      }
      for (let j = 0; j < arr.length; j++) {
          this[counter] = arr[j];
          counter++;
      }
      numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
      delete this[numberOfItems];
  }
  return this;
};

$.prototype.iterate = function () {
  
  for(let item in this) {
    if (this.hasOwnProperty(item)) {
      console.log(item + ' ====> ' + this[item].textContent + ' ====> ' + this[item])
    }
  }
  
  return this;
}
};
export default actions;
