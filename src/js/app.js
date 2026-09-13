import { registerServiceWorker } from './pwa/register-sw.js';
import { requestNotificationPermission } from './pwa/push-manager.js';
import { setupFileInput } from './services/media.js';

// 1. Inicializar Service Worker
registerServiceWorker();

// 2. Event listener para las Notificaciones Push
const btnPush = document.getElementById('btnPush');
if (btnPush) {
  btnPush.addEventListener('click', () => {
    requestNotificationPermission();
  });
}

// 3. Inicializar selector de galería y archivos
setupFileInput('fileInput', 'preview');