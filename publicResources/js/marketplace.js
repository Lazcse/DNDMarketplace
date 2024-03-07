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

    switch(typeSelect.value){
        case "Armor":
            var itemList = ["Helmet","Chestplate","Boots"];
            break;
        case "Gemstone":
            var itemList = ["Ruby","Sapphire","Emerald"];
            break;
        case "Weapons":
            var itemList = ["Crossbow","Longsword","Short Sword"];
            break;
        default:
            var itemList = [];
            break;
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

    createSelectList(typeSelect, conditionList);

}

function createSelectList(parentSelect, list){
    var option = document.createElement("option");
        option.setAttribute("value", "");
        option.text = "-";
        parentSelect.appendChild(option);

    //Create and append the options
    for (var i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", list[i]);
        option.text = list[i];
        parentSelect.appendChild(option);
    }
}

function removeChildrenElements(parentElement){
    while (parentElement.firstChild) {
        parentElement.lastChild.remove();
    }
}


createItemLine();
