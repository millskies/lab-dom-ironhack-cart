// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating total prices, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  console.log('price', price);

  const quantity = product.querySelector('.quantity input')
  console.log('input quantity', quantity)

  const priceValue = price.innerHTML
  console.log('price value', priceValue)

  const quantityValue = quantity.value
  console.log('quantityValue', quantityValue)

  const result = priceValue * quantityValue
  console.log('result', result)

  const total = product.querySelector('.subtotal span')
  // console.log('total', total)
  // console.log(total.innerHTML)

  total.innerHTML = result;
}

function calculateAll(){
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.getElementsByClassName('product');
  console.log(products)
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    const productRow = products[i];
    
    const subtotal = updateSubtotal(productRow);

    total += subtotal; console.log(total)
  }
  // ITERATION 3
  //... your code goes here
   
    
    // update the total in the DOM
    const totalElem = document.getElementById("total-value");
    totalElem.innerText = total.toFixed(2); // display the total with two decimal places
  }
  
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
