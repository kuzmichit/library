const debounceFn = ($) => {

const debounce = (debounceTime = 100) => {
  let debounceTimeout;

  document.addEventListener("mousemove", function(event) {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(function() {
      console.log("Mouse coordinate:", event.clientX, event.clientY);
    }, debounceTime); // Esegui la funzione solo dopo 100ms di inattività del mouse
  });
};

}
