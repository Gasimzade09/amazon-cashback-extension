chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    // Если уже есть tag — ничего не делаем
    if (url.searchParams.has("tag")) {
      return {};
    }

    // Добавляем tag
    url.searchParams.append("tag", "smartcashba04-20");

    return { redirectUrl: url.toString() };
  },
  { urls: ["*://www.amazon.com/*"] },
  ["blocking"]
);
