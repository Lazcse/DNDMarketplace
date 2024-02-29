let price = 0;
let rowCounter = 0;




function createItemLine(){
    var itemTypes = ["Choose Type","Armor","Gemstone","Weapons"];
    const breakLine = document.createElement("br");
    document.body.appendChild(breakLine);

    //Create and append select list
    var selectList = document.createElement("select");
    let tempId = "itemSelect" + rowCounter;
    selectList.setAttribute("id", tempId);
    selectList.setAttribute("class", "mySelect");
    selectList.setAttribute("data-placeholder","Choose type");
    document.body.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < itemTypes.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", itemTypes[i]);
        option.text = itemTypes[i];
        selectList.appendChild(option);
    }
    selectList.addEventListener("change",reactChosenItem);
}

function reactChosenItem(event){
    var select = event.target;
    console.log(select.value);

    if(select.value === "Armor"){
        var itemTypes = ["Helmet","Chestplate","Boots"];
    }else if(select.value === "Gemstone"){
        var itemTypes = ["Ruby","Sapphire","Emerald"];
    } else if(select.value === "Weapons"){
        var itemTypes = ["Crossbow","Longsword","Short Sword"];
    }else{
        var itemTypes = [];
    }

    //Create and append select list
    var selectList = document.createElement("select");
    let tempId = "typeSelect" + rowCounter;
    selectList.setAttribute("id", tempId);
    selectList.setAttribute("class", "chosen-select");
    selectList.setAttribute("tabindex","-1");

    document.body.appendChild(selectList);

    var option = document.createElement("option");
        option.setAttribute("value", "");
        option.text = "-";
        selectList.appendChild(option);

    //Create and append the options
    for (var i = 0; i < itemTypes.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", itemTypes[i]);
        option.text = itemTypes[i];
        selectList.appendChild(option);
    }

    $(".chosen-select").chosen();
    selectList.append(".chosen-select");
    event.target.removeEventListener("change",reactChosenItem);
    rowCounter++;
    createItemLine();
}

createItemLine();
