const dropdown = ($) => {
  $.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
      const id = this[i].getAttribute('id');
      let time;

      // Assegna il click handler con debounce
      $(this[i]).on('click', () => {
        let currentTime = Date.now()
        if(time > currentTime - 300) return;
        $(`[data-toggle-id="${id}"]`).fadeToggle(100);
        time = currentTime;
      });
    }
  };

  $('.dropdown-toggle').dropdown();
};

export default dropdown;
