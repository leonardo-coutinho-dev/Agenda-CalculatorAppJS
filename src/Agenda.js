import * as fs from "fs";

class Pessoa {
  constructor({
    nome = "default",
    sobrenome = "default",
    dataNascimento = "default",
  } = {}) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._dataNascimento = dataNascimento;
  }
  get nome() {
    return this._nome;
  }
  get sobrenome() {
    return this._sobrenome;
  }
  get dataNascimento() {
    return this._dataNascimento;
  }
  set nome(newnome) {
    this._nome = newnome;
  }
  set sobrenome(newsobrenome) {
    this._sobrenome = newsobrenome;
  }
  set dataNascimento(newdataNascimento) {
    this._dataNascimento = newdataNascimento;
  }
}

class Endereco {
  constructor({
    rua = "default",
    numero = "default",
    cidade = "default",
    codigoPostal = "default",
  } = {}) {
    this._rua = rua;
    this._numero = numero;
    this._cidade = cidade;
    this._codigoPostal = codigoPostal;
  }
  get rua() {
    return this._rua;
  }
  get numero() {
    return this._numero;
  }
  get cidade() {
    return this._cidade;
  }
  get codigoPostal() {
    return this._codigoPostal;
  }
  set rua(newrua) {
    this._rua = newrua;
  }
  set numero(newnumero) {
    this._numero = newnumero;
  }
  set cidade(newcidade) {
    this._cidade = newcidade;
  }
  set codigoPostal(newcodigopostal) {
    this._codigoPostal = newcodigopostal;
  }
}

class Telefone {
  constructor({
    movel = "default",
    fixo = "default",
    trabalho = "default",
  } = {}) {
    this._movel = movel;
    this._fixo = fixo;
    this._trabalho = trabalho;
  }
  get movel() {
    return this._movel;
  }
  get fixo() {
    return this._fixo;
  }
  get trabalho() {
    return this._trabalho;
  }
  set movel(newmovel) {
    this._movel = newmovel;
  }
  set fixo(newfixo) {
    this._fixo = newfixo;
  }
  set trabalho(newtrabalho) {
    this._trabalho = newtrabalho;
  }
}

class Contato {
  constructor({
    pessoa = {},
    endereco = {},
    telefone = {},
    email = "default",
  } = {}) {
    this._Pessoa = new Pessoa(pessoa);
    this._Endereco = new Endereco(endereco);
    this._Telefone = new Telefone(telefone);
    this._email = email;
  }

  // email

  get email() {
    return this._email;
  }
  set email(newemail) {
    this._email = newemail;
  }

  // pessoa

  get nome() {
    return this._Pessoa._nome;
  }
  get sobrenome() {
    return this._Pessoa._sobrenome;
  }
  get dataNascimento() {
    return this._Pessoa._dataNascimento;
  }
  set nome(newnome) {
    this._Pessoa._nome = newnome;
  }
  set sobrenome(newsobrenome) {
    this._Pessoa._sobrenome = newsobrenome;
  }
  set dataNascimento(newdataNascimento) {
    this._Pessoa._dataNascimento = newdataNascimento;
  }

  // telefone

  get movel() {
    return this._Telefone._movel;
  }
  get fixo() {
    return this._Telefone._fixo;
  }
  get trabalho() {
    return this._Telefone._trabalho;
  }
  set movel(newmovel) {
    this._Telefone._movel = newmovel;
  }
  set fixo(newfixo) {
    this._Telefone._fixo = newfixo;
  }
  set trabalho(newtrabalho) {
    this._Telefone._trabalho = newtrabalho;
  }

  // endereco

  get rua() {
    return this._Endereco._rua;
  }
  get numero() {
    return this._Endereco._numero;
  }
  get cidade() {
    return this._Endereco._cidade;
  }
  get codigoPostal() {
    return this._Endereco._codigoPostal;
  }
  set rua(newrua) {
    this._Endereco._rua = newrua;
  }
  set numero(newnumero) {
    this._Endereco._numero = newnumero;
  }
  set cidade(newcidade) {
    this._Endereco._cidade = newcidade;
  }
  set codigoPostal(newcodigopostal) {
    this._Endereco._codigoPostal = newcodigopostal;
  }

  // Show contact

  MostrarContato() {
    console.log("\n", "____Contact____", "\n");

    console.log("Name: ", this._Pessoa._nome);
    console.log("Surname: ", this._Pessoa._sobrenome);
    console.log("Date of Birth: ", this._Pessoa._dataNascimento);

    console.log("Mobile phone: ", this._Telefone._movel);
    console.log("Landline phone: ", this._Telefone._fixo);
    console.log("Work phone: ", this._Telefone._trabalho);

    console.log("Street: ", this._Endereco._rua);
    console.log("Number: ", this._Endereco._numero);
    console.log("City: ", this._Endereco._cidade);
    console.log("Postal code: ", this._Endereco._codigoPostal);

    console.log("Email:", this._email);
  }
}

