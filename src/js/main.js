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
          
console.log($.prototype.fadeOut)
  // $('div').eq(1).fadeOut(1000);
          
          $('button').on('click', () => {
            // $('div').eq(1).toggleClass('active');
            $('div').eq(1).fadeOut(800);
           })
          
          