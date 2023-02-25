let tags = document.querySelectorAll(".tags-item");
let searchInput = document.querySelector(".shop-search-input");


for(let i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", () => {
        searchInput.value = tags[i].textContent;
    })
}