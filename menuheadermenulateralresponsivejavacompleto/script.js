const botao = document.querySelector('.btnmenu')
const menulateral = document.querySelector('.menu-lateral')

botao.addEventListener('click', () =>{
  menulateral.classList.toggle('ativo')
  
})