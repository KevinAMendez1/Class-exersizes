const bodyEl = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overylay");
const form = document.querySelector("#link-form");
const list = document.querySelector(".link-list");
const allLinks = [];


//function
function focusInput() {
    bodyEl.classList.add("focus-form");
}
function endFocus() {
    if (bodyEl.classList.contains("focus-form")) {
        bodyEl.classList.remove("focus-form");
    }
}

function createLink(e) {
    e.preventDefault();

    const url = input.value;

    allLinks.push(url);
    populateLinklist(allLinks);

    const linkItem = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.className = "link";
    anchor.innerText = url;
    anchor.href = url;
    anchor.target = "_blank";

    linkItem.appendChild(anchor);
    list.appendChild(linkItem);
    
    form.reset();
}

function populateLinklist(links = []) {
    list.innerHTML = links
    .map(
        (link) =>
        `<li><a class="link" href="${link}" target="_blank">${link}</a></li>`
    ).join("")
}

// EVENT LISTENERS
input.addEventListener("focus", focusInput);

input.addEventListener("focusout", endFocus)

form.addEventListener("submit", createLink);
// overlay.addEventListener("click", endFocus);