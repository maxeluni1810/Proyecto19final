        let display = document.getElementById("display");
        let currentInput = "";
        let operator = "";

        function appendNumber(number) {
            currentInput += number;
            display.textContent = currentInput;
        }

        function appendOperator(op) {
            operator = op;
            currentInput += operator;
            display.textContent = currentInput;
        }

        function calculate() {
            try {
                let result = eval(currentInput);
                display.textContent = result;
                currentInput = result.toString();
            } catch (error) {
                display.textContent = "Error";
            }
        }

        function clearDisplay() {
            currentInput = "";
            operator = "";
            display.textContent = "";
        }

        function backspace() {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        }
        const elements1 = document.querySelectorAll('.calculator, body');
        const elements2 = document.querySelectorAll('.display');
        const elements3 = document.querySelectorAll('.buttons');
        const elements4 = document.querySelectorAll('button');
        const elements5 = document.querySelectorAll('button.clear, .del');
        const elements6 = document.querySelectorAll('.igual');
        const textElements = document.querySelectorAll('button, .display');
        const textElements2 = document.querySelectorAll('button.clear, .del');
        
        let currentColor1 = 0;
        let currentColor2 = 0;
        let currentColor3 = 0;
        let currentColor4 = 0;
        let currentColor5 = 0;
        let currentColor6 = 0;
        let currentTextColor = 0;
        let currentTextColor2 = 0;
        
        const colors1 = ['#423e57', '#a7a7a7', '#240124'];
        const colors2 = ['rgb(255, 255, 255)', '#fff', '#550355'];
        const colors3 = ['rgb(46, 46, 65)', '#b4b3b3', '#3d033d'];
        const colors4 = ['#ffffff', '#ffffff', '#580458'];
        const colors5 = ['#423e57', '#0c5848', '#771556'];
        const colors6 = ['#e04b4b', '#c7683d', '#44999c'];
        const textColors = ['rgb(71, 71, 99)', '#0c0b0c', '#eee34d'];
        const textColors2 = ['#fff', '', ''];
        
        const toggleButtons = document.querySelectorAll('input[type="radio"][name="switch"]');
        
        toggleButtons.forEach((toggleButton, index) => {
          toggleButton.addEventListener('change', () => {
            currentColor1 = index;
            currentColor2 = index;
            currentColor3 = index;
            currentColor4 = index;
            currentColor5 = index;
            currentColor6 = index;
            currentTextColor = index;
            currentTextColor2 = index;
        
            elements1.forEach(element => {
              element.style.background = colors1[currentColor1];
            });
            elements2.forEach(element => {
              element.style.background = colors2[currentColor2];
            });
            elements3.forEach(element => {
              element.style.background = colors3[currentColor3];
            });
            elements4.forEach(element => {
              element.style.background = colors4[currentColor4];
            });
            elements5.forEach(element => {
              element.style.background = colors5[currentColor5];
            });
            elements6.forEach(element => {
              element.style.background = colors6[currentColor6];
            });
            textElements.forEach(element => {
              element.style.color = textColors[currentTextColor];
            });
            textElements2.forEach(element => {
              element.style.color = textColors2[currentTextColor2];
            });
          });
        });
        
        
        
