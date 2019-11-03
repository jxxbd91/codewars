"use strict";
let test = '...CC...X...[CCC]CCC[CCCXCCCF]CCCC[CFC]FCC';
let hungryFoxes = function (farm) {
    return farm.replace(/(?<=F[C\.]*(\[[CFX.]*\][C\.]*)*)C/g, '.')
        .replace(/C(?=[C\.]*(\[[CFX.]*\][C\.]*)*F)/g, '.')
        .replace(/(?<=X[F\.]*(\[[CFX.]*\][F\.]*)*)F/g, '.')
        .replace(/F(?=[F\.]*(\[[CFX.]*\][F\.]*)*X)/g, '.');
};
hungryFoxes(test);
