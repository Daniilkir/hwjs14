// Завдання 1
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key in user) {
    console.log(key + ':', user[key]);
}

// Завдання 2
const length = {
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
};

function countProps(obj) {
    const keys = Object.keys(obj);
    return keys.length;
}

console.log('Кількість властивостей в об\'єкті: ' + countProps(length));

// Завдання 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const employee in employees) {
        const tasksCompleted = employees[employee];
        if (tasksCompleted > maxTasks) {
            maxTasks = tasksCompleted;
            bestEmployee = employee;
        }
    }

    console.log('Найкращий працівник:', bestEmployee);
}

findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
});

// Завдання 4
function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const employee in employees) {
        totalSalary += employees[employee];
    }
    console.log('Загальна сума зарплати: ' + totalSalary);
}

countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
});

// Завдання 5
const products5 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

function getAllPropValues(arr, prop) {
    const values = [];
    for (const item of arr) {
        if (item[prop] !== undefined) {
            values.push(item[prop]);
        }
    }
    return values;
}

const propValues = getAllPropValues(products5, "name");
console.log('Значення властивості "name":', propValues);

// Завдання 6
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
}

const radarTotalPrice = calculateTotalPrice(products, 'Радар');
console.log('Загальна вартість продукту "Радар":', radarTotalPrice);
