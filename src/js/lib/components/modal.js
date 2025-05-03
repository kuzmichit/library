const modal = ($) => {
	
  $.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
      const id = this[i].getAttribute('id');
      let time;

      // Assegna il click handler con debounce
			const target = this[i].getAttribute('data-target');
      $(this[i]).on('click', (e) => {
				e.preventDefault();
				$(target).fadeIn(500);
				document.body.style.overflow = 'hidden';
				let currentTime = Date.now()

				if(time > currentTime - 300) return;
			  time = currentTime;
      } )

			const closeElement = document.querySelectorAll('[data-close]');

			if (closeElement) {
				closeElement.forEach( (elem) => {

				$(elem).on('click', (e) => {
					e.preventDefault();
					$(target).fadeOut(500);
					document.body.style.overflow = 'auto';
				});
			} )
		}
		
	}
};

// Chiudi il modal se si fa clic al di fuori del contenuto
	$('.container').on('click', (e) => {
		const content = document.querySelector('.modal');
		if (!content.contains(e.target)) {
		console.log(e.target.contains(), '=====>')
			$(target).fadeOut(500);
			document.body.style.overflow = 'auto';
		}
	});
};

export default modal;