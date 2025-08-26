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

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);

    // Проверяем, есть ли уже ?tag=
    if (!url.searchParams.has("tag")) {
      url.searchParams.set("tag", "yourtag-20"); // замени на свой Associate ID
      console.log("🔗 Переписанный URL:", url.toString());
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["*://www.amazon.com/*"] },
  ["blocking"]
);
