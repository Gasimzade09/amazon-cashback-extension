// background.js

let cashbackData = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PRICE_CHECK") {
    const tabId = sender.tab.id;
    const price = message.price;

    const userCashback = price * 0.05;
    const ownerCashback = price * 0.02;

    cashbackData[tabId] = { price, userCashback, ownerCashback };
    console.log(`Price: $${price}, User cashback: $${userCashback.toFixed(2)}, Owner: $${ownerCashback.toFixed(2)}`);
  }
});