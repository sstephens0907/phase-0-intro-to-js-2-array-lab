// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(cat){
    cats.push(cat);
}
function destructivelyPrependCat(cat){
    cats.unshift(cat);
}
function destructivelyRemoveLastCat(cat){
    cats.pop(cat);
}
function destructivelyRemoveFirstCat(cat){
    cats.shift(cat);
}

function appendCat(cat){
    appendCat = [...cats,cat]
    return appendCat;
}

function prependCat(cat){
    prependCat = [cat,...cats]
    return prependCat;
}

function removeLastCat(){
    removeLastCat = cats.slice(0,-1);
    return removeLastCat;
}

function removeFirstCat(){
    removeFirstCat = cats.slice(1);
    return removeFirstCat;
}