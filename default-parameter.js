function fullName(first = 'Atik', last = 'chowdhuri'){
    const fullName = first + ' ' + last;
    return fullName;
}
const name = fullName();
console.log(name);