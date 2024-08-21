const Sum = (a, b) => {
    return Number(a) + Number(b);
}



const Subtract = (a, b) => {
    return a - b;
}



const Multiplaction = (a, b) => {
    return a * b;
}


const Division = (a, b) => {
    if (Number(b) === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return Number(a) / Number(b);
}

const Modulo = (a, b) => {
    return Number(a) % Number(b);
}

module.exports = { Sum, Subtract, Multiplaction, Division, Modulo };
