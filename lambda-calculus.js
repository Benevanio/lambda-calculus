const I = x => x;
let r  = I(3)
r =  I(I)
const SELF = f => f(f)
const PRI = a => b => a;
r = PRI(3)(I)
console.log(r);


const TRUE = a => () => a
const FALSE = () => b => b
r = TRUE(3)(4)
r = FALSE(3)(4)

const IF = c => a => b => c(a)(b)
r = IF(TRUE)(3)(4)
r = IF(FALSE)(3)(4)

console.log(r);


const AND = a => b => a(b)(FALSE)
const OR = a => b => a(TRUE)(b)
r = AND(TRUE)(TRUE)
r = AND(TRUE)(FALSE)
r = AND(FALSE)(TRUE)
r = AND(FALSE)(FALSE)
r = OR(TRUE)(TRUE)

console.log(r);

const XOR = a => b => a(b(FALSE))(b(TRUE))
r = XOR(TRUE)(TRUE)
r = XOR(TRUE)(FALSE)
r = XOR(FALSE)(TRUE)
r = XOR(FALSE)(FALSE)


console.log(r);

// Números de Church
const ZERO = f => x => x;
const ONE = f => x => f(x);
const TWO = f => x => f(f(x));
const THREE = f => x => f(f(f(x)));

// Sucessor
const SUCC = n => f => x => f(n(f)(x));

// Soma
const ADD = n => m => f => x => n(f)(m(f)(x));

// Multiplicação
const MUL = n => m => f => x => n(m(f))(x);

// Conversão para número JS
const toNumber = n => n(x => x + 1)(0);

// Exemplos
console.log('ZERO:', toNumber(ZERO));
console.log('ONE:', toNumber(ONE));
console.log('TWO:', toNumber(TWO));
console.log('THREE:', toNumber(THREE));
console.log('SUCC(THREE):', toNumber(SUCC(THREE)));
console.log('ADD(TWO)(THREE):', toNumber(ADD(TWO)(THREE)));
console.log('MUL(TWO)(THREE):', toNumber(MUL(TWO)(THREE)));