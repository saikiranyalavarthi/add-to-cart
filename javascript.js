document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('.bundle-box input[type="radio"]');
    const addToCartBtn = document.getElementById('addToCartBtn');

    addToCartBtn.addEventListener('click', function() {
      const selectedBundle = document.querySelector('.bundle-box input[type="radio"]:checked');
      if (selectedBundle) {
        alert(`Added to Cart: ${selectedBundle.value}`);
      } else {
        alert('Please select a bundle before adding to the cart.');
      }
    });
  });
  function updateResult() {
    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;

    var result = "Selected Color: " + color + "<br>Selected Size: " + size;

    document.getElementById("result").innerHTML = result;
  }