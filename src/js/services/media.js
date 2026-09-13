export function setupFileInput(inputId, previewId) {
  const fileInput = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  if (!fileInput || !preview) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        preview.innerHTML = `<img src="${event.target.result}" style="max-width: 100%; border-radius: 8px; margin-top: 10px;">`;
      };
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = `<p style="margin-top: 10px;">📄 Archivo cargado: <strong>${file.name}</strong></p>`;
    }
  });
}