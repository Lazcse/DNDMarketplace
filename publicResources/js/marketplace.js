let price = 0;
let rowCounter = 0;




function createItemLine(){
    var itemTypes = ["Choose Type","Armor","Gemstone","Weapons"];
    const breakLine = document.createElement("br");
    document.body.appendChild(breakLine);

    //Create and append select list
    var typeSelect = document.createElement("select");
    let tempId = "typeSelect" + rowCounter;
    typeSelect.setAttribute("id", tempId);
    typeSelect.setAttribute("class", "mySelect");
    typeSelect.setAttribute("data-placeholder","Choose type");
    document.body.appendChild(typeSelect);

    //Create and append the options
    for (var i = 0; i < itemTypes.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", itemTypes[i]);
        option.text = itemTypes[i];
        typeSelect.appendChild(option);
    }
    typeSelect.addEventListener("change",reactChosenItem);
}

function reactChosenItem(event){
    var typeSelect = event.target;
    console.log(typeSelect.value);

    //Create and append select list
    var itemSelect = document.createElement("select");
    let tempId = "itemSelect" + rowCounter;
    itemSelect.setAttribute("id", tempId);
    itemSelect.setAttribute("class", "chosen-select");
    itemSelect.setAttribute("tabindex","-1");

    document.body.appendChild(itemSelect);

    createItemList(itemSelect, typeSelect);

    //$('.chosen-select').on('change', testChosen);
    $(".chosen-select").chosen();
    itemSelect.append(".chosen-select");
    typeSelect.removeEventListener("change",reactChosenItem);
    typeSelect.addEventListener("change",changeChosenItem);
    rowCounter++;
    createItemLine();
}

function changeChosenItem(event){
    let typeSelect = event.target;
    let idNumber = typeSelect.id.substring(10);
    console.log(idNumber);
    let itemSelect = document.getElementById("itemSelect" + idNumber);
    console.log(itemSelect.value);
    removeChildrenElements(itemSelect);


    $('.chosen-select').trigger('chosen:updated');
}

function createItemList(parentSelect, typeSelect){

    if(typeSelect.value === "Armor"){
        var itemTypes = ["Helmet","Chestplate","Boots"];
    }else if(typeSelect.value === "Gemstone"){
        var itemTypes = ["Ruby","Sapphire","Emerald"];
    } else if(typeSelect.value === "Weapons"){
        var itemTypes = ["Crossbow","Longsword","Short Sword"];
    }else{
        var itemTypes = [];
    }


    var option = document.createElement("option");
        option.setAttribute("value", "");
        option.text = "-";
        parentSelect.appendChild(option);

    //Create and append the options
    for (var i = 0; i < itemTypes.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", itemTypes[i]);
        option.text = itemTypes[i];
        parentSelect.appendChild(option);
    }
}

function removeChildrenElements(parentElement){
    while (parentElement.firstChild) {
        parentElement.lastChild.remove();
    }
}


createItemLine();
