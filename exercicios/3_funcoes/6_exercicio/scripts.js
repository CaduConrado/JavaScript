function detectaTipo(dado) {
  switch (typeof dado) {
    case "number":
      console.log("O dado é do tipo Number");
      break;
    case "boolean":
      console.log("O dado é do tipo Boolean");
      break;
    case "string":
      console.log("O dado é do tipo String");
      break;
    default:
      console.log("O dado não reconhecido pelo JS.");
      break;
  }
}

detectaTipo("Hello World!");
detectaTipo(23);
detectaTipo(true);
detectaTipo();
