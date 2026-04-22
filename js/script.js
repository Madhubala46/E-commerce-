const user = document.querySelector(".account");
console.log(user);

const accMenu = document.querySelector("#accountMenu");

user.addEventListener("click", (e) => {
    e.stopPropagation();
    user.classList.add("active");
    accMenu.classList.toggle("active");
});

accMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    accMenu.classList.remove("active");
    user.classList.remove("active");
});


//serch form
const form = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = searchInput.value.trim().toLowerCase();

    if (value === "mobile")
        window.location.href = "#mobile";
    else
        window.location.href = "Error .html";
});
// item page
document.addEventListener("click", (e) => {
    const product = e.target.closest(".product-sm");
    if (product) {
        window.location.href = "item.html";
    }
});
