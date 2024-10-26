const ulEl = document.querySelector("ul");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const product of data.products) {
      const card = document.createElement("li");

      const discountPercentage = product.discountPercentage

      const img = `<img src="${product.images[0]}" class="img" alt=""></img>`
      const title = document.createElement("p")
      const displayNone= document.createElement("div")
      const price = document.createElement("p")
      const discount = document.createElement("p")
      const discountedPrice = document.createElement("p")
      const stock = document.createElement("p")

      title.className= ("title")
      displayNone.className=("displayNone")
      price.className=("price")
      discount.className=("discount")
      discountedPrice.className = "discountedPrice";
      stock.className=("stock")

      title.innerHTML = product.title
      // displayNone.innerHTML = desc
      price.innerHTML = `${product.price}$`
      discount.innerHTML = `${(product.discountPercentage).toFixed(1)}% off`
      discountedPrice.innerHTML = `${((product.price / 100) * (100 - discountPercentage)).toFixed(2)} $`;
      stock.innerHTML = `${product.stock} left`;

      card.innerHTML = img
      card.appendChild(title)
      card.appendChild(price)
      card.appendChild(discount)
      card.appendChild(discountedPrice)
      card.appendChild(stock)
      ulEl.appendChild(card);
    }
  });
