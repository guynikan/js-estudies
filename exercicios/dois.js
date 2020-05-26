// tipos de triangulo

function qualOTriangulo(x, y, z) {
  if (x == y && x == z) {
    return "Equilátero";
  } else if (x == y || x == z || z == y) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

console.log(qualOTriangulo(10, 20, 30));
console.log(qualOTriangulo(10, 20, 10));
console.log(qualOTriangulo(10, 10, 10));
