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
          
          //console.log($('button').html())
          
          $('button').on('click', function () {
            $('div').eq(2).removeClass('active');
           })
          
          
          //  console.log($('div').eq(3).html() ); // Ottiene il contenuto di #test
            //$('.div').addClass('active').html("Nuovo Contenuto!"); // Modifica il contenuto di #test
  
