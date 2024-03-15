let price = 0;
let rowCounter = -1;



var completePriceField = document.createElement("input");
completePriceField.setAttribute("type", "text");
completePriceField.setAttribute("id", "completePriceField");
completePriceField.setAttribute("class", "textField");
completePriceField.setAttribute("value", "0");
completePriceField.setAttribute("readonly", "true");

var completePriceLabel = document.createElement("label");
completePriceLabel.setAttribute("for", "completePriceField");
completePriceLabel.setAttribute("class", "label");
completePriceLabel.innerHTML = "Total Price: ";

completePriceField.style.position = "fixed"; 
completePriceField.style.bottom = "20%";
completePriceField.style.right = "20%";

completePriceLabel.style.position = "fixed"; 
completePriceLabel.style.bottom = "25%";
completePriceLabel.style.right = "20%";

document.body.appendChild(completePriceField);
document.body.appendChild(completePriceLabel);



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

    var quantityField = document.createElement("input");
    quantityField.setAttribute("type", "number");
    quantityField.setAttribute("id", "quantityField" + rowCounter);
    quantityField.setAttribute("class", "textField");
    quantityField.setAttribute("min", "1");
    quantityField.setAttribute("value", "1");
    quantityField.setAttribute("max", "100");

    document.body.appendChild(quantityField);

    var standardPriceField = document.createElement("input");
    standardPriceField.setAttribute("type", "text");
    standardPriceField.setAttribute("id", "standardPriceField" + rowCounter);
    standardPriceField.setAttribute("class", "textField");
    standardPriceField.setAttribute("value", "0");
    standardPriceField.setAttribute("readonly", "true");

    document.body.appendChild(standardPriceField);

    var sellingPriceField = document.createElement("input");
    sellingPriceField.setAttribute("type", "text");
    sellingPriceField.setAttribute("id", "sellingPriceField" + rowCounter);
    sellingPriceField.setAttribute("class", "textField");
    sellingPriceField.setAttribute("value", "0");
    sellingPriceField.setAttribute("readonly", "true");

    document.body.appendChild(sellingPriceField);
    
    var totalPriceField = document.createElement("input");
    totalPriceField.setAttribute("type", "text");
    totalPriceField.setAttribute("id", "totalPriceField" + rowCounter);
    totalPriceField.setAttribute("class", "textField");
    totalPriceField.setAttribute("value", "0");
    totalPriceField.setAttribute("readonly", "true");

    document.body.appendChild(totalPriceField);

    $('.chosen-select').on('change', updateInputFields);
    $(".chosen-select").chosen({width: "100px"});
    $(".chosen-select").chosen({margin: "10px"});
    $(".chosen-select").chosen();
    itemSelect.append(".chosen-select");
    typeSelect.removeEventListener("change",reactChosenType);
    typeSelect.addEventListener("change",changeChosenItem);
    


    createItemLine();
}

function changeChosenItem(event){
    let typeSelect = event.target;
    let idNumber = typeSelect.id.replace(/\D/g, "");
    
    let itemSelect = document.getElementById("itemSelect" + idNumber);
    removeChildrenElements(itemSelect);
    createItemList(itemSelect, typeSelect);

    let conditionSelect = document.getElementById("conditionSelect" + idNumber);
    removeChildrenElements(conditionSelect)
    createConditionList(conditionSelect, typeSelect);

    let quantityField = document.getElementById("quantityField" + idNumber);
    quantityField.setAttribute("value", 1);

    let standardPriceField = document.getElementById("standardPriceField" + idNumber);
    standardPriceField.setAttribute("value", 1);

    let sellingPriceField = document.getElementById("sellingPriceField" + idNumber);
    sellingPriceField.setAttribute("value", 1);

    let totalPriceField = document.getElementById("totalPriceField" + idNumber);
    totalPriceField.setAttribute("value", 1);

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
    createSelectList(parentSelect, itemList);
}

function createConditionList(parentSelect, typeSelect){
    switch(typeSelect.value){
        case "Armor":
        case "Weapons":
            var conditionList = ["New","Used","Tattered"];
            break;
        case "Gemstone":
            var conditionList = ["Perfect", "Flawed", "Cracked"];
            break;
        default:
            var conditionList = [];
            break;
    }

    createSelectList(parentSelect, conditionList);

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


function updateInputFields(event){
    let select = event.target;
    let idNumber = select.id.replace(/\D/g, "");

    let item = document.getElementById("itemSelect" + idNumber);
    let condition = document.getElementById("conditionSelect" + idNumber);
    console.log(item.value);
    console.log(condition.value);

    let standardPriceField = document.getElementById("standardPriceField" + idNumber);
    standardPriceField.setAttribute("value", findStandardPrice(item.value));

    let sellingPriceField = document.getElementById("sellingPriceField" + idNumber);
    sellingPriceField.setAttribute("value", calculateSellingPrice(standardPriceField.value, condition.value));

    let quantityField = document.getElementById("quantityField" + idNumber);

    let totalPriceField = document.getElementById("totalPriceField" + idNumber);
    totalPriceField.setAttribute("value", calculateTotalPrice(sellingPriceField.value, quantityField.value));
}

function findStandardPrice(item){
    let price = 0;
    switch(item){
        case "Helmet":
            price = 50;
            break;
        case "Chestplate":
            price = 200;
            break;
        case "Boots":
            price = 25;
            break;
        case "Ruby":
            price = 250;
            break;
        case "Sapphire":
            price = 150;
            break;
        case "Emerald":
            price = 200;
            break;
        case "Crossbow":
            price = 75;
            break;
        case "Longsword":
            price = 50;
            break;
        case "Short Sword":
            price = 10;
            break;
        default:
            price = 0;
            break;
    }
    return price;

}

function calculateSellingPrice(standardPrice, condition){
    let price = 0;

    switch(condition){
        case "Used":
        case "Flawed":
            price = standardPrice * 0.50;
            break;
        case "Tattered":
        case "Cracked":
            price = standardPrice * 0.25;
            break;
        case "New":
        case "Perfect":
        default:
            price = standardPrice;
            break;
    }
    return price;
}

function calculateTotalPrice(sellingPrice, quantity){
    return sellingPrice * quantity;

}

createItemLine();
