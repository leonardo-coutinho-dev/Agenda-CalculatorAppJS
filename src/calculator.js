import promptSync from "prompt-sync";

const prompt = promptSync();

console.log(
  "******************************** \n  CALCULADORA \n ******************************** \n"
);

console.log(`Menu: \n`);

console.log(`1. Soma`);
console.log(`2. Subtração`);
console.log(`3. Multiplicação`);
console.log(`4. Divisão`);
console.log(`5. Sair \n`);

let fim = false;
let option = 0;

while (!fim) {
  // input from the user:

  option = parseInt(prompt("Escolha uma opção: "));
  console.log("\n A opção escolhida foi: %s \n", option);

  // verification of the number received:

  if (option > 5 || option < 1) {
    console.log("Opção inválida, por favor, tente novamente! \n");
  }

  // switch para realizar as operações!

  switch (option) {
    case 1: {
      console.log("Você escolheu soma! \n");

      let parcela1 = parseInt(prompt("Digite a primeira parcela: "));
      let parcela2 = parseInt(prompt("Digite a segunda parcela: "));

      if (isNaN(parcela1) || isNaN(parcela2)) {
        while (isNaN(parcela1) || isNaN(parcela2)) {
          console.log("\n Por favor, entre dois números válidos! \n");

          parcela1 = parseInt(prompt("Digite a primeira parcela: "));
          parcela2 = parseInt(prompt("Digite a segunda parcela: "));
        }
      }

      let total = parcela1 + parcela2;

      console.log("\n A soma de %s com %s é %s \n", parcela1, parcela2, total);

      break;
    }
    case 2: {
      console.log("Você escolheu subtração! \n");

      let minuendo = parseInt(prompt("Digite o minuendo: "));
      let subtraendo = parseInt(prompt("Digite o subtraendo: "));

      if (isNaN(minuendo) || isNaN(subtraendo)) {
        while (isNaN(minuendo) || isNaN(subtraendo)) {
          console.log("\n Por favor, entre dois números válidos! \n");

          minuendo = parseInt(prompt("Digite o minuendo: "));
          subtraendo = parseInt(prompt("Digite o subtraendo: "));
        }
      }

      let resto = minuendo - subtraendo;

      console.log(
        "\n A subtração de %s com %s é %s \n",
        minuendo,
        subtraendo,
        resto
      );
      5;
      break;
    }
    case 3: {
      console.log("Você escolheu multiplicação! \n");

      let multiplicando = parseInt(prompt("Digite o multiplicando: "));
      let multiplicador = parseInt(prompt("Digite o multiplicador: "));

      if (isNaN(multiplicando) || isNaN(multiplicador)) {
        while (isNaN(multiplicando) || isNaN(multiplicador)) {
          console.log("\n Por favor, entre dois números válidos! \n");

          multiplicando = parseInt(prompt("Digite o multiplicando: "));
          multiplicador = parseInt(prompt("Digite o multiplicador: "));
        }
      }

      let produto = multiplicando * multiplicador;

      console.log(
        "\n A multiplicação de %s por %s é %s \n",
        multiplicando,
        multiplicador,
        produto
      );

      break;
    }
    case 4: {
      console.log("Você escolheu divisão! \n");

      let dividendo = parseInt(prompt("Digite o dividendo: "));
      let divisor = parseInt(prompt("Digite o divisor: "));

      if (isNaN(dividendo) || isNaN(divisor)) {
        while (isNaN(dividendo) || isNaN(divisor)) {
          console.log("\n Por favor, entre dois números válidos! \n");

          dividendo = parseInt(prompt("Digite o dividendo: "));
          divisor = parseInt(prompt("Digite o divisor: "));
        }
      }

      let quociente = dividendo / divisor;

      console.log(
        "\n A divisão de %s por %s é %s \n",
        dividendo,
        divisor,
        quociente
      );

      break;
    }
    case 5:
      console.log("Fim do programa! \n");
      fim = true;
      break;
  }
}
