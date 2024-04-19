//document.body.onload = cardImport;



function categoryImport(){
    const categoryNameTemplate = document.getElementById("category_name_template");
    const categoryHome = document.getElementById("category_list")

    for(let category of data.categories){
            
        let categoryNameElement = categoryNameTemplate.content.cloneNode(true);
        let liElement = categoryNameElement.querySelector(".category_name").querySelector(".category_button");
        
        liElement.innerHTML = category.name;
        liElement.id = `category_${category.name}`;
        liElement.addEventListener('click', cardImportListener);

        //clone.getElementByClass()

        categoryHome.appendChild(categoryNameElement);       
    }
}


function cardImportListener(event){
    cardImport(event.target.id.split('_')[1]);

}

categoryImport();
