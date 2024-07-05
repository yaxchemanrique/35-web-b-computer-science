function constant(n) {
  console.log(n);
  console.log(n + n);
}

//constant(1); // 2 procesos
//constant(5); // 2 procesos
//constant(500_000); // 2 procesos

// *Big O Notation : O(1) -> Constante (numero constante de procesos)
//* Drop Constants -> Eliminar las constantes
// O(5*1) -> O(1)
// O(5000000*1) -> O(1)
// O(5*n) -> O(n)
// O(50000*n) -> O(n)

function lineal(n) {
  for (let i = 0; i < n; i++) {
    console.log(n)
  }
}

// lineal(5) // 5
// lineal(10) // 10
// lineal(20) // 20

// *Big O Notation : O(n) -> Lineal

function lineal2(n) {
  for (let i = 0; i < n; i++) {
    console.log(n)
  }

  console.log('hola');
  console.log('mundo');
}

// lineal2(5) // 7
// lineal2(10) // 12
// lineal2(20) // 22

// *Big O Notation : O(n + 2) -> O(n) -> lineal
//* Drop non dominants -> Eliminamos los No Dominantes

function quadratic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

quadratic(3) // 9 procesos
quadratic(9) // 81 procesos

// *Big O Notation : O(n^2) -> Cuadrático

function cubic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }

  console.log('algo extra');
}

cubic(3) //27 procesos
cubic(9) //729 procesos
// *Big O Notation : O(n^3 + 1) -> O(n^3) -> cubico

function notation(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('algo extra');
}             

notation(3)

// *Big O Notation : O(n^3 +n^3 + n + 1) -> O(n^3) -> cubico
// *                 O(2 n^3 + n + 1)

//* Eliminamos constantes
// *                 O(n^3 + n + 1)

//* Eliminamos no dominantes
// *                 O(n^3) -> cubico
