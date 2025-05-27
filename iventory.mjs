let inventory = [];

function addItem(item) {
    inventory.push(item);
}

function removeItem(item) {
    let newArr = inventory.filter((val) => val !== item);
    inventory = newArr;
}

function listItems() {
    console.log(inventory);
}

export {inventory, addItem, removeItem, listItems};