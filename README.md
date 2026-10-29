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

## Fotografía oficial de Nordlys

`public/images/candela-nordlys-completa.jpg`: fotografía estática del equipo completo sobre fondo blanco, sin recortar, con crédito y enlace a Candela. No representa una fotografía del equipo instalado en la clínica.

Fuente: https://marketing.candelamedical.com/APAC-2020-Rosacea-awareness.html
Original: https://marketing.syneron-candela.com/rs/620-HCU-218/images/NA-EB-2019-04-08-Natl-Rosacea-Month-Nordlys.png

## Guía de tratamientos y redes

`/tratamientos.html`: información sobre armonización facial, ácido hialurónico, labios, pómulos, mentón, arrugas de expresión e IPL Nordlys. La portada conserva un resumen con enlaces. El enfoque para labios tiene una sección destacada en portada y una explicación en la guía: naturalidad, armonía, preferencias personales y valoración médica previa. Los enlaces de navegación llevan a la información de cada sección; las novedades de apertura se consultan en Instagram. Se diferencia volumen (rellenos) y actividad muscular (toxina botulínica); no se prometen resultados, tiempos o disponibilidad de módulos no confirmados.

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

Tres ilustraciones originales en SVG señalan labios, pómulos y mentón. Son esquemas orientativos, sin representar resultados. La web no muestra fotografías reales de tratamientos, comparativas ni escenas de aplicación. Conserva el retrato profesional de la doctora y la fotografía del equipo Nordlys. No utiliza carruseles.

## Publicación en GitHub Pages

La rama `main` publica automáticamente mediante `.github/workflows/pages.yml`. En Settings → Pages se utiliza **GitHub Actions** como origen.

La acción obtiene la ruta de Pages y prepara `dist/` con los enlaces de páginas, CSS e imágenes adaptados. Los archivos de `public/` mantienen sus rutas locales.

Para comprobar manualmente la compilación de proyecto:

```sh
BASE_PATH=/dra-laura-vinas npm run build
```

Sitio: https://jvrdgz.github.io/dra-laura-vinas/

La publicación no incluye agenda ni formularios. El teléfono figura como «Próximamente», sin número ni enlace de llamada. Las citas futuras se solicitarán por teléfono o presencialmente; WhatsApp solo para confirmaciones.

## Próxima apertura (30/10/2026)

Aviso breve «Próximamente» con enlace a Instagram @dra.lauravinas para las novedades de apertura e inauguración. Sin fechas, explicación de obras, programa de inauguración ni reservas. Teléfono «Próximamente», sin número ni enlace de llamada. Los anclajes contacto e inauguracion llevan al mismo aviso. Las citas futuras seguirán siendo por teléfono o presencialmente; WhatsApp solo para confirmaciones.

## Imágenes de tratamientos retiradas (30/10/2026)

Se eliminan de la web y de public/ las dos fotos de labios de Instagram y las escenas de aplicación de Nordlys. También se retiran ambos carruseles, su código, controles y enlaces al apartado de ejemplos. Se mantienen las ilustraciones anatómicas, el retrato profesional y la fotografía estática del equipo Nordlys. Los archivos retirados se conservan fuera de la carpeta publicada en el área de trabajo local.
