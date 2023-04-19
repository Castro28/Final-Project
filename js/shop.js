const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', addToCart);

  let cartItems = [];

  const addToCartButtons = document.querySelectorAll(".card .btn-dark");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    const card = event.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const price = 6.99;
    const item = { title, price };
    cartItems.push(item);
    updateCart();
  }


  function updateCart() {
    const tableBody = document.querySelector("#shoppingCartModal tbody");
    let html = "";
    cartItems.forEach((item) => {
      html += `
        <tr>
          <td>${item.title}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>1</td>
        </tr>
      `;
    });
    tableBody.innerHTML = html;
  }

  function remove(){
    const card = target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    cartItems.push(item);
    updateCart();
  }
