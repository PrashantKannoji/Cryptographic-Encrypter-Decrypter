
const z = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let count;
let decr = document.querySelector('#decrypt');
let encr = document.querySelector('#encrypt');

//encryption
encr.addEventListener('click', () => {
    count = 0;
    let pt = document.getElementById('pt').value;
    let key = document.getElementById('key').value;
    let cyp = document.querySelector('#cryptotext');
    pt = pt.toUpperCase();
    let arr = Array.from(pt);
    let v = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ' || arr[i] === '!' || arr[i] === '@' || arr[i] === '#' || arr[i] === '%' || arr[i] === '^' || arr[i] === '&' || arr[i] === '(' || arr[i] === ')' || arr[i] === ',' || arr[i] === '+' || arr[i] === '/' || arr[i] === '-' || arr[i] === '*' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' || arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9' || arr[i] === '0') {
            v[i] = arr[i];
            continue;
        }

        let ct = z.indexOf(arr[i]);
        let total = (parseInt(ct) + parseInt(key)) % 26;

        v[i] = z[total];
    }
    let ct = v.join('');
    cyp.value = ct;
    if (count === 0) {
        decr.disabled = false;
    }
})

//decryption
decr.addEventListener('click', () => {
    count++;
    let pt2 = document.getElementById('cryptotext').value;
    let key2 = document.getElementById('key').value;
    let cyp2 = document.querySelector('#cryptotext');
    pt2 = pt2.toUpperCase();
    let arr2 = Array.from(pt2);
    let v2 = [];

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === ' ' || arr2[i] === '!' || arr2[i] === '@' || arr2[i] === '#' || arr2[i] === '%' || arr2[i] === '^' || arr2[i] === '&' || arr2[i] === '(' || arr2[i] === ')' || arr2[i] === ',' || arr2[i] === '+' || arr2[i] === '/' || arr2[i] === '-' || arr2[i] === '*' || arr2[i] === '1' || arr2[i] === '2' || arr2[i] === '3' || arr2[i] === '4' || arr2[i] === '5' || arr2[i] === '6' || arr2[i] === '7' || arr2[i] === '8' || arr2[i] === '9' || arr2[i] === '0') {
            v2[i] = arr2[i];
            continue;
        }
        let ct2 = z.indexOf(arr2[i]);
        let total2 = (parseInt(ct2) - parseInt(key2));
        if (total2 < 0) {
            total2 = total2 + 26;
        }
        let plaint = total2 % 26;

        v2[i] = z[plaint];
    }
    let ct2 = v2.join('');
    cyp2.value = ct2;

    if (count === 1) {
        decr.disabled = true;
    }
})