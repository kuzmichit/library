import $ from './lib/lib.js';

const iterate = object => {
  for (let prop in object) {
    console.log(object[prop], '=====>')
  }
}

const handler = (e) => {
  //  let tmp = e.target.removeAttribute('class');
  let attrs = e.target.attributes;
  //iterate(attrs)
  console.log(iterate(attrs[1]))
}
$('.wrapper').html(`<div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
          <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
          </div>
        </div>`);
        
$('.dropdown-toggle').dropdown();
let s = () => console.log(333);
// $('.dropdown-toggle').dropdown()


/*const touchEnd = () => {
let id = setTimeout(() => $('button').dropdown(), 1000);
}*/
