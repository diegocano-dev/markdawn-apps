# MarkDawn Apps

**Herramientas con el aspecto de Office de siempre que lo guardan todo en Markdown.**

Markdown es el formato que mejor entienden las IA, y funciona en todas partes: GitHub, Obsidian, wikis, sitios de documentación. Pero pedirle a alguien sin conocimientos técnicos que escriba en él es una barrera real. MarkDawn Apps mantienen la interfaz que la gente ya conoce y solo guardan Markdown.

[Read in English](README.md)

| Aplicación | Qué es | Pruébala |
| --- | --- | --- |
| **MarkDawn Writer** | Un editor de documentos con aspecto de Word (en español e inglés) | [Demo en línea →](https://diegocano-dev.github.io/markdawn-apps/writer/) |
| **MarkDawn Slides** | Un editor de diapositivas con aspecto de PowerPoint | [Demo en línea →](https://diegocano-dev.github.io/markdawn-apps/slides/) |
| **MarkDawn Mind** | Mapas mentales con cinta tipo Office (en español e inglés) | [Demo en línea →](https://diegocano-dev.github.io/markdawn-apps/mind/) |

Cada una es un único archivo HTML, sin dependencias ni compilación. La [página de inicio](https://diegocano-dev.github.io/markdawn-apps/) enlaza a las tres.

---

## MarkDawn Writer

**Escribe como en Word. Guarda en Markdown.**

![MarkDawn Writer: el documento a la izquierda y el Markdown que genera a la derecha](screenshot.png)

Nunca ves un `#` ni un `**` mientras escribes, y cada documento se guarda como Markdown limpio que pueden leer personas, herramientas e IA.

- **Cinta tipo Word** con las pestañas Archivo, Inicio, Insertar, Disposición y Vista, y una pestaña Tabla al estar dentro de una tabla
- **Galería de estilos**: Normal, Título 1–4, Cita y Código, además de negrita, cursiva, tachado, **resaltado**, código en línea y vínculos
- **Listas** con viñetas, numeradas y de tareas, con Tab y Mayús+Tab para cambiar de nivel
- **Vista de páginas como en Word**: tamaño del papel, orientación, márgenes y miniaturas de las hojas; el PDF sale igual que en pantalla
- **Tablas que se editan en la propia hoja**: un **+** para añadir filas y columnas, menús para insertar, mover, alinear o borrar, y colores para el encabezado, filas alternas, la primera columna o cualquier columna
- **Avisos de color** (`> [!TIP]`), **notas al pie**, **código con colores**, **fórmulas** (KaTeX) y **diagramas** (Mermaid: flujo, mapa mental, secuencia, Gantt, tarta, línea de tiempo)
- **Panel Markdown en directo** a la derecha, a la izquierda o abajo, con tamaño ajustable, en colores o en negro, que también puedes editar
- **Atajos de Markdown al escribir**: `# `, `- `, `1. `, `> `, `[ ] `, `**negrita**`, `==resaltado==`, `` `código` ``
- **Abre cualquier archivo `.md`** sin romperlo, y pega limpio desde Word, Google Docs y páginas web
- Panel de navegación, títulos plegables, buscar y reemplazar, zoom, deshacer y rehacer, contador de palabras
- **Seis temas** para ver el documento (Word, Sobrio, Académico, Notion, GitHub y Lectura) y **modo oscuro**; el Markdown no cambia
- **Exportar PDF** y **Copiar para Word** (pega con formato en Word, Google Docs u Outlook)
- **Carpeta de trabajo** (Chrome y Edge): los documentos se guardan solos en tu carpeta, y exportar o importar la configuración
- Interfaz en **español e inglés**, cinta plegable y ayuda incluida (**F1**)

Descarga la carpeta con el HTML y su carpeta `libs/` (Mermaid y KaTeX) desde [Releases](https://github.com/diegocano-dev/markdawn-apps/releases) para usarlo sin conexión.

**[Writer Pro](https://diegocanodev.gumroad.com/l/markdawn-writer-pro)** añade mover bloques como en Notion, columnas, mapas mentales y diagramas de flujo con tres estilos propios, y mapas mentales que se editan en el propio documento.

Markdown no tiene alineación, así que Writer la guarda como un comentario invisible encima del bloque:

```markdown
<!-- align: center -->
# Bienvenido
```

---

## MarkDawn Slides

**Diseña diapositivas como en PowerPoint. Guárdalas en un Markdown que una IA puede leer y reconstruir.**

![MarkDawn Slides: una diapositiva con un diagrama de flujo y el Mermaid que genera](slides-screenshot.png)

- **Diseño libre**: mueve y redimensiona cualquier elemento, con guías inteligentes, cuadrícula opcional y más de 20 diseños de diapositiva
- **Más de 90 formas** con sus nombres de PowerPoint, y colores de relleno, contorno y texto
- **Texto con estilo por línea**: título, subtítulo, encabezado, texto, viñetas, numeración y tareas, negrita, cursiva, código y alineación vertical
- **Conectores** que se anclan a las formas: rectos o angulares con esquinas redondeadas, flecha en cualquier extremo, texto en la flecha y un trazado que esquiva otros objetos
- **Diagramas de flujo guardados en Mermaid**, que GitHub, Obsidian y muchos visores dibujan automáticamente
- **Gráficos** (columnas, barras, líneas, circular y anillo) y **tablas** (8 estilos y formato por filas y columnas) guardados con sus datos reales
- **Orden de lectura** calculado automáticamente, con grupos y zonas de lectura para los bloques que van juntos
- **Secciones**, modo presentación, paneles ajustables y zoom
- **Exportar Markdown simple**: sin comentarios ni posiciones, legible en cualquier visor

### Cómo se guarda una diapositiva

Cada elemento lleva un comentario con su posición y tamaño en % de la diapositiva, seguido de Markdown normal, en orden de lectura:

```markdown
---

<!-- slide 2 · layout: imageLeft -->

<!-- image: x=0 y=0 w=45 h=100 -->
![Paisaje de montaña al atardecer](montana.jpg)

<!-- text: x=50 y=10 w=45 h=20 valign=bottom -->
# Resultados del trimestre

<!-- text: x=50 y=34 w=45 h=56 -->
- Ventas +12 %
- Tres clientes nuevos
```

Las formas unidas por conectores se escriben como un único diagrama Mermaid. Las líneas `%%` son comentarios de Mermaid que guardan la posición exacta de cada forma: los visores las ignoran y MarkDawn Slides recupera la colocación:

````markdown
```mermaid
flowchart LR
  n3{"¿Datos completos?"}
  n3 -->|Sí| n4["Preparar envío"]
  n3 -->|No| n5["Pedir datos"]
  %% layout n3 shape=flowChartDecision x=44 y=34 w=20 h=28
```
````

---

## MarkDawn Mind

**Mapas mentales como en Office. Guardados en un Markdown que cualquier IA puede leer.**

![MarkDawn Mind: un mapa mental orgánico con ramas cónicas](mind-screenshot.png)

Este repositorio tiene **MarkDawn Mind**, la edición gratuita. La interfaz está en español y en inglés y sigue el idioma del navegador. Puedes cambiarla con el botón ES / EN.

> **[Mind Pro](https://diegocanodev.gumroad.com/l/markdawn-mind)** añade todos los estilos de mapa, más de 30 formas, organigrama, línea de tiempo y radial, exportación en alta resolución y en SVG, imágenes dentro de los temas y estilos propios por niveles.

- **Pensada para el teclado**: Tab crea un tema hijo, Intro uno hermano, y basta con escribir para editar
- **Mapas orgánicos** con ramas curvas y cónicas, además de mapa a la derecha y árbol (tipo carpetas)
- **Los temas se quedan donde los sueltas**, con sus ramas; si lo sueltas sobre otro tema, pasa a esa rama
- **Navegación a tu gusto**: zoom hacia el puntero, mover con el botón derecho, el central o Espacio, todo configurable (Vista → Ratón y zoom)
- **Varias hojas en un archivo**, notas, tareas, marcadores, vínculos, relaciones y temas flotantes
- **Panel Markdown en directo** que también puedes editar, esquema, minimapa, modo oscuro y cinta arriba, a la izquierda o a la derecha
- **Abre o pega cualquier esquema**: Markdown, texto con sangrías (como el que copia XMind), listas con viñetas u OPML; cada nivel se convierte en una rama
- **Muestra el mapa nivel a nivel** con una barra, y acorta los temas largos con «…»
- **Exporta como imagen** PNG o JPG (hasta Full HD), o cópialo y pégalo donde quieras
- **Texturas de fondo**: papel, lino y cuaderno
- Ayuda incluida: pulsa **F1**

**Mind Pro** añade más estilos de mapa (relieve 3D, placas con marco de metal…), organigrama, línea de tiempo y radial, más de 30 formas, 10 tipos de rama, ramas 3D, 25 combinaciones de colores y colores propios, estilos propios por niveles, formas dibujadas a mano, imágenes dentro de los temas, 12 texturas o tu propia imagen de fondo, y exportación en alta resolución y SVG. Abre los mismos archivos.

### Cómo se guarda un mapa mental

El mapa es una lista anidada normal. El formato y las posiciones van en comentarios HTML que los visores no muestran:

```markdown
<!-- markdawn-mind 0.3 · palette=vivo line=curve taper=all -->
<!-- style main: shape=pill border=2 line=6 case=upper -->

# Lanzamiento del producto
<!-- map: structure=organic -->

- Marketing <!-- color=#e8743b -->
  - Redes sociales
  - Nota de prensa
- Producto
  - [x] Versión beta
  - [ ] Pruebas con clientes
```

Los archivos con varias hojas empiezan cada una con `<!-- page: Nombre -->` y las separan con `---`.

---

## Cómo usarlas

- **En línea**: abre las demos enlazadas arriba.
- **Sin conexión**: descarga `writer/index.html` (Writer), `slides/index.html` (Slides) o `mind/index.html` (Mind) y ábrelo en cualquier navegador moderno.
- **En tu propia página**: Writer y Mind ofrecen una pequeña API.

```js
MarkDawn.getMarkdown();          // devuelve el documento en Markdown
MarkDawn.setMarkdown('# Hola');  // carga Markdown en el editor

MarkDawnMind.getMarkdown();          // el archivo completo del mapa
MarkDawnMind.setMarkdown('# Idea\n- Uno\n- Dos');
```

## Próximamente

- Abrir archivos `.md` en Slides
- Temas: tipos de letra y colores para todo el documento o la presentación, sin cambiar el Markdown
- Interfaz en inglés para Slides
- App instalable (PWA) y versión para la Microsoft Store
- Una librería y plugins para ver los archivos MarkDawn en Obsidian, VS Code y páginas web

## Contribuciones

Este proyecto **no acepta contribuciones de código** (pull requests). Si tienes una idea o encuentras un error, cuéntalo en [Issues](https://github.com/diegocano-dev/markdawn-apps/issues): todas las sugerencias se leen.

## Licencia

© 2026 Diego Cano. Desde noviembre de 2026, las versiones nuevas se publican con la licencia [GNU General Public License v3](LICENSE): puedes usarlas, estudiarlas, compartirlas y modificarlas libremente, pero cualquier versión que distribuyas también debe ser GPL v3, con su código fuente. Las versiones publicadas antes siguen con la licencia MIT.

**MarkDawn** y su logotipo son marcas del autor: las versiones modificadas deben usar otro nombre.
