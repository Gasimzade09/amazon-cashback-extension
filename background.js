chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3],
    addRules: [
      // если tag уже есть — ничего не делаем
      {
        id: 1,
        priority: 1,
        action: { type: "allow" },
        condition: {
          urlFilter: "tag=",
          resourceTypes: ["main_frame"]
        }
      },
      // если есть параметры, но нет tag
      {
        id: 2,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "Location",
              operation: "set",
              value: "https://www.amazon.com/?tag=smartcashba04-20"
            }
          ]
        },
        condition: {
          urlFilter: "?",
          excludedRequestHeaders: ["tag="],
          resourceTypes: ["main_frame"]
        }
      },
      // если нет параметров вообще
      {
        id: 3,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "Location",
              operation: "set",
              value: "https://www.amazon.com/?tag=smartcashba04-20"
            }
          ]
        },
        condition: {
          urlFilter: "",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
