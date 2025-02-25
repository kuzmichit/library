const handlers = ($) => {

  $.prototype.on = function (eventName, cb) {

    if (!eventName || !cb) return this;

    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener(eventName, cb)
    }

    return this;
  };

  $.prototype.click = function (handler) {

    if (!handler) return this;

    for (let i = 0; i < this.length; i++) {
      if (handler)
        this[i].addEventListener('click', handler)
      else this.click()
    }

    return this;
  };

  $.prototype.off = function (eventName, cb) {

    if (!eventName || !cb) return this;

    for (let i = 0; i < this.length; i++) {
      this[i].removeEventListener(eventName, cb)
    }

    return this;
  };
}

export default handlers;
