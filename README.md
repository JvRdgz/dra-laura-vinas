# Dra. Laura Viñas · Zamora

Web estática responsive en crema, negro y dorado. Sin dependencias ni backend.

## Local

Node.js 20 o superior. Ejecutar `npm run dev` y abrir http://localhost:4173.

- `npm run check`: comprueba JavaScript.
- `npm run build`: prepara la versión estática en `dist/`.

## Páginas

- `/`: portada, Candela Nordlys SWT IPL, ubicación con Google Maps y formas de solicitar cita.
- `/doctora.html`: formación y trayectoria según el perfil de LinkedIn facilitado por el cliente, consultado el 25/10/2026.

Las citas se solicitan únicamente por teléfono o presencialmente. WhatsApp se utiliza solo para confirmar citas. La web no incluye calendario, formulario, reservas online ni almacenamiento de datos.

## Arte y fuentes

- Retrato: material facilitado por el cliente.
- `public/images/botanica.jpg`: fondo sin texto creado en Canva específicamente para esta web. https://www.canva.com/M/MAHZCZgbvTk
- Ningún banner con logotipo se usa como fondo. El texto y los logotipos de la interfaz son elementos separados.
- Google Fonts: Cormorant Garamond y Manrope, con alternativas locales. No hay analítica ni cookies.

## Información verificada

Dirección facilitada por el cliente: Av. de las Tres Cruces, 11, 49008 Zamora.

Formación y trayectoria: https://www.linkedin.com/in/laura-vi%C3%B1as-p%C3%A9rez-b67981446/

Nordlys confirmado por el cliente. Se describe su IPL SWT; no se atribuyen beneficios de los láseres fraccionados a la IPL ni se afirma superioridad o que sea el equipo más nuevo del mercado.

Evidencia enlazada en la web:

1. Candela Nordlys: https://candelamedical.com/products/nordlys/
2. Che et al. (2026), estudio retrospectivo de 63 pacientes con Nordlys, sin control: https://pubmed.ncbi.nlm.nih.gov/42233089/
3. Bjerring et al. (2004), bandas IPL PR/VL anteriores a Nordlys: https://pubmed.ncbi.nlm.nih.gov/15004823/

Antes de activar servicios reales: confirmar configuración de Nordlys y aplicadores, datos de contacto, horarios, credenciales y textos legales definitivos. La descripción del máster AMIR se resume desde LinkedIn; no se añade una universidad expedidora no confirmada.

## Fotografía oficial de Nordlys (27/10/2026)

`public/images/candela-nordlys.webp` es la fotografía de producto publicada por Candela en https://candelamedical.com/products/nordlys/ (no Nordlys Mini). Se conserva sin alteraciones, con crédito visible y enlace al fabricante; no representa una fotografía del equipo instalado en la clínica.

Archivo de origen: https://webappsmarketing.blob.core.windows.net/webapp/media/uploads/system-nordlys-ipl-laser-nd-yag-rosacea-redness-facial-veins_G5r8njG.webp

La fotografía visible se sustituye por `public/images/candela-nordlys-completa.jpg`: equipo completo sobre fondo blanco, sin recortar y sin modificar su aspecto. Original PNG de Candela: https://marketing.syneron-candela.com/rs/620-HCU-218/images/NA-EB-2019-04-08-Natl-Rosacea-Month-Nordlys.png. Fuente: https://marketing.candelamedical.com/APAC-2020-Rosacea-awareness.html. Se convierte a JPEG para reducir el peso.

La sección Nordlys dispone de carrusel manual accesible (flechas, puntos y teclado) con tres fotografías oficiales de ejemplo. El equipo se muestra completo en mayor tamaño y en un marco más ajustado. Las escenas de tratamiento no representan a la doctora ni a pacientes de la clínica.

Fotos de tratamientos, publicadas en la ficha oficial https://candelamedical.com/products/nordlys/:
- Facial: https://webappsmarketing.blob.core.windows.net/webapp/media/uploads/nordlys-what-is-nordlys-800x500.jpg.webp
- Escote: https://webappsmarketing.blob.core.windows.net/webapp/media/uploads/nordlys-swt-ipl-treatment-2_klhx3CR.webp

