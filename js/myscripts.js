
let toggleMenu = false
function onDisplayMenu () {
  const menu = document.getElementById('menu')
  console.log('toggleMenu', toggleMenu)
  toggleMenu = !toggleMenu
  if (toggleMenu) {
    menu.style.top = '60px'
  } else {
    menu.style.top = '-205px'
  }
}