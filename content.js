// content.js

function getPrice() {
  const priceEl = document.querySelector("#priceblock_ourprice, #priceblock_dealprice");
  if (!priceEl) return null;
  const priceText = priceEl.innerText.replace(/[^0-9.]/g, "");
  return parseFloat(priceText);
}

function highlightBestPrice(price) {
  const el = document.querySelector("#priceblock_ourprice, #priceblock_dealprice");
  if (el) {
    el.style.backgroundColor = "#c2f0c2";
    el.title = "This is the best price detected by Cashback Extension!";
  }
}

function addAffiliateLink() {
  const link = document.querySelector("#buy-now-button, #add-to-cart-button");
  if (link) {
    const url = new URL(link.href);
    url.searchParams.set("tag", "smartcashba04-20");
    link.href = url.toString();
  }
}

function main() {
  const price = getPrice();
  if (price) {
    highlightBestPrice(price);
    chrome.runtime.sendMessage({ type: "PRICE_CHECK", price: price });
    addAffiliateLink();
  }
}

main();
