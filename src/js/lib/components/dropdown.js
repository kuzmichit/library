const dropdown = ($) => {
  
$.prototype.dropdown = function() {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    $(this[i]).click(() => {
    $(`[data-toggle-id = "${id}"]`).fadeToggle(100)
  } ) 
  }
};


$('dropdown-toggle').dropdown()
}

export default dropdown;
