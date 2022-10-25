// Упражнение №1

const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]
const unicArr = new Set(arr)
console.log(unicArr)


// Упражнение №2

const obj1 = {
    id: 1,
    name: "userName"
}

const obj2 = {
    id: 1,
    password: "qwerty"
}

const sumObj = Object.assign(obj1, obj2);
console.log(sumObj)


// Упражнение №3

const add = function (x, y) {
    return x + y
}

const addES6 = (x, y) => x + y


// Упражнение №4

let sleep = ms => new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
});


sleep(5000).then( () => {
    console.log('выполнилось через 5 секунд')
})