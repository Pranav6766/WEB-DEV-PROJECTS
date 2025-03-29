let bagItemObjects = [];
onload();
function onload() {
  loadbagItemObjects();
  displayBagItems();
  displayBagPrice();
}

function loadbagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map((item) => {
    for (let i = 0; i < items.length; i++) {
      if (item == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}
function displayBagPrice() {
  let bagSummaryElement = document.querySelector(".bag-summary");

  let innerHtml = "";
  let total_price = 0;
  let total_discount = 0;
  const Convenience_fee = 99;
  bagItemObjects.forEach((item) => {
    total_price += item.original_price;
    total_discount += item.original_price - item.current_price;
  });
  if (total_price === 0) {
    innerHtml = updatePrice(total_price, total_discount, 0);
  } else {
    innerHtml = updatePrice(total_price, total_discount, Convenience_fee);
  }
  bagSummaryElement.innerHTML = innerHtml;
}
function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");

  let innerHtml = "";
  bagItemObjects.forEach((item) => {
    innerHtml += generateHtml(item);
  });
  containerElement.innerHTML = innerHtml;
}
function generateHtml(item) {
  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.image}" />
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">
                ${item.item_name}
              </div>
              <div class="price-container">
                <span class="current-price">Rs${item.current_price}</span>
                <span class="original-price">Rs${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="updateBag(${item.id})">X</div>
          </div>`;
}
function updateBag(itemId) {
  // Find the index of the first occurrence of the item
  let index = bagItems.indexOf(itemId);

  if (index !== -1) {
    bagItems.splice(index, 1); // Remove only one occurrence
  }
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadbagItemObjects();
  displayBagItems();
  displayBagIcon();
  displayBagPrice();
}

function updatePrice(total_price, total_discount, Convenience_fee) {
  return `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${
              bagItemObjects.length
            } Item(s))</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${total_price}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-Rs${total_discount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${Convenience_fee}</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${
                total_price - total_discount + Convenience_fee
              }</span>
            </div>
          </div>`;
}
