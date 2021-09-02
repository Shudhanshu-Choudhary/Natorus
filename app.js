const form = document.getElementById('form');

const nav = document.querySelectorAll(".navigation__link");



form.addEventListener("submit" , (e) => {
   e.preventDefault();
   var userName = document.getElementById('name').value;
   var userEmail = document.getElementById('email').value;
   alert(`Hi ${userName}, we have sent you a email on ${userEmail} for further booking process`);   
})


console.log(nav);

nav.forEach(item => {
    item.addEventListener('click', (e)=> { 
    // console.log(item.parentNode.parentNode.parentNode);
    // item.parentNode.parentNode.parentNode.style.cssText = `width: 0; opacity: 0` ;
    document.getElementById('navi-toggle').checked = false;
    })
});