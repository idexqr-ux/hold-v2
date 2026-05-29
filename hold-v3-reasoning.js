const cards = document.querySelectorAll(".source-card");
const detailTitle = document.getElementById("detail-title");
const detailType = document.getElementById("detail-type");
const detailChecks = document.getElementById("detail-checks");
const detailEvidence = document.getElementById("detail-evidence");
const detailNote = document.getElementById("detail-note");

function renderSource(key) {
  if (!window.reasoningSources || !window.reasoningSources[key]) return;

  const detail = window.reasoningSources[key];
  detailTitle.textContent = detail.title;
  detailType.textContent = detail.type;
  detailEvidence.textContent = detail.evidence;
  detailNote.textContent = detail.note;
  detailChecks.innerHTML = "";

  detail.checks.forEach((check) => {
    const item = document.createElement("li");
    item.textContent = check;
    detailChecks.appendChild(item);
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.setAttribute("aria-pressed", "false"));
    card.setAttribute("aria-pressed", "true");
    renderSource(card.dataset.source);
  });
});
