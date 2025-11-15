// code here, goodluck!!
"use strict";

//Import prompt-sync untuk input user di terminal
const prompt = require("prompt-sync")({ sigint: true });

//========================
//1.Fungsi Input valdasi
//========================

function getValidNumberinput(promptMassage) {
  let value;
  while (true) {
    const input = prompt(promptMassage);
    Value = Number(input);

    // Cek apakah input valid (bukan NaN)
    if (!isNaN(value)) {
      return value;
    } else {
      console.log("❌ Input tidak valid! Harap masukkan angka yang benar.");
    }
  }
}

function getValidOperatorInput(promptMassage) {
  const validOperator = ["+", "-", "*", "/", "%", "**"];
  let operator;
  while (true) {
    operator = promt(promptMassage);
    if (validOpeartor.includes(operator)) {
      return operator;
    } else {
      console.log(
        "❌ Operator tidak valid gunakan salah satu dari: +, -, *, /, %, **"
      );
    }
  }
}

//==========================
//2. Fungsi Operasi Aritmetika
//==========================

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  a % b;
}

function power(a, b) {
  return a ** b;
}

//==========================
//3. Logika Utama Kalkulator
//==========================

while (true) {
  console.log("\n=======================");
  console.log("🧮 INTERACTIVE CALCULATOR");
  console.log("=========================");

  const num1 = getValidNumberinput("Masukkan angka pertama:");
  const operator = getValidOperatorInput(
    "Masukkan operator (+, -, *, /, %, **): "
  );
  const num2 = getValidNumberinput("Masukkan angka kedua: ");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = substract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;

    case "%":
      result = modulo(num1, num2);
      break;

    case "**":
      result = power(num1, num2);
      break;

    default:
      result = undefined;
  }
  // ===========================
  // 4. Analisis Data & Output
  // ===========================

  console.log("\n 📊 Hasil perhitungan:");
  console.log(`➡️ ${num1} ${operator} ${num2} = ${result}`);

  //Analisis tipe data hasil
  const resultType = typeof result;

  if (resultType === "number") {
    console.log(`📘 Tipe data hasil: ${resultType}`);

    //Positif, negatif, atau nol
    if (result > 0) {
      console.log("🔹 Angka positif");
    } else if (result < 0) {
      console.log("🔹 Angka negatif");
    } else {
      console.log("🔹 Angka nol");
    }

    //Bilangan bulat atau desimal
    if (Number.isInteger(result)) {
      console.log("🔸 Bilangan bulat");
    } else {
      console.log("🔸 Bilangan desimal");
    }

    //Genap atau ganjil
    const parity = result % 2 === 0 ? "Genap" : "Ganjil";
    console.log(`🔹 Angka ${parity}`);

    // Contoh penggunaan && dan ||
    if (result > 0 && result % 2 === 0) {
      console.log("✅ Angka ini positif dan genap");
    } else if (result < 0 || result === 0) {
      console.log("ℹ️ Angka ini negatif atau nol.");
    }
  } else if (resultType === "string") {
    console.log(`⚠️ Pesan error: ${result}`);
  } else {
    console.log(
      result ?? "❓ Result Is undefined or null, something went wrong!"
    );
  }

  // ===========================
  // 5. Mekanisme Keluar
  // ===========================
  const again = promt(
    "\nApakah ingin menghitung lagi? (yes/no): "
  ).toLowercase();
  if (again === "no") {
    console.log("\n👋 Terimakasih telah menggunakan kalkulator ini!");
    break;
  }
}
