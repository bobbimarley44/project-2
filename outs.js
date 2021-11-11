fromStored: dmiddleTextElement.value,
toStored: middleTextElement.value,
fromStored: dlastTextElement.value,
toStored: lastTextElement.value,
fromStored: dsubjecteTextElement.value,
toStored: subjectTextElement.value,
fromStored: dobjectTextElement.value,
toStored: objectTextElement.value,
fromStored: dpossessiveaTextElement.value,
toStored: possessiveaTextElement.value,
fromStored: dpossessivepTextElement.value,
toStored: possessivepTextElement.value,


console.log(dfirstTextElement);
console.log(dmiddleTextElement);
console.log(dlastTextElement);
console.log(dsubjectTextElement);
console.log(dobjectTextElement);
console.log(dpossessiveaTextElement);
console.log(dpossessivepTextElement);
console.log(firstTextElement);
console.log(middleTextElement);
console.log(lastTextElement);
console.log(subjectTextElement);
console.log(objectTextElement);
console.log(possessiveaTextElement);
console.log(possessivepTextElement);
console.log(setButtonElement);

chrome.storage.sync.set({
  dfnStored: dfirstTextElement.value,
  fnStored: firstTextElement.value});
chrome.storage.sync.set({
  dmiStored: dmiddleTextElement.value,
  miStored: middleTextElement.value});
chrome.storage.sync.set({
  dlnStored: dlastTextElement.value,
  lnStored: lastTextElement.value});
chrome.storage.sync.set({
  dsubStored: dsubjectTextElement.value,
  subStored: subjectTextElement.value});
chrome.storage.sync.set({
  dobjStored: dobjectTextElement.value,
  objStored: objectTextElement.value});
chrome.storage.sync.set({
  dposaStored: dpossessiveaTextElement.value,
  posaStored: possessiveaTextElement.value});
chrome.storage.sync.set({
  dpospStored: dpossessivepTextElement.value,
  pospStored: possessivepTextElement.value});
