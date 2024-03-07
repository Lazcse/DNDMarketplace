let price = 0;
let rowCounter = -1;




function createItemLine(){
    rowCounter++;
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
    typeSelect.addEventListener("change",reactChosenType);
}

function reactChosenType(event){
    var typeSelect = event.target;
    console.log(typeSelect.value);

    //Create and append select list
    var itemSelect = document.createElement("select");
    let tempItemId = "itemSelect" + rowCounter;
    itemSelect.setAttribute("id", tempItemId);
    itemSelect.setAttribute("class", "chosen-select");
    itemSelect.setAttribute("tabindex","-1");

    document.body.appendChild(itemSelect);

    createItemList(itemSelect, typeSelect);

    var conditionSelect = document.createElement("select");
    let tempConditionId = "conditionSelect" + rowCounter;
    conditionSelect.setAttribute("id", tempConditionId);
    conditionSelect.setAttribute("class", "chosen-select");
    conditionSelect.setAttribute("tabindex","-1");

    document.body.appendChild(conditionSelect);

    createConditionList(conditionSelect, typeSelect);

    //$('.chosen-select').on('change', testChosen);
    $(".chosen-select").chosen();
    itemSelect.append(".chosen-select");
    typeSelect.removeEventListener("change",reactChosenType);
    typeSelect.addEventListener("change",changeChosenItem);


    createItemLine();
}

function changeChosenItem(event){
    let typeSelect = event.target;
    let idNumber = typeSelect.id.substring(10);
    console.log(idNumber);
    let itemSelect = document.getElementById("itemSelect" + idNumber);
    console.log(itemSelect.value);
    removeChildrenElements(itemSelect);
    createItemList(itemSelect, typeSelect);

    $('.chosen-select').trigger('chosen:updated');
}

function createItemList(parentSelect, typeSelect){

    if(typeSelect.value === "Armor"){
        var itemList = ["Helmet","Chestplate","Boots"];
    }else if(typeSelect.value === "Gemstone"){
        var itemList = ["Ruby","Sapphire","Emerald"];
    } else if(typeSelect.value === "Weapons"){
        var itemList = ["Crossbow","Longsword","Short Sword"];
    }else{
        var itemList = [];
    }


    var option = document.createElement("option");
        option.setAttribute("value", "");
        option.text = "-";
        parentSelect.appendChild(option);

    //Create and append the options
    for (var i = 0; i < itemList.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", itemList[i]);
        option.text = itemList[i];
        parentSelect.appendChild(option);
    }
}

function createConditionList(typeSelect){
    switch(typeSelect.value){
        case "Armor":
        case "Weapons":
            var conditionList = ["New","Used","Tattered"];
            break;
        case "Gemstone":
            var conditionList = ["Perfect","Good","Bad"];
            break;
        default:
            var conditionList = [];
            break;
    }

}

function removeChildrenElements(parentElement){
    while (parentElement.firstChild) {
        parentElement.lastChild.remove();
    }
}


createItemLine();
