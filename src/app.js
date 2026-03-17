(() => {
  const modeEl = document.getElementById("mode");
  const operationEl = document.getElementById("operation");
  const valueAEl = document.getElementById("valueA");
  const valueBEl = document.getElementById("valueB");
  const resultEl = document.getElementById("result");
  const formEl = document.getElementById("calculator");
  const examplesEl = document.getElementById("examples");

  const modes = {
    boolean: ["AND", "OR", "XOR", "IF"],
    number: ["SUCC", "ADD", "MUL"],
  };

  const examples = [
    {
      title: "Identidade",
      expr: "I(42)",
      run: () => String(window.LambdaCore.I(42)),
    },
    {
      title: "Primeiro argumento",
      expr: "PRI(7)(9)",
      run: () => String(window.LambdaCore.PRI(7)(9)),
    },
    {
      title: "AND",
      expr: "AND(TRUE)(FALSE)",
      run: () => String(window.LambdaCore.toBoolean(window.LambdaCore.AND(window.LambdaCore.TRUE)(window.LambdaCore.FALSE))),
    },
    {
      title: "ADD",
      expr: "ADD(TWO)(THREE)",
      run: () => String(window.LambdaCore.toNumber(window.LambdaCore.ADD(window.LambdaCore.TWO)(window.LambdaCore.THREE))),
    },
    {
      title: "MUL",
      expr: "MUL(TWO)(THREE)",
      run: () => String(window.LambdaCore.toNumber(window.LambdaCore.MUL(window.LambdaCore.TWO)(window.LambdaCore.THREE))),
    },
  ];

  const printResult = message => {
    resultEl.textContent = message;
  };

  const renderExamples = () => {
    examples.forEach(example => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "example-btn";
      button.innerHTML = `
        <span class="example-title">${example.title}</span>
        <span class="example-expr">${example.expr}</span>
      `;

      button.addEventListener("click", () => {
        try {
          printResult(`${example.expr} => ${example.run()}`);
        } catch (error) {
          printResult(`Erro: ${error.message}`);
        }
      });

      examplesEl.appendChild(button);
    });
  };

  const setDefaultsByMode = mode => {
    if (mode === "boolean") {
      valueAEl.value = "TRUE";
      valueBEl.value = "FALSE";
    } else {
      valueAEl.value = "2";
      valueBEl.value = "3";
    }
  };

  const renderOperationOptions = mode => {
    operationEl.innerHTML = "";

    modes[mode].forEach(operation => {
      const option = document.createElement("option");
      option.value = operation;
      option.textContent = operation;
      operationEl.appendChild(option);
    });
  };

  const runBooleanOperation = operation => {
    const A = window.LambdaCore.fromBooleanName(valueAEl.value);
    const B = window.LambdaCore.fromBooleanName(valueBEl.value);

    if (operation === "AND") {
      return window.LambdaCore.toBoolean(window.LambdaCore.AND(A)(B));
    }
    if (operation === "OR") {
      return window.LambdaCore.toBoolean(window.LambdaCore.OR(A)(B));
    }
    if (operation === "XOR") {
      return window.LambdaCore.toBoolean(window.LambdaCore.XOR(A)(B));
    }
    if (operation === "IF") {
      return window.LambdaCore.IF(A)("branch TRUE")("branch FALSE");
    }

    throw new Error("Operação booleana inválida.");
  };

  const runNumberOperation = operation => {
    const A = window.LambdaCore.fromNumber(valueAEl.value);
    const B = window.LambdaCore.fromNumber(valueBEl.value);

    if (operation === "SUCC") {
      return window.LambdaCore.toNumber(window.LambdaCore.SUCC(A));
    }
    if (operation === "ADD") {
      return window.LambdaCore.toNumber(window.LambdaCore.ADD(A)(B));
    }
    if (operation === "MUL") {
      return window.LambdaCore.toNumber(window.LambdaCore.MUL(A)(B));
    }

    throw new Error("Operação numérica inválida.");
  };

  const initializeForm = () => {
    renderOperationOptions(modeEl.value);
    setDefaultsByMode(modeEl.value);

    modeEl.addEventListener("change", () => {
      const mode = modeEl.value;
      renderOperationOptions(mode);
      setDefaultsByMode(mode);
      printResult(`Modo alterado para ${mode}.`);
    });

    formEl.addEventListener("submit", event => {
      event.preventDefault();

      try {
        const mode = modeEl.value;
        const operation = operationEl.value;
        const outcome = mode === "boolean"
          ? runBooleanOperation(operation)
          : runNumberOperation(operation);

        printResult(`${operation} => ${String(outcome)}`);
      } catch (error) {
        printResult(`Erro: ${error.message}`);
      }
    });
  };

  renderExamples();
  initializeForm();
})();