El carrusel cambia automáticamente cada 4 segundos con fundido de 850 ms. Se pausa al salir de pantalla, ocultar la pestaña, situar el ratón encima, enfocar un control o iniciar un gesto. Conserva flechas, puntos y teclado; añade pausa/reanudación y deslizamiento horizontal táctil (también arrastre con ratón), sin interferir con el scroll vertical. Con movimiento reducido se desactivan autoplay y fundido. Los cambios automáticos no se anuncian continuamente a lectores de pantalla.

## Guía de tratamientos y redes

`/tratamientos.html`: información sobre armonización facial, ácido hialurónico, labios, pómulos, mentón, arrugas de expresión e IPL Nordlys. La portada conserva un resumen con enlaces. Los enlaces de consulta llevan a las formas de solicitar cita por teléfono o en recepción. Se diferencia volumen (rellenos) y actividad muscular (toxina botulínica); no se prometen resultados, tiempos o disponibilidad de módulos no confirmados.

Redes facilitadas por el cliente: LinkedIn indicado e Instagram https://www.instagram.com/dra.lauravinas/. Accesibles desde los pies de página y desde el perfil.

Fuentes médicas de la guía:
- https://www.aad.org/public/cosmetic/wrinkles/fillers-faqs
- https://www.plasticsurgery.org/cosmetic-procedures/dermal-fillers
- https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers
- https://cima.aemps.es/cima/dochtml/p/65837/Prospecto_65837.html (información de referencia, sin recomendar una marca)
- https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-faqs
- https://candelamedical.com/products/nordlys/

Información editorial para pacientes: la responsable médica debe validar productos, indicaciones, disponibilidad y textos definitivos antes de publicar la web.

## Imágenes de la guía

Tres ilustraciones originales en SVG señalan labios, pómulos y mentón (esquemas orientativos, sin representar resultados). Se conservan como recursos editables y coherentes con los dorados y cremas del diseño.

Se añaden dos fotografías públicas del Instagram indicado por el cliente, descargadas y reproducidas sin alteraciones de contenido ni nuevos rótulos sobre la fotografía. Cada una tiene un enlace a la publicación de origen:
- `instagram-labios-enero-7.jpg`: https://www.instagram.com/dra.lauravinas/p/DTNhJbdFxU8/
- `instagram-labios-enero-6.jpg`: https://www.instagram.com/dra.lauravinas/p/DTLIcmVlycz/

El acceso público permitió ver las imágenes y sus fechas, pero Instagram exige iniciar sesión para leer los detalles de las publicaciones. Por eso se describen como ejemplos de la zona de labios y no se atribuyen producto, dosis, técnica, evolución ni secuencia clínica no verificados. Las otras fotografías visibles no se usan para pómulos o mentón al no poder confirmar ese contexto.

Los dos ejemplos de labios se muestran ahora en un carrusel manual y automático (4 segundos, fundido de 850 ms). Mantiene cada enlace original tanto en la foto como en el pie, con fecha actualizada al cambiar. Se eliminó el rótulo «Publicación de la doctora». Incluye pausa, puntos, flechas, teclado y deslizamiento horizontal; no abre Instagram al terminar un gesto. Se suspende fuera de pantalla, con foco/ratón, al ocultar la pestaña o con movimiento reducido. `lip-gallery.js` se carga desde `shared.js` y se activa únicamente cuando existe esta galería.

## Publicación en GitHub Pages

La rama `main` publica automáticamente mediante `.github/workflows/pages.yml`. En Settings → Pages se utiliza **GitHub Actions** como origen.

La acción obtiene la ruta de Pages y prepara `dist/` con los enlaces de páginas, CSS e imágenes adaptados. Los archivos de `public/` mantienen sus rutas locales.

Para comprobar manualmente la compilación de proyecto:

```sh
BASE_PATH=/dra-laura-vinas npm run build
```

Sitio: https://jvrdgz.github.io/dra-laura-vinas/

La publicación no incluye agenda ni formularios: citas por teléfono o presencialmente; WhatsApp solo para confirmaciones.
