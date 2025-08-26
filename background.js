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
          regexFilter: "^(https://www\\.amazon\\.com/.*[?&]tag=)",
          resourceTypes: ["main_frame"]
        }
      },
      // если есть параметры, но нет tag
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "\\1&tag=smartcashba04-20"
          }
        },
        condition: {
          regexFilter: "^(https://www\\.amazon\\.com/[^?]+\\?(?!.*tag=).*)$",
          resourceTypes: ["main_frame"]
        }
      },
      // если нет параметров вообще
      {
        id: 3,
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
      }
    ]
  });
});
