'use strict';

function calcPiMontecarlo (nIter) {
  let totalIn = 0;
  for (let i = 0; i < nIter; i++) {
    let x = Math.random();
    let y = Math.random();
    if (x*x + y*y <= 1) totalIn++;
  }
  return (4*totalIn/nIter);
}

console.log(calcPiMontecarlo(1000000000));
