
document.addEventListener("DOMContentLoaded",()=>{
  const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a=>{
    const href=(a.getAttribute("href")||"").split("?")[0].toLowerCase();
    if(href===page) a.classList.add("active");
  });
  document.querySelectorAll("[data-filter-input]").forEach(input=>{
    const selector=input.dataset.filterInput;
    const items=[...document.querySelectorAll(selector)];
    input.addEventListener("input",()=>{
      const q=input.value.trim().toLowerCase();
      items.forEach(item=>item.hidden=!item.textContent.toLowerCase().includes(q));
    });
  });
});
