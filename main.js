// const smallDiv = document.querySelector("#small");
// const mediumDiv = document.querySelector("#medium");
// const bigDiv = document.querySelector("#big");

// const handler = (e) => {
//   // subscriber listener watcher
//   console.log("event", e);
// };

// // smallDiv.onclick = handler;
// smallDiv.addEventListener("click", handler);
// mediumDiv.addEventListener("click", handler);
// bigDiv.addEventListener("click", handler, true);

// store.subscribe(function subsciber() {});
// button.addEventListener("click", function subsciber() {});

// const button = {
//   subsribers: {
//     click: [],
//     focus: [],
//     dbClick: [],
//   },

//   addEventListener(eventName, subscriber) {
//     this.subscribers[eventName].push(subscriber);
//     return (eventName, subscriber) => {
//       this.subsribers[eventName] = this.subsribers[eventName].filter(
//         (sub) => sub !== subscriber
//       );
//     };
//   },
//   click() {
//     this.subscribers["click"].forEach((subsciber) => subsciber());
//   },
//   focus() {
//     this.subscribers["focus"].forEach((subsciber) => subsciber());
//   },
//   dbClick() {
//     this.subscribers["dbClick"].forEach((subsciber) => subsciber());
//   },

//   removeEventListener(eventName, subscriber) {
//     this.subsribers[eventName] = this.subsribers[eventName].filter(
//       (sub) => sub !== subscriber
//     );
//   },
// };
// const foo = () => {
//   console.log("1");
// };
// const unsubscribe = button.addEventListener("click", foo);
// unsubscribe("click", foo);


const button = document.querySelector('#buttonId')

const handler1 = (e) => {
  console.log('click', e)
}
const handler2 = () => {
  console.log('double click')
}

button.addEventListener('click', handler1)
button.addEventListener('dblclick', handler2)
// button.removeEventListener('click', handler1) // удаление подписчика


const bigDiv = document.querySelector('#big')
const mediumDiv = document.querySelector('#medium')
const smallDiv = document.querySelector('#small')


const handler = (e) => {
  console.log('event object', e.currentTarget) // target указывает элемент на котором вызвали событие, а currentTarget
}

const smallHandler = (e) =>{
  console.log('small object')
  e.stopPropagation()
}
const mediumHandler = () =>{
  console.log('medium object')
}
const bigHandler = () =>{
  console.log('big object')
}


bigDiv.addEventListener('click', bigHandler)
mediumDiv.addEventListener('click', mediumHandler)
smallDiv.addEventListener('click', smallHandler)


const linkElement = document.querySelector('#link')

const linkHandler = (e) => {
  console.log(e)
e.preventDefault()
}

linkElement.addEventListener('click', linkHandler)