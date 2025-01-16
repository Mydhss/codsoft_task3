let resultDisplayed = false;

    function addResult(value) {
      const resultScreen = document.getElementById("result-screen");

      if (resultDisplayed === true) {
        resultScreen.value = "";
        resultDisplayed = false;
      }

      resultScreen.value += value;
    }

    function calculateResult() {
      const resultScreen = document.getElementById("result-screen");
      const expression = resultScreen.value;

      try {
        const result = new Function("return " + expression)();
        resultScreen.value = result;
        resultDisplayed = true;
      } catch (error) {
        resultScreen.value = "Error";
        resultDisplayed = true;
      }
    }

    function clearResult() {
      const resultScreen = document.getElementById("result-screen");
      resultScreen.value = "";
      resultDisplayed = false;
    }

    function square() {
      const resultScreen = document.getElementById("result-screen");
      const value = resultScreen.value;

      try {
        const result = Math.pow(Number(value), 2);
        resultScreen.value = result;
        resultDisplayed = true;
      } catch (error) {
        resultScreen.value = "Error";
        resultDisplayed = true;
      }
    }

    function squareRoot() {
      const resultScreen = document.getElementById("result-screen");
      const value = resultScreen.value;

      try {
        if (value < 0) {
          throw new Error("Invalid input");
        }
        const result = Math.sqrt(Number(value));
        resultScreen.value = result;
        resultDisplayed = true;
      } catch (error) {
        resultScreen.value = "Error";
        resultDisplayed = true;
      }
    }