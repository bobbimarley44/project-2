let dfirstTextElement = document.getElementById('dfirstField');
let dmiddleTextElement = document.getElementById('dmiddleField');
let dlastTextElement = document.getElementById('dlastField');
let dsubjectTextElement = document.getElementById('dsubjectField');
let dobjectTextElement = document.getElementById('dobjectField');
let dpossessiveaTextElement = document.getElementById('dpossessiveaField');
let dpossessivepTextElement = document.getElementById('dpossessivepField');
let firstTextElement = document.getElementById('firstField');
let middleTextElement = document.getElementById('middleField');
let lastTextElement = document.getElementById('lastField');
let subjectTextElement = document.getElementById('subjectField');
let objectTextElement = document.getElementById('objectField');
let possessiveaTextElement = document.getElementById('possessiveaField');
let possessivepTextElement = document.getElementById('possessivepField');
let setButtonElement = document.getElementById('button');
let clearButton = document.getElementById('clear');

setButtonElement.addEventListener('click', function() {
  chrome.storage.sync.set({
    dfnStored: dfirstTextElement.value,
    fnStored: firstTextElement.value,
    dmiStored: dmiddleTextElement.value,
    miStored: middleTextElement.value,
    dlnStored: dlastTextElement.value,
    lnStored: lastTextElement.value,
    dsubStored: dsubjectTextElement.value,
    subStored: subjectTextElement.value,
    dobjStored: dobjectTextElement.value,
    objStored: objectTextElement.value,
    dposaStored: dpossessiveaTextElement.value,
    posaStored: possessiveaTextElement.value,
    dpospStored: dpossessivepTextElement.value,
    pospStored: possessivepTextElement.value});
  console.log("\n\n\n *** submitted ....\n\n\n" + firstTextElement.value + " " +
  middleTextElement.value + " " + lastTextElement.value + " " +
  subjectTextElement.value + "/" + objectTextElement.value + "/" +
  possessiveaTextElement.value + "/" + possessivepTextElement.value);
    });

clearButton.addEventListener('click', function() {
  chrome.storage.sync.clear();
    dfirstTextElement.value = "";
    firstTextElement.value = "";
    dmiddleTextElement.value = "";
    middleTextElement.value = "";
    dlastTextElement.value = "";
    lastTextElement.value = "";
    dsubjectTextElement.value = "";
    subjectTextElement.value = "";
    dobjectTextElement.value = "";
    objectTextElement.value = "";
    dpossessiveaTextElement.value = "";
    possessiveaTextElement.value = "";
    dpossessivepTextElement.value = "";
    possessivepTextElement.value = "";
  console.log("\n\n\n *** cleared ....\n\n\n")
});
