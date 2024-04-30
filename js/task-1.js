const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
   const categoryName = category.querySelector("h2");
    console.log(`Category: ${categoryName.textContent}`);
    const categoryListItem = category.querySelectorAll("li");
    console.log(`Elements: ${categoryListItem.length}`);
})
