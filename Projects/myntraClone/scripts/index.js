let bagItems;

onload();

function onload() {
  bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  displayBagIcon();
  displayItems();
}

function displayBagIcon() {
  let bag_icon = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bag_icon.style.visibility = "visible"; //hidden kr diya tha so again viible
    bag_icon.innerText = bagItems.length;
  } else {
    bag_icon.style.visibility = "hidden";
  }
}
function updateItem(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}
function displayItems() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) return;
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div class="item-container">
        <img
          src="${item.image}"
          alt="item image"
          class="item-image"
        />
        <div class="rating">${item.rating.stars}⭐|${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">₹${item.current_price}</span>
          <span class="original-price">₹${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="updateItem(${item.id})">Add to Bag</button>
      </div>`;
  });

  itemsContainerElement.innerHTML = innerHtml;
}
