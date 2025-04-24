const dropdown = ($) => {
  
$.prototype.dropdown = function() {
  
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    
    function debounce() {
      let a;
      clearTimeout(a);
      a = setTimeout( () => $(`[data-toggle-id = "${id}"]`).fadeToggle(100), 500)
    }
    $(this[i]).click(debounce); 
  }
};


$('dropdown-toggle').dropdown()
}

export default dropdown;
