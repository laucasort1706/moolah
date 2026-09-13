export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Apunta al sw.js en la raíz
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('Service Worker registrado en:', reg.scope))
        .catch((err) => console.error('Error al registrar Service Worker:', err));
    });
  }
}