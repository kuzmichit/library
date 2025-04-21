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
let s = () => console.log(333);

$('button').click(s)
/*const touchEnd = () => {
let id = setTimeout(() => $('button').dropdown(), 1000);
}*/
