const a = 1;
const b = -3;
const c = 2;

let delta = (b * b) - (4 * a * c);

let resultado
if (delta < 0) {
    resultado = ("A equação não possui raízes reais.");
} else if (delta === 0) {
    const x = -b / (2 * a);
    resultado = (`A equação possui uma raiz real: x = ${x}`);
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado = (`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
}
console.log(resultado);
