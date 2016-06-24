console.log('init')
function initBraveryDefaultsListener (e) {
  console.log('init default listener')
  window.initBraveryDefaults = e.detail
  window.removeEventListener('bravery-defaults-updated', initBraveryDefaultsListener)
}
window.addEventListener('bravery-defaults-updated', initBraveryDefaultsListener)
