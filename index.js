

let dropdownbtn = document.querySelector('.dropbtn');
    let menucontent = document.querySelector('.dropcon');
    
    dropdownbtn.addEventListener('click', () => {
        if (menucontent.style.display === "") {
            menucontent.style.display = "block";
        }
        else {
            menucontent.style.display = "";
        }
    })