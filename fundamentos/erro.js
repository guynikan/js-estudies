function tratarErroELancar(erro) {
  throw new Error("Deu ruim irmão");
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Cabô");
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);
