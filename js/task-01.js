const categoriesSum = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesSum.length}`);

categoriesSum.forEach((element) => {
return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
})
