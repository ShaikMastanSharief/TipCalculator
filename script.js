const billAmount = document.getElementById("billAmount");
    const tipPercentage = document.getElementById("tipPercentage");
    const peopleCount = document.getElementById("peopleCount");
    const calculateButton = document.getElementById("calculateButton");
    const totalAmount = document.getElementById("totalAmount");
    const tipAmount = document.getElementById("tipAmount");
    const perPerson = document.getElementById("perPerson");
    const errorText = document.getElementById("error");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Theme toggle
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light");
      themeToggle.textContent = body.classList.contains("light") ? "🌙 Theme" : "☀️ Theme";
    });

    // Real-time calculation
    [billAmount, tipPercentage, peopleCount].forEach(input =>
      input.addEventListener("input", calculate)
    );

    calculateButton.addEventListener("click", calculate);

    function calculate() {
      const bill = parseFloat(billAmount.value);
      const tip = parseFloat(tipPercentage.value);
      const people = parseInt(peopleCount.value) || 1;

      if (isNaN(bill) || bill <= 0 || isNaN(tip) || tip < 0 || people <= 0) {
        errorText.textContent = "Please enter valid numbers.";
        tipAmount.textContent = totalAmount.textContent = perPerson.textContent = "";
        return;
      }

      errorText.textContent = "";

      const tipVal = bill * (tip / 100);
      const total = bill + tipVal;
      const split = total / people;

      tipAmount.textContent = `Tip: $${tipVal.toFixed(2)}`;
      totalAmount.textContent = `Total: $${total.toFixed(2)}`;
      perPerson.textContent = people > 1 ? `Each Pays: $${split.toFixed(2)}` : "";
    }