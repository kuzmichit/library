const classes = ($) => { 

$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if(!this[i].hasAttribute('class')) continue;
    this[i].classList.add(...classNames);
  }

  return this;
};

$.prototype.removeClass = function(...classNames) {
  for (let i = 0; i < this.length; i++) {
    //if(!this[i].hasAttribute('class')) continue;
    this[i].classList.remove(...classNames);
  }

  return this;
};

$.prototype.toggleClass = function(clazz) {
  for (let i = 0; i < this.length; i++) {
    //if(!this[i].clissList) continue;
    this[i].classList.toggle(clazz);
  }

  return this;
  };
};

  export default classes;
