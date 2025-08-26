chrome.runtime.onInstalled.addListener(() => {
  // Удаляем старые правила
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            // Вставь свой Associate ID вместо yourtag-20
            regexSubstitution: "\\1?tag=smartcashba04-20"
          }
        },
        condition: {
          regexFilter: "^(https://www\\.amazon\\.com/[^?]+)(?:\\?.*)?$",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
