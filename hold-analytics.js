(function () {
  const defaults = {
    websiteId: "",
    scriptUrl: "",
    respectDoNotTrack: true
  };

  const config = Object.assign({}, defaults, window.HOLD_UMAMI_CONFIG || {});
  const clean = (value) => String(value || "").trim();
  const websiteId = clean(config.websiteId);
  const scriptUrl = clean(config.scriptUrl);
  const doNotTrack = navigator.doNotTrack === "1" || window.doNotTrack === "1";
  const canLoad = websiteId && scriptUrl && (!config.respectDoNotTrack || !doNotTrack);

  function safeProperties(properties) {
    const safe = {};

    Object.entries(properties || {}).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }

      if (["string", "number", "boolean"].includes(typeof value)) {
        safe[key] = String(value).slice(0, 80);
      }
    });

    return safe;
  }

  function track(eventName, properties) {
    const name = clean(eventName);

    if (!name || !window.umami || typeof window.umami.track !== "function") {
      return false;
    }

    window.umami.track(name, safeProperties(properties));
    return true;
  }

  window.HoldAnalytics = {
    isEnabled: Boolean(canLoad),
    track,
    demoEntry: (demoName) => track("demo-entry-click", { demo: demoName }),
    roleLens: (roleName) => track("role-lens-click", { role: roleName }),
    askHold: (source) => track("ask-hold-usage", { source })
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-hold-event]");

    if (!target) {
      return;
    }

    track(target.dataset.holdEvent, {
      demo: target.dataset.holdDemo,
      role: target.dataset.roleLabel,
      source: target.dataset.holdSource || target.id
    });
  });

  if (!canLoad) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = scriptUrl;
  script.dataset.websiteId = websiteId;
  script.dataset.doNotTrack = config.respectDoNotTrack ? "true" : "false";
  document.head.appendChild(script);
}());