class Agenda {
  constructor(path) {
    this._Path = path;
    this._ListaContatos = new Array();
  }

  /* Checks the existence of the file Agenda.txt, and if confirmed, reads the file and returns the data within the Array _ListaContatos (push) */

  CarregarContatos() {
    try {
      fs.statSync(this._Path); // check if the file exists

      this._ListaContatos = new Array();
      const dados = fs.readFileSync(this._Path, "utf8");

      let strings = dados.split("\n");

      if (strings.length > 0) {
        for (let str of strings) {
          let data = str.split("#");
          if (data.length == 11) {
            let contato = new Contato();
            contato.nome = data[0];
            contato.sobrenome = data[1];
            contato.dataNascimento = data[2];
            contato.movel = data[3];
            contato.fixo = data[4];
            contato.trabalho = data[5];
            contato.rua = data[6];
            contato.numero = data[7];
            contato.cidade = data[8];
            contato.codigoPostal = data[9];
            contato.email = data[10];
            this._ListaContatos.push(contato);
          }
        }
      }
      console.log(
        "\nA total of %s contacts were loaded.\n",
        this._ListaContatos.length
      );
      return true;
    } catch (ex) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        "\nThe file Agenda.txt does not exist. Create your first contact and select the option '6. Save created contacts to file.' to create it! \n"
      );
      console.log("\x1b[31m%s\x1b[0m", ex.message, "\n");
      return false;
    }
  }

  CriarNovoContato(contato) {
    this._ListaContatos.push(contato);
  }

  /* Save the name of the contact(s) in the file Agenda.txt, with their information separated by "#" and divided by a line break "\n" */

  GuardarContato() {
    try {
      let string = "";

      if (this._ListaContatos.length === 0) {
        fs.writeFileSync(this._Path, "");
        return true;
      } else {
        for (let contato of this._ListaContatos) {
          string += contato.nome + "#";
          string += contato.sobrenome + "#";
          string += contato.dataNascimento + "#";
          string += contato.movel + "#";
          string += contato.fixo + "#";
          string += contato.trabalho + "#";
          string += contato.rua + "#";
          string += contato.numero + "#";
          string += contato.cidade + "#";
          string += contato.codigoPostal + "#";
          string += contato.email + "\n";
        }
        fs.writeFileSync(this._Path, string);
        console.log("\x1b[32m%s\x1b[0m", "Contacts saved successfully!");
        return true;
      }
    } catch (ex) {
      console.log(ex.message);
    }
    return false;
  }

  MostrarAgenda() {
    console.log("### AGENDA ###\n");
    console.log("Number of contacts: %s", this._ListaContatos.length);
    for (let i of this._ListaContatos) {
      i.MostrarContato();
    }
    console.log("\n### ### \n");
  }

  BuscarContatoNome(nome) {
    let listaEncontrados = new Array();
    for (let contato of this._ListaContatos) {
      if (contato.nome === nome) {
        listaEncontrados.push(contato);
      }
    }
    return listaEncontrados;
  }

  BuscarContatoTelefone(telefone) {
    let listaEncontrados = new Array();
    for (let contato of this._ListaContatos) {
      if (
        contato.movel === telefone ||
        contato.fixo === telefone ||
        contato.trabalho === telefone
      ) {
        listaEncontrados.push(contato);
      }
    }
    return listaEncontrados;
  }

  ExcluirContatoNome(nome) {
    let listaFinal = new Array();
    listaFinal = this._ListaContatos.filter((contato) => contato.nome !== nome);
    console.log(
      "%s contact(s) have been deleted",
      this._ListaContatos.length - listaFinal.length
    );
    this._ListaContatos = listaFinal;
    this.GuardarContato();
  }

  ExcluirContatoTelefone(telefone) {
    let listaFinal = new Array();
    listaFinal = this._ListaContatos.filter(
      (contato) =>
        contato.movel !== telefone &&
        contato.fixo !== telefone &&
        contato.trabalho !== telefone
    );
    console.log(
      "%s contact(s) have been deleted",
      this._ListaContatos.length - listaFinal.length
    );
    this._ListaContatos = listaFinal;
    this.GuardarContato();
  }

  // implement:

  ExcluirTodosContatos() {
    this._ListaContatos = []; // Clear all contacts
    fs.writeFileSync(this._Path, ""); // Write an empty string to clear the file
    console.log("All contacts have been deleted.");
  }
}

export { Pessoa, Telefone, Endereco, Contato, Agenda };
