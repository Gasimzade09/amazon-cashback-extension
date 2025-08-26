chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2],
    addRules: [
      // Случай без параметров
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "\\1?tag=smartcashba04-20"
          }
        },
        condition: {
          regexFilter: "^(https://www\\.amazon\\.com/[^?]+)$",
          resourceTypes: ["main_frame"]
        }
      },
      // Случай если уже есть параметры
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "\\1&tag=smartcashba04-21"
          }
        },
        condition: {
          regexFilter: "^(https://www\\.amazon\\.com/[^?]+\\?.*)$",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
