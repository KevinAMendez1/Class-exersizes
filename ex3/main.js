const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

form.addEventListener("submit", createLink);

function createLink(e) {
    e.preventDefault();

    const url = input.value;
  }
  function createLink(e) {


    const linkContainer = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.className = "link";
    newLink.innerText = url;
    newLink.href = url;
    newLink.target = "_blank";
  

    linkContainer.appendChild(newLink);
    linkList.appendChild(linkContainer);
  

    form.reset();
  }