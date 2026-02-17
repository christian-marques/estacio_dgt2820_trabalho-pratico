// a) swap: troca os valores de duas posições de um vetor
const swap = (vetor, i, j) => {
  const temp = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = temp;
};

// b) shuffle: embaralha os elementos de um vetor fazendo "qtdTrocas" trocas aleatórias
const shuffle = (vetor, qtdTrocas) => {
  const n = vetor.length;

  for (let k = 0; k < qtdTrocas; k++) {
    const i = Math.floor(Math.random() * n);
    const j = Math.floor(Math.random() * n);
    swap(vetor, i, j);
  }

  return vetor;
};

// c) bubble_sort: ordena um vetor de inteiros com Bubble Sort
const bubble_sort = (vetor) => {
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    let trocou = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
        trocou = true;
      }
    }

    if (!trocou) break;
  }

  return vetor;
};

// d) selection_sort: ordena um vetor de inteiros com Selection Sort
const selection_sort = (vetor) => {
  const n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    let menorIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[menorIdx]) {
        menorIdx = j;
      }
    }

    if (menorIdx !== i) {
      swap(vetor, i, menorIdx);
    }
  }

  return vetor;
};

// e) quick_sort: Quick Sort recursivo
const quick_sort = (vetor, posInicial, posFinal) => {
  if (posInicial >= posFinal) return vetor;

  const meio = Math.floor((posInicial + posFinal) / 2);
  const pivo = vetor[meio];

  const index = partitionamento(vetor, posInicial, posFinal, pivo);

  if (posInicial < index - 1) quick_sort(vetor, posInicial, index - 1);

  if (index < posFinal) quick_sort(vetor, index, posFinal);

  return vetor;
};

// f) partitionamento: apoio ao quick_sort
const partitionamento = (vetor, posInicial, posFinal, valorPivo) => {
  let i = posInicial;
  let j = posFinal;

  while (i <= j) {
    while (vetor[i] < valorPivo) i++;
    while (vetor[j] > valorPivo) j--;

    if (i <= j) {
      swap(vetor, i, j);
      i++;
      j--;
    }
  }

  return i;
};

window.swap = swap;
window.shuffle = shuffle;
window.bubble_sort = bubble_sort;
window.selection_sort = selection_sort;
window.quick_sort = quick_sort;
window.partitionamento = partitionamento;


/* ==========================
   TESTES
   ========================== */

// let v1 = [5, 1, 9, 2, 8, 3];
// console.log("Original:", v1);

// swap(v1, 0, 5);
// console.log("Após swap(0,5):", v1);

// shuffle(v1, 10);
// console.log("Após shuffle(10):", v1);

// let v2 = [7, 4, 6, 1, 9, 2];
// console.log("\nBubble sort:", bubble_sort([...v2]));

// let v3 = [7, 4, 6, 1, 9, 2];
// console.log("Selection sort:", selection_sort([...v3]));

// let v4 = [7, 4, 6, 1, 9, 2];
// console.log("Quick sort:", quick_sort([...v4], 0, v4.length - 1));

// let v5 = [7, 4, 6, 1, 9, 2];
// console.log("Quick sort:", partitionamento([...v5], 0, v5.length - 1, v5[Math.floor(v5.length / 2)]));