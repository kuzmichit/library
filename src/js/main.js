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
          
          let a = $('div').eq(1);
          console.log(a.attributes)
          $('button').on('click', () => {
            $('div').eq(3).toggleClass('active');
            $('div').eq(2).fadeOut(800);
           })
          
          
