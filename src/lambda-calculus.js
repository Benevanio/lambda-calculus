(() => {
  const I = x => x;
  const SELF = f => f(f);
  const PRI = a => b => a;

  const TRUE = a => () => a;
  const FALSE = () => b => b;

  const IF = c => a => b => c(a)(b);
  const AND = a => b => a(b)(FALSE);
  const OR = a => b => a(TRUE)(b);
  const XOR = a => b => a(b(FALSE))(b(TRUE));

  const ZERO = f => x => x;
  const ONE = f => x => f(x);
  const TWO = f => x => f(f(x));
  const THREE = f => x => f(f(f(x)));

  const SUCC = n => f => x => f(n(f)(x));
  const ADD = n => m => f => x => n(f)(m(f)(x));
  const MUL = n => m => f => x => n(m(f))(x);

  const toNumber = n => n(x => x + 1)(0);
  const fromNumber = value => {
    const parsed = Number(value);

    if (!Number.isInteger(parsed) || parsed < 0) {
      throw new Error("Use apenas inteiros positivos para números de Church.");
    }

    let result = ZERO;
    for (let index = 0; index < parsed; index += 1) {
      result = SUCC(result);
    }
    return result;
  };

  const toBoolean = b => b(true)(false);
  const fromBooleanName = name => {
    const normalized = String(name).trim().toUpperCase();

    if (normalized === "TRUE" || normalized === "T" || normalized === "1") {
      return TRUE;
    }
    if (normalized === "FALSE" || normalized === "F" || normalized === "0") {
      return FALSE;
    }

    throw new Error("Use TRUE ou FALSE para valores booleanos.");
  };

  window.LambdaCore = {
    I,
    SELF,
    PRI,
    TRUE,
    FALSE,
    IF,
    AND,
    OR,
    XOR,
    ZERO,
    ONE,
    TWO,
    THREE,
    SUCC,
    ADD,
    MUL,
    toNumber,
    fromNumber,
    toBoolean,
    fromBooleanName,
  };
})();
