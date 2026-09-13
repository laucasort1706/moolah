export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    alert('Tu navegador o dispositivo no soporta notificaciones.');
    return false;
  }

  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    new Notification('Moolah', {
      body: '¡Notificaciones activadas correctamente!',
      icon: './public/icons/icon-192.png'
    });
    return true;
  } else {
    alert('Permisos de notificación denegados.');
    return false;
  }
}