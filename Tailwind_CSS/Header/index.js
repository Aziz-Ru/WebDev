const doc_menu_btn_icon = document.getElementById("doc-menu");
const documents_links = document.querySelectorAll("#doucuments-link");
const all_contents=document.querySelectorAll('.content');
// console.log(all_contents)
const navbar_items_all=document.querySelectorAll('.nav_bar_items');
console.log(navbar_items_all);


navbar_items_all.forEach((tab,index)=>{

    tab.addEventListener('click',()=>{
        all_contents.forEach((section)=>{
            section.classList.add('hidden');
            // section.classList.remove('bg-green-500');
        });
        all_contents[index].classList.add('.active');
        all_contents[index].classList.remove('hidden');
        doc_menu_btn_icon.addEventListener("click",()=>{
            documents_links[index].classList.toggle('hidden');
        });
       
    });

    document.addEventListener("click", (event) => {
        if (
          !event.target.closest("#documents_links") &&
          !event.target.closest("#doc-menu")
        ) {
          documents_links[index].classList.add("hidden");
        }
        
      });

    
    


});