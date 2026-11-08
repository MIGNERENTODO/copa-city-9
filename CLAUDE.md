# Página web de la Copa City 9

Página pública de la Copa City 9 (Liga de La Ligua), publicada en Vercel desde la rama `main`.
El contenido que publica Claude va en `datos/sitio.js`; lo que publica Migner desde el panel vive en la base de datos.

## Reglas de trabajo

- Antes de publicar cambios grandes en la página, mostrarle la propuesta a Migner.
- **Portada rotativa por jornada:** cuando la portada (`portada` en `datos/sitio.js`) pase a una jornada nueva,
  primero se archiva la anterior como "Resumen de la Jornada N" en Noticias, para que no se pierdan sus titulares:
  `node herramientas/archivar-portada.js` (antes de reemplazar las diapositivas). Si se olvidó, se puede recuperar
  la versión anterior desde git y pasarla como argumento: `git show <commit>:datos/sitio.js > /tmp/viejo.js`
  y `node herramientas/archivar-portada.js /tmp/viejo.js`.
- Cada publicación con portada propia necesita su miniatura para compartir (1200x630, JPG liviano) en
  `assets/compartir/` con el mismo nombre de archivo, y ese nombre agregado a `datos/compartir.js`.
- Fotos de portada de noticias: 1600x900 en `assets/noticias/`, con el logo de la Copa City 9 abajo a la derecha.
- Piezas gráficas siempre en JPG. Documentos en Word (.docx).
