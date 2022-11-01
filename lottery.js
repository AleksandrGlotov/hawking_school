// promise

// function lottery() {
//     console.log("Вы начали игру");
//     let promise = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
//       }, 1000);
//     });
//     return promise;
// }
  
// lottery()
// .then(() => console.log("Вы выиграли"))
// .then(() => console.log("Вам заплатили"))
// .catch(() => console.log("Вы проиграли"))
// .finally(() => console.log("Игра закончена"));


// async await

async function lottery() {
  console.log("Вы начали игру");

  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random(0) > 0.5 ? resolve() : reject("Вы проиграли");
      }, 3000);
    });
    console.log("Вы выиграли")
    console.log("Вам заплатили")
  } catch ( error ){
    console.log(error)
  }

  console.log("Игра закончена")
}

lottery()

