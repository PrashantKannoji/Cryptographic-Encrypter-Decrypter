
const z = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//encryption

let count;
let encr = document.querySelector("#encrypt");
let decr = document.querySelector("#decrypt");

encr.addEventListener('click', () => {
  count = 0;

  let pt = document.getElementById('pt').value;
  let key = document.getElementById('key').value;
  let cyp = document.querySelector('#cryptotext');
  pt = pt.toUpperCase();
  key = key.toUpperCase();
  let arr = Array.from(pt);
  let ke = '';
  let m = 0;
  for (let i = 0; i < pt.length; i++) {

      if (m === key.length)
          m = 0;
      if (arr[i] === ' ' || arr[i] === '!' || arr[i] === '@' || arr[i] === '#' || arr[i] === '%' || arr[i] === '^' || arr[i] === '&' || arr[i] === '(' || arr[i] === ')' || arr[i] === ',' || arr[i] === '+' || arr[i] === '/' || arr[i] === '-' || arr[i] === '*' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' || arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9' || arr[i] === '0') {
          ke = ke + arr[i];
      }
      else {

          ke = ke + key.charAt(m);
          m++;
      }
  }

  let v = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ' || arr[i] === '!' || arr[i] === '@' || arr[i] === '#' || arr[i] === '%' || arr[i] === '^' || arr[i] === '&' || arr[i] === '(' || arr[i] === ')' || arr[i] === ',' || arr[i] === '+' || arr[i] === '/' || arr[i] === '-' || arr[i] === '*' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' || arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9' || arr[i] === '0') {
          v[i] = arr[i];
          continue;
      }

      let ch = ke.charAt(i);

      //ptc and kc = plaintextchar and keychar
      let ptc = z.indexOf(arr[i]);
      let kc = z.indexOf(ch);
      let total = (parseInt(ptc) + parseInt(kc)) % 26;
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
  key2 = key2.toUpperCase();
  let arr2 = Array.from(pt2);
  let ke2 = '';
  let m2 = 0;
  for (let i = 0; i < pt2.length; i++) {

      if (m2 === key2.length)
          m2 = 0;
      if (arr2[i] === ' ' || arr2[i] === '!' || arr2[i] === '@' || arr2[i] === '#' || arr2[i] === '%' || arr2[i] === '^' || arr2[i] === '&' || arr2[i] === '(' || arr2[i] === ')' || arr2[i] === ',' || arr2[i] === '+' || arr2[i] === '/' || arr2[i] === '-' || arr2[i] === '*' || arr2[i] === '1' || arr2[i] === '2' || arr2[i] === '3' || arr2[i] === '4' || arr2[i] === '5' || arr2[i] === '6' || arr2[i] === '7' || arr2[i] === '8' || arr2[i] === '9' || arr2[i] === '0') {
          ke2 = ke2 + arr2[i];
      }
      else {

          ke2 = ke2 + key2.charAt(m2);
          m2++;
      }
  }
  let v2 = [];

  for (let i = 0; i < arr2.length; i++) {


      if (arr2[i] === ' ' || arr2[i] === '!' || arr2[i] === '@' || arr2[i] === '#' || arr2[i] === '%' || arr2[i] === '^' || arr2[i] === '&' || arr2[i] === '(' || arr2[i] === ')' || arr2[i] === ',' || arr2[i] === '+' || arr2[i] === '/' || arr2[i] === '-' || arr2[i] === '*' || arr2[i] === '1' || arr2[i] === '2' || arr2[i] === '3' || arr2[i] === '4' || arr2[i] === '5' || arr2[i] === '6' || arr2[i] === '7' || arr2[i] === '8' || arr2[i] === '9' || arr2[i] === '0') {
          v2[i] = arr2[i];
          continue;
      }
      let ch2 = ke2.charAt(i);

      //ptc2 and kc2 = plaintextchar and keychar
      let ptc2 = z.indexOf(arr2[i]);
      let kc2 = z.indexOf(ch2);
      let temp = (parseInt(ptc2) - parseInt(kc2));
      if (temp < 0)
          temp = temp + 26;
      let total2 = temp % 26;
      v2[i] = z[total2];

  }
  let ct2 = v2.join('');
  cyp2.value = ct2;

  if (count === 1) {
      decr.disabled = true;
  }

})