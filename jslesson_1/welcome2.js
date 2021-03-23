function moveItemOnScreen(obj, to) {
    if (obj === "human") {
        return "Move human";
    }
    else {
        return "Move object";
    }
}
var result = moveItemOnScreen("human", { x: 0, y: 0 });
console.log(result); //undefined
