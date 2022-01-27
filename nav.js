const navItems = document.querySelectorAll(".nav-item");

function highlight(e) {
  const itemsSelected = e.target;
  itemsSelected.classList.add("active");
  console.log(itemsSelected);
}
navItems.forEach((item) => {
  item.classList.remove("active");
  item.addEventListener("click", highlight);
});
