let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,
}

for (const key in myObject) {
    const type = myObject[key]
    // console.log(type)
    console.log('key:', key, '|', typeof type);
}


/*
Output:
    key: name | string
    key: age | number
    key: city | string
    key: isStudent | boolean
*/