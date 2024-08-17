import promptSync from "prompt-sync";

import { Contato, Agenda } from "./Agenda.js";

const prompt = promptSync();

let fim = false;

function MostrarMenu() {
  console.log("\x1b[34m%s\x1b[0m", "-- Menu -- \n");
  console.log("\x1b[34m%s\x1b[0m", "1. Show agenda.");
  console.log("\x1b[34m%s\x1b[0m", "2. Search contact.");
  console.log("\x1b[34m%s\x1b[0m", "3. Create new contact.");
  console.log("\x1b[34m%s\x1b[0m", "4. Delete contact.");
  console.log("\x1b[34m%s\x1b[0m", "5. Delete all contacts.");
  console.log("\x1b[34m%s\x1b[0m", "6. Save created contacts to file.");
  console.log("\x1b[34m%s\x1b[0m", "7. Clear screen.");
  console.log("\x1b[34m%s\x1b[0m", "8. Exit. \n");
}

function MostrarMenu2() {
  console.log("\x1b[34m%s\x1b[0m", "-- Menu -- \n");
  console.log("\x1b[34m%s\x1b[0m", "1. By name");
  console.log("\x1b[34m%s\x1b[0m", "2. By phone");
  console.log("\x1b[34m%s\x1b[0m", "3. Go back \n");
}

function ObterOpcao(texto, indexoption) {
  let lido = false;
  let valorLido = 0;
  while (!lido) {
    if (indexoption === 1) {
      try {
        valorLido = parseInt(prompt(texto));
        if (isNaN(valorLido)) {
          throw new Error("Error: You need to enter a valid number!");
        }
        if (valorLido > 3 || valorLido < 1) {
          throw new Error("Error: You need to enter a number between 1 and 3!");
        }
        lido = true;
      } catch (ex) {
        console.log("\x1b[31m%s\x1b[0m", ex.message);
      }
    } else if (indexoption === 2) {
      try {
        valorLido = parseInt(prompt(texto));
        if (isNaN(valorLido)) {
          throw new Error("Error: You need to enter a valid number!");
        }
        if (valorLido > 8 || valorLido < 1) {
          throw new Error("Error: You need to enter a number between 1 and 8!");
        }
        lido = true;
      } catch (ex) {
        console.log("\x1b[31m%s\x1b[0m", ex.message);
      }
    }
  }
  return valorLido;
}

function CriarContato() {
  let contato = new Contato();
  contato.nome = prompt("Name: ");
  contato.sobrenome = prompt("Surname: ");
  contato.dataNascimento = prompt("Date of birth: ");
  contato.movel = prompt("Mobile phone: ");
  contato.fixo = prompt("Landline phone: ");
  contato.trabalho = prompt("Work phone: ");
  contato.rua = prompt("Street: ");
  contato.numero = prompt("Number: ");
  contato.cidade = prompt("City: ");
  contato.codigoPostal = prompt("Postal code: ");
  contato.email = prompt("Email: ");
  console.log(
    "\x1b[32m%s\x1b[0m",
    "\nThe contact was created successfully! \n"
  );
  AgendaContatos.CriarNovoContato(contato);
}

function BuscarContato() {
  MostrarMenu2();

  let fimBusca = false;
  let nome, telefone, encontradosNome, encontradosTelefone;

  while (!fimBusca) {
    let opcao = ObterOpcao("Select an option: ", 1);
    switch (opcao) {
      case 1:
        nome = prompt("Name: ");
        console.log("\x1b[32m%s\x1b[0m", "\nThe chosen name was:", nome, "\n");
        encontradosNome = AgendaContatos.BuscarContatoNome(nome);
        if (encontradosNome.length > 0) {
          console.log(
            "\x1b[32m%s\x1b[0m",
            "### Contacts found:",
            encontradosNome.length
          );
          for (let contato of encontradosNome) {
            contato.MostrarContato();
          }
          console.log("\n### ### \n");
        } else {
          console.log(
            "\x1b[31m%s\x1b[0m",
            "No contacts were found, please try again with a different name!"
          );
        }
        break;
      case 2:
        telefone = prompt("Phone: ");
        console.log(
          "\x1b[32m%s\x1b[0m",
          "\nThe chosen phone number was:",
          telefone,
          "\n"
        );
        encontradosTelefone = AgendaContatos.BuscarContatoTelefone(telefone);
        if (encontradosTelefone.length > 0) {
          console.log(
            "\x1b[32m%s\x1b[0m",
            "### Contacts found:",
            encontradosTelefone.length
          );
          for (let contato of encontradosTelefone) {
            contato.MostrarContato();
          }
          console.log("\n### ### \n");
        } else {
          console.log(
            "\x1b[31m%s\x1b[0m",
            "No contacts were found, please try again with a different phone number!"
          );
        }
        break;
      case 3:
        console.log("\x1b[31m%s\x1b[0m", "\nBack to main menu! \n");
        fimBusca = true;
        break;
    }
  }
}

function ExcluirContato() {
  MostrarMenu2();

  let fimBusca = false;
  let nome, telefone;

  while (!fimBusca) {
    let opcao = ObterOpcao("Select an option: ", 1);
    switch (opcao) {
      case 1:
        nome = prompt("Name: ");
        console.log("\x1b[32m%s\x1b[0m", "\nThe chosen name was:", nome, "\n");
        AgendaContatos.ExcluirContatoNome(nome);
        break;
      case 2:
        telefone = prompt("Phone: ");
        console.log(
          "\x1b[32m%s\x1b[0m",
          "\nThe chosen phone number was:",
          telefone,
          "\n"
        );
        AgendaContatos.ExcluirContatoTelefone(telefone);
        break;
      case 3:
        console.log("\x1b[31m%s\x1b[0m", "Back to main menu!");
        fimBusca = true;
        break;
    }
  }
}

function clearConsole() {
  console.clear();
  console.log("\x1b[32m%s\x1b[0m", "Console cleared!");
}

let AgendaContatos = new Agenda("Agenda.txt");

AgendaContatos.CarregarContatos();

while (!fim) {
  MostrarMenu();
  switch (ObterOpcao("Choose: ", 2)) {
    case 1:
      console.log("\x1b[32m%s\x1b[0m", "\n1. Show agenda \n");
      AgendaContatos.MostrarAgenda();
      break;
    case 2:
      console.log("\x1b[32m%s\x1b[0m", "\n2. Search contacts \n");
      BuscarContato();
      break;
    case 3:
      console.log("\x1b[32m%s\x1b[0m", "\n3. Create contacts \n");
      CriarContato();
      break;
    case 4:
      console.log("\x1b[32m%s\x1b[0m", "\n4. Delete contacts \n");
      ExcluirContato();
      break;
    case 5:
      console.log("\x1b[32m%s\x1b[0m", "\n5. Delete all contacts \n");
      AgendaContatos.ExcluirTodosContatos();
      break;
    case 6:
      console.log("\x1b[32m%s\x1b[0m", "\n6. Save created contacts to file \n");
      AgendaContatos.GuardarContato();
      console.log("\x1b[32m%s\x1b[0m", "Step completed!");
      break;
    case 7:
      clearConsole();
      break;
    case 8:
      fim = true;
      console.log("\x1b[31m%s\x1b[0m", "\nProgram terminated!");
      break;
  }
}
