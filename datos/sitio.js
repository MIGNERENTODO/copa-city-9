/* =====================================================================
   COPA CITY 9 · Contenido de la página
   Este archivo lo actualiza solo el administrador de la liga.
   Las estadísticas y resultados vienen de datos/estadisticas.json
   (el respaldo que descarga el programa Anotador).
   ===================================================================== */
window.SITIO = {

  /* Mientras no haya juegos cargados en estadisticas.json, la página
     muestra datos de ejemplo con un aviso. Poner en false para apagarlo. */
  vistaPrevia: false,

  liga: {
    nombre: "Liga de La Ligua",
    torneo: "Copa City 9",
    subtitulo: "Torneo Interregional de Softbol",
    lema: "La Copa de las 9 ciudades",
    zona: "Zona Centro de Chile · 4ª, 5ª y R.M.",
    temporada: "2026",
    sede: "Estadio La Ligua Park",   /* sede única de todos los juegos */
    resumen: "10 equipos, 9 ciudades y 3,5 meses de competencia en el Estadio La Ligua Park. Juegos a 7 innings, transmitidos en vivo por YouTube e Instagram.",
    minimos: { vb: 10, il: "3.0" }   /* mínimos para líderes de AVG/OPS y EFE/WHIP */
  },

  redes: {
    instagram: [
      { nombre: "Liga de La Ligua", usuario: "@ligadesoftbol_laligua", url: "https://www.instagram.com/ligadesoftbol_laligua/" },
      { nombre: "Liga del Choapa", usuario: "@LigaDelChoapa", url: "https://www.instagram.com/ligadelchoapa/" },
      { nombre: "Migner Acosta · Presidente", usuario: "@mignermauricio", url: "https://www.instagram.com/mignermauricio/" }
    ],
    youtube: [
      { nombre: "Liga de La Ligua", usuario: "@Ligadesoftbol_laligua", url: "https://www.youtube.com/@Ligadesoftbol_laligua" },
      { nombre: "Migner en Todo", usuario: "@mignerentodo", url: "https://www.youtube.com/@mignerentodo" }
    ]
  },

  /* Orden importa: "Máster Pumas" va antes que "Pumas" para reconocer bien los nombres */
  equipos: [
    { id: "masterpumas", nombre: "Máster Pumas", ciudad: "Salamanca", abrev: "MPU", logo: "assets/logos/masterpumas.png", color: "#1B2C6E", color2: "#F2B705", alias: ["master", "mpu"] },
    { id: "atleticos", nombre: "Atléticos del Caribe", ciudad: "La Ligua", abrev: "ATL", logo: "assets/logos/atleticos.png", color: "#D9127C", color2: "#F7C600", alias: ["atleticos", "caribe", "atl"] },
    { id: "bombarderos", nombre: "Bombarderos de Illapel", ciudad: "Illapel", abrev: "BOM", logo: "assets/logos/bombarderos.png", color: "#1D6B33", color2: "#111111", alias: ["bombarderos", "illapel", "bom"] },
    { id: "guaros", nombre: "Guaros de San Felipe", ciudad: "San Felipe", abrev: "GUA", logo: "assets/logos/guaros.png", color: "#C8202B", color2: "#2A2A2A", alias: ["guaros", "san felipe", "gua"] },
    { id: "andes", nombre: "Los Andes", ciudad: "Los Andes", abrev: "AND", logo: "assets/logos/andes.png", color: "#B5121B", color2: "#141414", alias: ["andes", "and"] },
    { id: "pandas", nombre: "Pandas de Quillota", ciudad: "Quillota", abrev: "PAN", logo: "assets/logos/pandas.png", color: "#E0368C", color2: "#141414", alias: ["pandas", "quillota", "pan"] },
    { id: "blessed", nombre: "Blessed Barber's", ciudad: "La Ligua", abrev: "BLE", logo: "assets/logos/blessed.png", color: "#5B2A9E", color2: "#3FC1D6", alias: ["blessed", "barber", "ble"] },
    { id: "maitencillo", nombre: "Litoral Maitencillo", ciudad: "Maitencillo", abrev: "MAI", logo: "assets/logos/maitencillo.png", color: "#2E6A35", color2: "#E9EFE6", alias: ["maitencillo", "litoral", "mai"] },
    { id: "bravos", nombre: "Bravos de La Calera", ciudad: "La Calera", abrev: "BRA", logo: "assets/logos/bravos.png", color: "#6E1423", color2: "#C9A227", alias: ["bravos", "calera", "bra"] },
    { id: "pumas", nombre: "Pumas de Salamanca", ciudad: "Salamanca", abrev: "PUM", logo: "assets/logos/pumas.png", color: "#0B4FD8", color2: "#F2B705", alias: ["pumas", "salamanca", "pum"] }
  ],

  /* Rosters con foto. Los números y estadísticas se cruzan por nombre con estadisticas.json */
  rosters: {
    pumas: {
      cuerpoTecnico: [
        { cargo: "Manager", nombre: "Keivel Gonzalez" },
        { cargo: "Coach", nombre: "Wilmer Borjas" },
        { cargo: "Coach", nombre: "Ramón González" }
      ],
      instagram: "@PumasSBC",
      jugadores: [
        { nombre: "Wilmer Borjas", posicion: "Utility", foto: "assets/jugadores/pumas-wilmer-borjas.jpg" },
        { nombre: "Antonio Olivares", posicion: "Utility", foto: "assets/jugadores/pumas-antonio-olivares.jpg" },
        { nombre: "Jorge Aular", posicion: "Utility", foto: "assets/jugadores/pumas-jorge-aular.jpg" },
        { nombre: "Jesús Bruno", posicion: "Outfield", foto: "assets/jugadores/pumas-jesus-bruno.jpg" },
        { nombre: "Howard Gonzalez", posicion: "Infield", foto: "assets/jugadores/pumas-howard-gonzalez.jpg" },
        { nombre: "Accemed Garcia", posicion: "Outfield", foto: "assets/jugadores/pumas-accemed-garcia.jpg" },
        { nombre: "Keivel Gonzalez", posicion: "Utility", foto: "assets/jugadores/pumas-keivel-gonzalez.jpg" },
        { nombre: "Maldoni Rebollo", posicion: "Infield", foto: "assets/jugadores/pumas-maldoni-rebollo.jpg" },
        { nombre: "Darío González", posicion: "Outfield", foto: "assets/jugadores/pumas-dario-gonzalez.jpg" },
        { nombre: "Julio Parra", posicion: "Catcher", foto: "assets/jugadores/pumas-julio-parra.jpg" },
        { nombre: "Migner Acosta", posicion: "Infield", foto: "assets/jugadores/pumas-migner-acosta.jpg" },
        { nombre: "Juan Chirinos", posicion: "Outfield", foto: "assets/jugadores/pumas-juan-chirinos.jpg" },
        { nombre: "Kelvi Boscan", posicion: "Pitcher", foto: "assets/jugadores/pumas-kelvi-boscan.jpg" },
        { nombre: "Julio Piñeiro", posicion: "Pitcher", foto: "assets/jugadores/pumas-julio-pineiro.jpg" },
        { nombre: "Alexis Colina", posicion: "Utility", foto: "assets/jugadores/pumas-alexis-colina.jpg" },
        { nombre: "Jeferson Guerrero", posicion: "Utility", foto: "assets/jugadores/pumas-jeferson-guerrero.jpg" },
        { nombre: "Anderson Zambrano", posicion: "Infield", foto: "assets/jugadores/pumas-anderson-zambrano.jpg" },
        { nombre: "Daniel Carballo", posicion: "Pitcher", foto: "assets/jugadores/pumas-daniel-carballo.jpg" },
        { nombre: "Daniel Romero", posicion: "Infield", foto: "assets/jugadores/pumas-daniel-romero.jpg" },
        { nombre: "Roys Rebollo", posicion: "Outfield", foto: "assets/jugadores/pumas-roys-rebollo.jpg" },
        { nombre: "David Munares", posicion: "Outfield", foto: "assets/jugadores/pumas-david-munares.jpg" },
        { nombre: "Víctor Sarmiento", posicion: "Infield", foto: "assets/jugadores/pumas-victor-sarmiento.jpg" },
        { nombre: "Cristian Toro", posicion: "Utility", foto: "assets/jugadores/pumas-cristian-toro.jpg" },
        { nombre: "Ronaly Vera", posicion: "Utility", foto: "assets/jugadores/pumas-ronaly-vera.jpg" }
      ]
    },
    atleticos: {
      jugadores: [
        { nombre: "Jorge Arenas", numero: "1", posicion: "", foto: "assets/jugadores/atleticos-jorge-arenas.jpg" },
        { nombre: "Staling Rossell", numero: "2", posicion: "", foto: "assets/jugadores/atleticos-staling-rossell.jpg" },
        { nombre: "Wilson Terán", numero: "3", posicion: "", foto: "assets/jugadores/atleticos-wilson-teran.jpg" },
        { nombre: "Eduardo Rivero", numero: "4", posicion: "", foto: "assets/jugadores/atleticos-eduardo-rivero.jpg" },
        { nombre: "Pedro Rojas", numero: "5", posicion: "", foto: "assets/jugadores/atleticos-pedro-rojas.jpg" },
        { nombre: "Christian Lara", numero: "6", posicion: "", foto: "assets/jugadores/atleticos-christian-lara.jpg" },
        { nombre: "Ely Monges", numero: "7", posicion: "", foto: "assets/jugadores/atleticos-ely-monges.jpg" },
        { nombre: "Alejandro Leal", numero: "8", posicion: "", foto: "assets/jugadores/atleticos-alejandro-leal.jpg" },
        { nombre: "Kelvin Ramos", numero: "9", posicion: "", foto: "assets/jugadores/atleticos-kelvin-ramos.jpg" },
        { nombre: "Jesús Ocanto", numero: "10", posicion: "", foto: "assets/jugadores/atleticos-jesus-ocanto.jpg" },
        { nombre: "Kelvin Zapata", numero: "11", posicion: "", foto: "assets/jugadores/atleticos-kelvin-zapata.jpg" },
        { nombre: "Matías Guerrero", numero: "12", posicion: "", foto: "assets/jugadores/atleticos-matias-guerrero.jpg" },
        { nombre: "Ricardo Meléndez", numero: "13", posicion: "", foto: "assets/jugadores/atleticos-ricardo-melendez.jpg" },
        { nombre: "Alexander Martinez", numero: "14", posicion: "", foto: "assets/jugadores/atleticos-alexander-martinez.jpg" },
        { nombre: "Jesus Perez", numero: "15", posicion: "", foto: "assets/jugadores/atleticos-jesus-perez.jpg" },
        { nombre: "Jesus Andazol", numero: "16", posicion: "", foto: "assets/jugadores/atleticos-jesus-andazol.jpg" },
        { nombre: "Cristian Garcia", numero: "17", posicion: "", foto: "assets/jugadores/atleticos-cristian-garcia.jpg" },
        { nombre: "Adelson Oliveros", numero: "18", posicion: "", foto: "assets/jugadores/atleticos-adelson-oliveros.jpg" },
        { nombre: "Gabriel Vasquez", numero: "19", posicion: "", foto: "assets/jugadores/atleticos-gabriel-vasquez.jpg" },
        { nombre: "Nestor Ocanto", numero: "20", posicion: "", foto: "assets/jugadores/atleticos-nestor-ocanto.jpg" },
        { nombre: "Nelson Leal", numero: "21", posicion: "", foto: "assets/jugadores/atleticos-nelson-leal.jpg" },
        { nombre: "Naimer Bernard", numero: "22", posicion: "", foto: "assets/jugadores/atleticos-naimer-bernard.jpg" },
        { nombre: "Eliecer Cordero", numero: "23", posicion: "", foto: "assets/jugadores/atleticos-eliecer-cordero.jpg" },
        { nombre: "Emilio Moreno", numero: "24", posicion: "", foto: "assets/jugadores/atleticos-emilio-moreno.jpg" },
        { nombre: "Moises Andazol", numero: "25", posicion: "", foto: "assets/jugadores/atleticos-moises-andazol.jpg" }
      ]
    },
    masterpumas: {
      cuerpoTecnico: [
        { cargo: "Manager", nombre: "Ramjses Acosta" },
        { cargo: "Coach", nombre: "Ramon Rodriguez" },
        { cargo: "Capitán", nombre: "Jeikson Sangronis" }
      ],
      instagram: "@PumasSBC",
      jugadores: [
        { nombre: "Miguel Zambrano", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-miguel-zambrano.jpg" },
        { nombre: "Johan Quevedo", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-johan-quevedo.jpg" },
        { nombre: "Jeikson Sangronis", numero: "", posicion: "Catcher", foto: "assets/jugadores/masterpumas-jeikson-sangronis.jpg" },
        { nombre: "Roger Palmera", numero: "", posicion: "Catcher", foto: "assets/jugadores/masterpumas-roger-palmera.jpg" },
        { nombre: "Ramjses Acosta", numero: "", posicion: "Pitcher", foto: "assets/jugadores/masterpumas-ramjses-acosta.jpg" },
        { nombre: "Argenis Soto", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-argenis-soto.jpg" },
        { nombre: "Carlos Rivero", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-carlos-rivero.jpg" },
        { nombre: "Anderson Coello", numero: "", posicion: "Catcher", foto: "assets/jugadores/masterpumas-anderson-coello.jpg" },
        { nombre: "Ramon Rodriguez", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-ramon-rodriguez.jpg" },
        { nombre: "Breiner Cambero", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-breiner-cambero.jpg" },
        { nombre: "Manuel Portillo", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-manuel-portillo.jpg" },
        { nombre: "Makeny MacGregor", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-makeny-macgregor.jpg" },
        { nombre: "Raymundo Lezama", numero: "", posicion: "Pitcher", foto: "assets/jugadores/masterpumas-raymundo-lezama.jpg" },
        { nombre: "Jordan Chacon", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-jordan-chacon.jpg" },
        { nombre: "Carlos Reyes", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-carlos-reyes.jpg" },
        { nombre: "Hector Martinez", numero: "", posicion: "Outfield", foto: "assets/jugadores/masterpumas-hector-martinez.jpg" },
        { nombre: "Jose Medina", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-jose-medina.jpg" },
        { nombre: "Moises Rivero", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-moises-rivero.jpg" },
        { nombre: "David Estrada", numero: "", posicion: "Infield", foto: "assets/jugadores/masterpumas-david-estrada.jpg" },
        { nombre: "Dannys Sanchez", numero: "", posicion: "Utility", foto: "assets/jugadores/masterpumas-dannys-sanchez.jpg" }
      ]
    },
    bombarderos: {
      jugadores: [
        { nombre: "Julio Sanchez", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-julio-sanchez.jpg" },
        { nombre: "Carlos Lizcano", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-carlos-lizcano.jpg" },
        { nombre: "Lermit Quintero", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-lermit-quintero.jpg" },
        { nombre: "Jhorman Mata", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-jhorman-mata.jpg" },
        { nombre: "Kennedy Infante", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-kennedy-infante.jpg" },
        { nombre: "Alfredo Perez", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-alfredo-perez.jpg" },
        { nombre: "Pablo Zarate", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-pablo-zarate.jpg" },
        { nombre: "Roberto Cubillan", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-roberto-cubillan.jpg" },
        { nombre: "Sergio González", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-sergio-gonzalez.jpg" },
        { nombre: "Daury Perez", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-daury-perez.jpg" },
        { nombre: "Jhon Benitez", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-jhon-benitez.jpg" },
        { nombre: "Angel Parra", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-angel-parra.jpg" },
        { nombre: "Franklin Gonzalez", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-franklin-gonzalez.jpg" },
        { nombre: "Pedro Torres", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-pedro-torres.jpg" },
        { nombre: "Joan Arismendi", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-joan-arismendi.jpg" },
        { nombre: "Jaime Zamora", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-jaime-zamora.jpg" },
        { nombre: "Jesús Reyes", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-jesus-reyes.jpg" },
        { nombre: "Franklin José Tovar", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-franklin-jose-tovar.jpg" },
        { nombre: "Alejandro Miralles", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-alejandro-miralles.jpg" },
        { nombre: "Alexander Morales", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-alexander-morales.jpg" },
        { nombre: "Pedro Casadiegos", numero: "", posicion: "", foto: "assets/jugadores/bombarderos-pedro-casadiegos.jpg" }
      ]
    },
    guaros: {
      cuerpoTecnico: [
        { cargo: "Manager", nombre: "Gleimer Muñoz" },
        { cargo: "Delegado", nombre: "Willer Ochoa" }
      ],
      jugadores: [
        { nombre: "Gilbert Hernandez", numero: "", posicion: "", foto: "assets/jugadores/guaros-gilbert-hernandez.jpg" },
        { nombre: "Jose Rodriguez Jr", numero: "", posicion: "", foto: "assets/jugadores/guaros-jose-rodriguez-jr.jpg" },
        { nombre: "Willer Ochoa", numero: "", posicion: "", foto: "assets/jugadores/guaros-willer-ochoa.jpg" },
        { nombre: "Jose Rodriguez", numero: "", posicion: "", foto: "assets/jugadores/guaros-jose-rodriguez.jpg" },
        { nombre: "Jonny Colmenarez", numero: "", posicion: "", foto: "assets/jugadores/guaros-jonny-colmenarez.jpg" },
        { nombre: "Kenny Ochoa", numero: "", posicion: "", foto: "assets/jugadores/guaros-kenny-ochoa.jpg" },
        { nombre: "Roberto Echemendia", numero: "", posicion: "", foto: "assets/jugadores/guaros-roberto-echemendia.jpg" },
        { nombre: "Anthony Freitez", numero: "", posicion: "", foto: "assets/jugadores/guaros-anthony-freitez.jpg" },
        { nombre: "Carlos Rivas", numero: "", posicion: "", foto: "assets/jugadores/guaros-carlos-rivas.jpg" },
        { nombre: "Diego Prieto", numero: "", posicion: "", foto: "assets/jugadores/guaros-diego-prieto.jpg" },
        { nombre: "Eduardo Loaiza", numero: "", posicion: "", foto: "assets/jugadores/guaros-eduardo-loaiza.jpg" },
        { nombre: "Juan Romero", numero: "", posicion: "", foto: "assets/jugadores/guaros-juan-romero.jpg" },
        { nombre: "Victor Ysea", numero: "", posicion: "", foto: "assets/jugadores/guaros-victor-ysea.jpg" },
        { nombre: "Victor Duran", numero: "", posicion: "", foto: "assets/jugadores/guaros-victor-duran.jpg" },
        { nombre: "Mario Vasquez", numero: "", posicion: "", foto: "assets/jugadores/guaros-mario-vasquez.jpg" },
        { nombre: "Jose Diaz", numero: "", posicion: "", foto: "assets/jugadores/guaros-jose-diaz.jpg" },
        { nombre: "Jesus Oliveros", numero: "", posicion: "", foto: "assets/jugadores/guaros-jesus-oliveros.jpg" },
        { nombre: "Pedro Leal", numero: "", posicion: "", foto: "assets/jugadores/guaros-pedro-leal.jpg" },
        { nombre: "Hugo Rincon", numero: "", posicion: "", foto: "assets/jugadores/guaros-hugo-rincon.jpg" },
        { nombre: "Luis Colmenarez", numero: "", posicion: "", foto: "assets/jugadores/guaros-luis-colmenarez.jpg" },
        { nombre: "Albert Perez", numero: "", posicion: "", foto: "assets/jugadores/guaros-albert-perez.jpg" },
        { nombre: "Victor Ramirez", numero: "", posicion: "", foto: "assets/jugadores/guaros-victor-ramirez.jpg" }
      ]
    },
    andes: {
      jugadores: [
        { nombre: "Gleymer Muñoz", numero: "", posicion: "", foto: "assets/jugadores/andes-gleymer-munoz.jpg" },
        { nombre: "Sebastian Rincon", numero: "", posicion: "", foto: "assets/jugadores/andes-sebastian-rincon.jpg" },
        { nombre: "Yorvin Gil", numero: "", posicion: "", foto: "assets/jugadores/andes-yorvin-gil.jpg" },
        { nombre: "Jose Leonardo Gonzalez", numero: "", posicion: "", foto: "assets/jugadores/andes-jose-leonardo-gonzalez.jpg" },
        { nombre: "Ruben Morales", numero: "", posicion: "", foto: "assets/jugadores/andes-ruben-morales.jpg" },
        { nombre: "Glenderson Gomez", numero: "", posicion: "", foto: "assets/jugadores/andes-glenderson-gomez.jpg" },
        { nombre: "Arnaldo Rosa", numero: "", posicion: "", foto: "assets/jugadores/andes-arnaldo-rosa.jpg" },
        { nombre: "Jose Daniel Soto", numero: "", posicion: "", foto: "assets/jugadores/andes-jose-daniel-soto.jpg" },
        { nombre: "Nehomar Romero", numero: "", posicion: "", foto: "assets/jugadores/andes-nehomar-romero.jpg" },
        { nombre: "Jose Gregorio Urbano", numero: "", posicion: "", foto: "assets/jugadores/andes-jose-gregorio-urbano.jpg" },
        { nombre: "Fedrick Sifuentes", numero: "", posicion: "", foto: "assets/jugadores/andes-fedrick-sifuentes.jpg" },
        { nombre: "Jhoyderson Sulbaran", numero: "", posicion: "", foto: "assets/jugadores/andes-jhoyderson-sulbaran.jpg" },
        { nombre: "Carlos Romero", numero: "", posicion: "", foto: "assets/jugadores/andes-carlos-romero.jpg" },
        { nombre: "Laumir Gimenez", numero: "", posicion: "", foto: "assets/jugadores/andes-laumir-gimenez.jpg" },
        { nombre: "Eduar Acosta", numero: "", posicion: "", foto: "assets/jugadores/andes-eduar-acosta.jpg" },
        { nombre: "Giovanny Montezuma", numero: "", posicion: "", foto: "assets/jugadores/andes-giovanny-montezuma.jpg" },
        { nombre: "Olvis Montezuma", numero: "", posicion: "", foto: "assets/jugadores/andes-olvis-montezuma.jpg" },
        { nombre: "Elias Reveron", numero: "", posicion: "", foto: "assets/jugadores/andes-elias-reveron.jpg" },
        { nombre: "Rosbert Ibarra", numero: "", posicion: "", foto: "assets/jugadores/andes-rosbert-ibarra.jpg" },
        { nombre: "Luis Carlos Rivero", numero: "", posicion: "", foto: "assets/jugadores/andes-luis-carlos-rivero.jpg" }
      ]
    },
    blessed: {
      jugadores: [
        { nombre: "Ángel Azuaje", numero: "1", posicion: "", foto: "assets/jugadores/blessed-angel-azuaje.jpg" },
        { nombre: "José Medina", numero: "2", posicion: "", foto: "assets/jugadores/blessed-jose-medina.jpg" },
        { nombre: "Eduard Márquez", numero: "3", posicion: "", foto: "assets/jugadores/blessed-eduard-marquez.jpg" },
        { nombre: "Wilmer Urbina", numero: "4", posicion: "", foto: "assets/jugadores/blessed-wilmer-urbina.jpg" },
        { nombre: "Héctor Pernalete", numero: "5", posicion: "", foto: "assets/jugadores/blessed-hector-pernalete.jpg" },
        { nombre: "Maiyerson Echegaray", numero: "6", posicion: "", foto: "assets/jugadores/blessed-maiyerson-echegaray.jpg" },
        { nombre: "Robert Peraza Jr", numero: "7", posicion: "", foto: "assets/jugadores/blessed-robert-peraza-jr.jpg" },
        { nombre: "Josué Rivas", numero: "8", posicion: "", foto: "assets/jugadores/blessed-josue-rivas.jpg" },
        { nombre: "Ender Huz", numero: "9", posicion: "", foto: "assets/jugadores/blessed-ender-huz.jpg" },
        { nombre: "Roberth Perea", numero: "10", posicion: "", foto: "assets/jugadores/blessed-roberth-perea.jpg" },
        { nombre: "Gelson Mora", numero: "11", posicion: "", foto: "assets/jugadores/blessed-gelson-mora.jpg" },
        { nombre: "Argenis Salazar", numero: "12", posicion: "", foto: "assets/jugadores/blessed-argenis-salazar.jpg" },
        { nombre: "Leonardo Pérez", numero: "13", posicion: "", foto: "assets/jugadores/blessed-leonardo-perez.jpg" },
        { nombre: "Yoanní Salazar", numero: "14", posicion: "", foto: "assets/jugadores/blessed-yoanni-salazar.jpg" },
        { nombre: "Dannys Croquer", numero: "15", posicion: "", foto: "assets/jugadores/blessed-dannys-croquer.jpg" },
        { nombre: "Jesús Veloz", numero: "16", posicion: "", foto: "assets/jugadores/blessed-jesus-veloz.jpg" },
        { nombre: "Maikol Matheus", numero: "17", posicion: "", foto: "assets/jugadores/blessed-maikol-matheus.jpg" },
        { nombre: "Abrahan Azuaje", numero: "18", posicion: "", foto: "assets/jugadores/blessed-abrahan-azuaje.jpg" },
        { nombre: "Richard Hereira", numero: "19", posicion: "", foto: "assets/jugadores/blessed-richard-hereira.jpg" },
        { nombre: "Gian Fuentes", numero: "20", posicion: "", foto: "assets/jugadores/blessed-gian-fuentes.jpg" },
        { nombre: "José Gusman", numero: "21", posicion: "", foto: "assets/jugadores/blessed-jose-gusman.jpg" },
        { nombre: "Darwin Fajardo", numero: "22", posicion: "", foto: "assets/jugadores/blessed-darwin-fajardo.jpg" },
        { nombre: "Ender Días", numero: "23", posicion: "", foto: "assets/jugadores/blessed-ender-dias.jpg" },
        { nombre: "Julio Revelo", numero: "24", posicion: "", foto: "assets/jugadores/blessed-julio-revelo.jpg" },
        { nombre: "Jhonsward Pascual", numero: "25", posicion: "", foto: "assets/jugadores/blessed-jhonsward-pascual.jpg" }
      ]
    },
    maitencillo: {
      cuerpoTecnico: [
        { cargo: "Manager", nombre: "Eduardo Pérez" },
        { cargo: "Delegado", nombre: "Javier Heredia" }
      ],
      jugadores: [
        { nombre: "Javier Heredia", numero: "1", posicion: "", foto: "assets/jugadores/maitencillo-javier-heredia.jpg" },
        { nombre: "Eliezer Castellano", numero: "2", posicion: "", foto: "assets/jugadores/maitencillo-eliezer-castellano.jpg" },
        { nombre: "Eduardo Pérez", numero: "3", posicion: "", foto: "assets/jugadores/maitencillo-eduardo-perez.jpg" },
        { nombre: "Angel Vásquez", numero: "4", posicion: "", foto: "assets/jugadores/maitencillo-angel-vasquez.jpg" },
        { nombre: "Marcos Gonzales", numero: "5", posicion: "", foto: "assets/jugadores/maitencillo-marcos-gonzales.jpg" },
        { nombre: "Gabriel Filipino", numero: "6", posicion: "", foto: "assets/jugadores/maitencillo-gabriel-filipino.jpg" },
        { nombre: "Guillermo Romero", numero: "7", posicion: "", foto: "assets/jugadores/maitencillo-guillermo-romero.jpg" },
        { nombre: "Harrison Bello", numero: "8", posicion: "", foto: "assets/jugadores/maitencillo-harrison-bello.jpg" },
        { nombre: "Jhonatan Ruiz", numero: "9", posicion: "", foto: "assets/jugadores/maitencillo-jhonatan-ruiz.jpg" },
        { nombre: "Junior Tolentino", numero: "10", posicion: "", foto: "assets/jugadores/maitencillo-junior-tolentino.jpg" },
        { nombre: "Leandro Pérez", numero: "11", posicion: "", foto: "assets/jugadores/maitencillo-leandro-perez.jpg" },
        { nombre: "Luis Caro", numero: "12", posicion: "", foto: "assets/jugadores/maitencillo-luis-caro.jpg" },
        { nombre: "Rafael Rosilia", numero: "13", posicion: "", foto: "assets/jugadores/maitencillo-rafael-rosilia.jpg" },
        { nombre: "Yosleiker Saavedra", numero: "14", posicion: "", foto: "assets/jugadores/maitencillo-yosleiker-saavedra.jpg" },
        { nombre: "Orlando Salón", numero: "15", posicion: "", foto: "assets/jugadores/maitencillo-orlando-salon.jpg" }
      ]
    },
    bravos: {
      jugadores: [
        { nombre: "Yocsxander Blanco", numero: "24", posicion: "", foto: "assets/jugadores/bravos-yocsxander-blanco.jpg" },
        { nombre: "Leider Lucena", numero: "16", posicion: "", foto: "assets/jugadores/bravos-leider-lucena.jpg" },
        { nombre: "Carlos Gabriel", numero: "9", posicion: "", foto: "assets/jugadores/bravos-carlos-gabriel.jpg" },
        { nombre: "David Alvarez", numero: "23", posicion: "", foto: "assets/jugadores/bravos-david-alvarez.jpg" },
        { nombre: "Daniel Castillo", numero: "33", posicion: "", foto: "assets/jugadores/bravos-daniel-castillo.jpg" },
        { nombre: "Carlos Javier", numero: "8", posicion: "", foto: "assets/jugadores/bravos-carlos-javier.jpg" },
        { nombre: "Nixon Ramirez", numero: "3", posicion: "", foto: "assets/jugadores/bravos-nixon-ramirez.jpg" },
        { nombre: "Forlan Guevara", numero: "25", posicion: "", foto: "assets/jugadores/bravos-forlan-guevara.jpg" },
        { nombre: "Jorge Vargas", numero: "17", posicion: "", foto: "assets/jugadores/bravos-jorge-vargas.jpg" },
        { nombre: "Wilter Machado", numero: "15", posicion: "", foto: "assets/jugadores/bravos-wilter-machado.jpg" },
        { nombre: "Emmanuel Leones", numero: "7", posicion: "", foto: "assets/jugadores/bravos-emmanuel-leones.jpg" },
        { nombre: "Reniel Miranda", numero: "28", posicion: "", foto: "assets/jugadores/bravos-reniel-miranda.jpg" },
        { nombre: "Jesus Fernandez", numero: "62", posicion: "", foto: "assets/jugadores/bravos-jesus-fernandez.jpg" },
        { nombre: "Alvaro Leones", numero: "11", posicion: "", foto: "assets/jugadores/bravos-alvaro-leones.jpg" },
        { nombre: "Charlys Javier", numero: "4", posicion: "", foto: "assets/jugadores/bravos-charlys-javier.jpg" },
        { nombre: "Victor Roman", numero: "20", posicion: "", foto: "assets/jugadores/bravos-victor-roman.jpg" },
        { nombre: "Javier Dominguez", numero: "14", posicion: "", foto: "assets/jugadores/bravos-javier-dominguez.jpg" },
        { nombre: "Alberto Yanes", numero: "13", posicion: "", foto: "assets/jugadores/bravos-alberto-yanes.jpg" },
        { nombre: "Jhon Aljuria", numero: "6", posicion: "", foto: "assets/jugadores/bravos-jhon-aljuria.jpg" },
        { nombre: "Kirson Brito", numero: "27", posicion: "", foto: "assets/jugadores/bravos-kirson-brito.jpg" }
      ]
    }
  },

  directiva: [
    {
      nombre: "Migner Acosta Yánez",
      cargo: "Presidente de la Liga de La Ligua y de la Copa City 9",
      foto: "assets/directiva/migner-acosta-presidente.jpg",
      hitos: ["Presidente de la Liga de La Ligua", "Ex presidente de la Liga del Choapa", "Presidente del Club Pumas de Salamanca"],
      instagram: { usuario: "@mignermauricio", url: "https://www.instagram.com/mignermauricio/" },
      bio: [
        "Migner Ramón Acosta Yánez preside la Liga de La Ligua y encabeza la organización de la Copa City 9. Antes presidió la Liga del Choapa, y desde 2019 dirige el Club de Sóftbol Pumas de Salamanca, una organización sin fines de lucro que promueve el deporte y la integración intercultural. También juega en el infield de los Pumas.",
        "Es abogado de la República de Venezuela, Magíster en Integración Regional (América Latina y Europa) por la Universidad Latinoamericana y del Caribe y doctorando en Ciencias de la Educación en la misma casa de estudios. Entre 2022 y 2024 fue facilitador de talleres educativos de béisbol en Cambridge School y en el Colegio San Sebastián de Salamanca.",
        "Es Director General de Ofitramix y preside la Asociación Pro Migrantes en Chile."
      ]
    },
    { nombre: "Yosguar García", apodo: "El Árabe", cargo: "Tesorero", foto: "assets/directiva/yosguar-garcia.jpg", hitos: [], bio: [] },
    { nombre: "Pedro Rojas", cargo: "Secretario", foto: "assets/directiva/pedro-rojas.jpg", hitos: ["Jugador de Atléticos del Caribe · #5"], equipo: "atleticos", bio: [] },
    { nombre: "Wilson Terán", cargo: "Director de Mantenimiento", foto: "assets/directiva/wilson-teran.jpg", hitos: ["Jugador de Atléticos del Caribe · #3"], equipo: "atleticos", bio: [] }
  ],

  /* El primero de la lista es el actual. Ejemplo de formato:
     { jornada: "Jornada 1", fecha: "2026-11-08", nombre: "...", equipo: "pumas",
       numero: "12", posicion: "Infield", foto: "assets/jugadores/....jpg",
       linea: "4-5, 2 HR, 6 CI", bio: ["Párrafo 1", "Párrafo 2"] } */
  /* Portada rotativa de la página de inicio: titulares de la última jornada.
     Cada titular es una "diapositiva". Si trae visita/local se dibuja el marcador con los logos;
     si trae img, se usa la foto de fondo. El primero es el que aparece al abrir la página. */
  /* La Copa de las 9 ciudades, de norte a sur. equipos = ids de los equipos de cada ciudad.
     Santiago no tiene equipo propio: aporta jugadores (por eso va con sigla y una nota). */
  ciudades: [
    { nombre: "Illapel", equipos: ["bombarderos"] },
    { nombre: "Salamanca", equipos: ["pumas", "masterpumas"] },
    { nombre: "La Ligua", equipos: ["atleticos", "blessed"] },
    { nombre: "Maitencillo", equipos: ["maitencillo"] },
    { nombre: "La Calera", equipos: ["bravos"] },
    { nombre: "Quillota", equipos: ["pandas"] },
    { nombre: "San Felipe", equipos: ["guaros"] },
    { nombre: "Los Andes", equipos: ["andes"] },
    { nombre: "Santiago", equipos: [], sigla: "RM", nota: "La capital, presente en el roster de Pumas" }
  ],

  /* Videos de los juegos en YouTube (solo el enlace, no ocupan espacio en la página).
     Se muestran en la portada rotativa y en los resultados del calendario. */
  videos: [
    { fecha: "2026-11-01", equipos: ["atleticos", "pumas"], url: "https://www.youtube.com/live/cZ3_jgf5_o4" },
    { fecha: "2026-11-01", equipos: ["pumas", "andes"], url: "https://www.youtube.com/live/rBpI-Nb_UO0" },
    { fecha: "2026-11-01", equipos: ["bombarderos", "bravos"], url: "https://www.youtube.com/live/LzdozK4Mh94" },
    { fecha: "2026-11-01", equipos: ["pandas", "guaros"], url: "https://www.youtube.com/live/BLR1xgPEfPs" },
    { fecha: "2026-11-01", equipos: ["bravos", "pandas"], url: "https://www.youtube.com/live/t8dnIr70Db4" }
  ],

  /* Patrocinadores. El primero aparece destacado en la página de inicio; todos salen en la franja
     "Patrocinador oficial" al final de las demás secciones. url es opcional (Instagram o página web). */
  patrocinadores: [],

  portada: {
    jornada: "Jornada 10",
    fecha: "2026-11-08",
    slides: [
      {"tag": "Perfil City 9 · 20 preguntas", "img": "assets/noticias/roberto-cubillan-portada.jpg", "pos": "74% 35%", "alt": "Roberto Cubillán, cátcher de Bombarderos de Illapel, en el turno al bate", "titulo": "20 preguntas con Roberto Cubillán", "bajada": "El cátcher maracucho de Bombarderos de Illapel, doble campeón jonronero, habla de su paso por el béisbol, sus inicios en Chile y su familia.", "corto": "Perfil City 9: Roberto Cubillán", "link": "#articulo-perfil-roberto-cubillan"},
      { tag: "Jornada 11 · Domingo 15 de noviembre", img: "assets/noticias/jornada-11-flyer.jpg", pos: "center 28%", alt: "Programación de la Jornada 11 de la Copa City 9",
        titulo: "Jornada 11: cinco juegos este domingo",
        bajada: "10:00 Atléticos vs Litoral · 12:00 Bombarderos vs Los Andes · 14:00 Blessed vs Máster Pumas · 16:00 Pandas vs Atléticos · 18:00 Máster Pumas vs Pandas.",
        corto: "Programación de la Jornada 11", link: "#articulo-jornada-11-programacion" },
      {"tag": "Perfil City 9 · 20 preguntas", "img": "assets/noticias/alexis-colina-portada.jpg", "pos": "82% 30%", "alt": "Alexis Colina, segunda base y campocorto de Pumas de Salamanca", "titulo": "20 preguntas con Alexis Colina", "bajada": "De Los Guayos, Carabobo, a los Pumas de Salamanca: el comerciante y fundador de Los Guayos en Santiago habla de su familia, su fe y su pasión por el softbol.", "corto": "Perfil City 9: Alexis Colina", "link": "#articulo-perfil-alexis-colina"},
      {"tag": "Orgullo Puma · Campeón bate", "img": "assets/noticias/wilmer-borjas-portada.jpg", "pos": "80% 40%", "alt": "Wilmer Borjas, de Pumas de Salamanca, batea en un juego. Foto: @agvisuals.cl", "titulo": "Wilmer Borjas, campeón bate en Cerro Navia", "bajada": "El lanzador y utility zuliano de los Pumas de Salamanca recibió el galardón de campeón bate de la Liga de Cerro Navia. ¡Felicitaciones, Wilmer!", "corto": "Wilmer Borjas, campeón bate", "link": "#articulo-wilmer-borjas-campeon-bate-cerro-navia"},
      {"tag": "Jornada 10 · Domingo 8 de noviembre", "img": "assets/noticias/j10-bravos-celebra.jpg", "pos": "center 45%", "alt": "Bravos de La Calera celebra su triunfo ante Guaros de San Felipe", "titulo": "Cayó el campeón", "bajada": "Bravos de La Calera venció 25 a 15 a Guaros de San Felipe, que queda al borde de despedirse de la defensa del título.", "corto": "Bravos derrotó al campeón", "link": "#articulo-j10-cayo-el-campeon"},
      {"tag": "Jornada 10 · Domingo 8 de noviembre", "img": "assets/noticias/j10-blessed-bateador.jpg", "pos": "center 40%", "alt": "Bateador de Blessed Barber en el Estadio La Ligua Park", "titulo": "Bendecidos, con pie y medio en la semifinal", "bajada": "Blessed Barber ganó sus dos juegos, tomó el primer lugar de la Copa City 9 y dejó la semifinal prácticamente en el bolsillo.", "corto": "Blessed es el nuevo líder", "link": "#articulo-j10-bendecidos-pie-y-medio-semifinal"},
      {"tag": "Juego 1 · Jornada 10", "visita": "andes", "cv": 8, "local": "blessed", "cl": 11, "img": "assets/jornadas/j10-flyer.jpg", "pos": "center 30%", "alt": "Programación de la Jornada 10 de la Copa City 9", "titulo": "Blessed abrió el día con triunfo", "bajada": "Blessed Barber venció 11 a 8 a Los Andes al mediodía, en el primero de sus dos juegos del domingo.", "corto": "Blessed superó a Los Andes", "link": "#articulo-j10-bendecidos-pie-y-medio-semifinal"},
      {"tag": "Juego 2 · Jornada 10", "visita": "blessed", "cv": 5, "local": "bravos", "cl": 3, "img": "assets/noticias/j10-blessed-bateador.jpg", "pos": "center 40%", "alt": "Bateador de Blessed Barber en el Estadio La Ligua Park", "titulo": "Duelo de líderes para los morados", "bajada": "En el juego de menos carreras del día, Blessed Barber le ganó 5 a 3 a Bravos de La Calera y se quedó con el primer lugar.", "corto": "Blessed ganó el duelo directo", "link": "#articulo-j10-bendecidos-pie-y-medio-semifinal"},
      {"tag": "Juego 3 · Jornada 10", "visita": "bravos", "cv": 25, "local": "guaros", "cl": 15, "img": "assets/noticias/j10-bravos-celebra.jpg", "pos": "center 45%", "alt": "Bravos de La Calera celebra su triunfo ante Guaros de San Felipe", "titulo": "¡Récord de carreras!", "bajada": "Dos horas después de caer ante Blessed, Bravos anotó 25 carreras, la cifra más alta de un equipo en la Copa, y derrotó al campeón Guaros.", "corto": "Bravos anotó 25 ante Guaros", "link": "#articulo-j10-cayo-el-campeon"},
      {"tag": "Opinión · La directiva de la Copa City 9", "img": "assets/noticias/directiva-portada.jpg", "pos": "center 40%", "alt": "Pedro Rojas, Wilson Terán y Yosguar García, de la directiva de la Copa City 9", "titulo": "Lo que no se ve antes del domingo", "bajada": "Wilson Terán, Pedro Rojas y Yosguar García sacan tiempo entre semana para limpiar, podar y mejorar La Ligua Park. Una columna de Migner Acosta sobre el trabajo de la directiva.", "corto": "El trabajo de la directiva", "link": "#articulo-directiva-trabajo-que-no-se-ve"},
      {"tag": "Equipos de la Copa · Bravos de La Calera", "img": "assets/noticias/bravos-portada.jpg", "pos": "center 45%", "alt": "Roster oficial de Bravos de La Calera", "titulo": "Bravos: del mercado al diamante", "bajada": "Trabajadores del mercado de La Calera que juegan después de la jornada laboral. Alegría, velocidad y el poder de los hermanos Carlos. Conoce al equipo vinotinto.", "corto": "Conoce a Bravos de La Calera", "link": "#articulo-equipos-bravos-de-la-calera"},
      {"tag": "Vida de club · Pumas de Salamanca", "img": "assets/noticias/pumas-convivencia-portada.jpg", "pos": "center 40%", "alt": "Jugadores y amigos de Pumas de Salamanca en su convivencia en La Ligua Park", "titulo": "Pumas celebró en familia", "bajada": "Asado, Halloween y dos victorias: jugadores, esposas, familiares y amigos de Pumas de Salamanca hicieron del costado izquierdo de La Ligua Park su casa.", "corto": "La convivencia de Pumas en La Ligua Park", "link": "#articulo-pumas-convivencia-halloween"}
    ]
  },

  jugadorSemana: [],

  /* Programación semanal. Se carga desde el panel privado (pestaña Programación).
     Esta es solo la programación inicial. En cada partido el primer equipo es visita y el segundo es local.
     Formato: { n: 9, fecha: "2026-11-01", partidos: [["visita","local","10:00"], ...] } */
  programacion: [
    { n: 9, fecha: "2026-11-01", partidos: [["atleticos","pumas","10:00"], ["pumas","andes","12:00"], ["bombarderos","bravos","14:00"], ["pandas","guaros","16:00"], ["bravos","pandas","18:00"]] },
    { n: 10, fecha: "2026-11-08", partidos: [["andes","blessed","12:00"], ["blessed","bravos","14:00"], ["bravos","guaros","16:00"]] },
    { n: 11, fecha: "2026-11-15", partidos: [["atleticos","maitencillo","10:00"], ["bombarderos","andes","12:00"], ["blessed","masterpumas","14:00"], ["pandas","atleticos","16:00"], ["masterpumas","pandas","18:00"]] }
  ],

  /* Encuestas y votaciones del público. Cada persona vota una vez por encuesta.
     estado: "abierta" o "cerrada". Todas cierran solas el viernes a las 22:00 (hora de Chile).
     tipo "mvp": candidatos: "auto" toma los 6 bateadores más destacados de la fecha indicada
     (o de la última fecha jugada si no se indica). También se puede dar una lista:
       opciones: [{ id: "jugador-1", texto: "Nombre", equipo: "pumas", linea: "3-4, 1 HR" }]
     tipo "equipos": opciones con el id del equipo.
     votos: votos contados fuera de la página (por ejemplo, en Instagram); se suman a los de la página. */
  encuestas: [
    {
      id: "mvp-2026-11-08",
      tipo: "mvp",
      pregunta: "MVP del público · Jornada 10, domingo 8 de noviembre",
      descripcion: "Un candidato por equipo: el bateador más destacado de cada club en la Jornada 10. Vota por tu favorito.",
      estado: "abierta",
      cierra: "2026-11-13T22:00:00-03:00",
      fecha: "2026-11-08",
      opciones: [
        { id: "j10mathe", texto: "Maikol Matheus", equipo: "blessed", linea: "4-6, 1 2B, 3 HR, 4 CI, 3 CA (2 juegos)" },
        { id: "j10cjavi", texto: "Carlos Javier", equipo: "bravos", linea: "2-7, 2 HR, 3 CI, 4 CA (2 juegos)" },
        { id: "j10vrami", texto: "Víctor Ramírez", equipo: "guaros", linea: "2-3, 1 HR, 3 CI, 1 CA" },
        { id: "j10lrive", texto: "Luis Rivero", equipo: "andes", linea: "1-3, 1 HR, 1 CI, 1 BB" }
      ]
    },
    {
      id: "mvp-2026-11-01",
      tipo: "mvp",
      pregunta: "MVP del público · Jornada 9, domingo 1 de noviembre",
      descripcion: "Un candidato por equipo: el bateador más destacado de cada club en la Jornada 9. Vota por tu favorito.",
      estado: "abierta",
      cierra: "2026-11-06T22:00:00-03:00",
      fecha: "2026-11-01",
      opciones: [
        { id: "uhx3qovn", texto: "Cristian Toro", equipo: "pumas", linea: "4-9, 2 HR, 4 CI, 3 CA (2 juegos)" },
        { id: "33iov69h", texto: "Carlos Gabriel", equipo: "bravos", linea: "3-7, 1 3B, 2 HR, 3 CI (2 juegos)" },
        { id: "lazh3cau", texto: "Julio Romero", equipo: "pandas", linea: "2-4, 1 3B, 1 HR, 4 CI, 3 CA (2 juegos)" },
        { id: "ejnj4b7h", texto: "Jhonny Colmenares", equipo: "guaros", linea: "3-3, 1 HR, 2 CI" },
        { id: "m8up7wpm", texto: "Kennedy Infante", equipo: "bombarderos", linea: "3-3, 2 CA, 1 CI" },
        { id: "batskwus", texto: "Wilson Terán", equipo: "atleticos", linea: "3-3, 1 2B, 2 CI, 3 CA" }
      ]
    },
    {
      id: "mvp-2026-10-18",
      tipo: "mvp",
      pregunta: "MVP del público · Fecha del 18 de octubre",
      descripcion: "Los candidatos son los seis bateadores más destacados de la fecha.",
      estado: "abierta",
      cierra: "2026-10-30T22:00:00-03:00",
      fecha: "2026-10-18",
      candidatos: "auto"
    },
    {
      id: "campeon",
      tipo: "equipos",
      pregunta: "¿Quién será el campeón de la Copa City 9?",
      estado: "abierta",
      cierra: "2026-10-30T22:00:00-03:00",
      opciones: [
        { equipo: "atleticos", texto: "Atléticos del Caribe" },
        { equipo: "masterpumas", texto: "Máster Pumas" },
        { equipo: "bombarderos", texto: "Bombarderos de Illapel" },
        { equipo: "guaros", texto: "Guaros de San Felipe" },
        { equipo: "andes", texto: "Los Andes" },
        { equipo: "pandas", texto: "Pandas de Quillota" },
        { equipo: "blessed", texto: "Blessed Barber's" },
        { equipo: "maitencillo", texto: "Litoral Maitencillo" },
        { equipo: "bravos", texto: "Bravos de La Calera" },
        { equipo: "pumas", texto: "Pumas de Salamanca" }
      ]
    }
  ],

  /* Canción de fondo. Poner el archivo .mp3 en assets/musica/ y escribir aquí su ruta. */
  musica: { archivo: "assets/musica/jingle-copa-city-9.mp3", titulo: "Jingle oficial Copa City 9", volumen: 0.45 },

  /* Pronósticos de la liga para juegos del calendario (opcional; la página
     además calcula la probabilidad según el rendimiento de cada equipo).
     { fecha: "2026-11-08", local: "pumas", visita: "atleticos", favorito: "pumas", comentario: "..." } */
  pronosticos: [],

  reglamento: [
    {
      titulo: "Formato",
      puntos: [
        "Torneo interregional de la Zona Centro de Chile: 4ª Región, 5ª Región y Región Metropolitana.",
        "Participan 10 equipos de 9 ciudades, durante 3,5 meses de competencia.",
        "Todos los juegos se disputan en la sede única del torneo: el Estadio La Ligua Park.",
        "Los juegos son a 7 innings.",
        "Fase regular a una vuelta: 45 partidos, 9 por equipo.",
        "Las jornadas se programan semana a semana y se publican en la sección Calendario.",
        "Fase final: semifinales 2° vs 3° y 1° vs 4°; consolación 5° vs 8° y 6° vs 7°.",
        "Cierre: juego por el 3er lugar, final de consolación y gran final de campeonato.",
        "Los juegos se transmiten en vivo por YouTube e Instagram (@ligadesoftbol_laligua y @mignerentodo)."
      ]
    },
    {
      titulo: "Tabla de posiciones",
      puntos: [
        "Juego ganado: 3 puntos. Juego empatado: 1 punto. Juego perdido: 0 puntos.",
        "Empate en puntos: decide el porcentaje de juegos ganados (PCT).",
        "Si persiste: decide la relación de carreras anotadas sobre carreras anotadas más recibidas (%C)."
      ]
    },
    {
      titulo: "Rosters",
      puntos: [
        "Cada equipo inscribe un roster de 25 jugadores.",
        "En cada juego participan al menos 18 jugadores."
      ]
    },
    {
      titulo: "Cómo se calculan las estadísticas",
      puntos: [
        "VB (turnos legales) = apariciones al plato − bases por bolas − sacrificios.",
        "AVG = hits / VB. OBP = (hits + bases por bolas) / apariciones al plato. SLG = bases alcanzadas / VB. OPS = OBP + SLG.",
        "Para los líderes de AVG y OPS se exige un mínimo de turnos legales."
      ]
    }
  ],

  /* Acuerdos de las reuniones post jornada. Formato:
     { fecha: "2026-11-09", reunion: "Reunión post Jornada 1", puntos: ["Acuerdo 1", "Acuerdo 2"] } */
  acuerdos: [],

  galeria: [
    { src: "assets/galeria/cc9-20.jpg", pie: "Litoral Maitencillo" },
    { src: "assets/galeria/cc9-07.jpg", pie: "Bombarderos de Illapel" },
    { src: "assets/galeria/cc9-18.jpg", pie: "Pumas al lanzamiento" },
    { src: "assets/galeria/cc9-19.jpg", pie: "En la caja de bateo" },
    { src: "assets/galeria/cc9-10.jpg", pie: "Pumas de Salamanca" },
    { src: "assets/galeria/cc9-11.jpg", pie: "En el montículo" },
    { src: "assets/galeria/cc9-12.jpg", pie: "Pumas y Blessed Barber's" },
    { src: "assets/galeria/cc9-14.jpg", pie: "Litoral Maitencillo al lanzamiento" },
    { src: "assets/galeria/cc9-06.jpg", pie: "Al bate" },
    { src: "assets/galeria/cc9-09.jpg", pie: "El dugout de los Pumas" },
    { src: "assets/galeria/cc9-08.jpg", pie: "Pumas y Bravos" },
    { src: "assets/galeria/cc9-01.jpg", pie: "Encuentro en la cancha" },
    { src: "assets/galeria/cc9-04.jpg", pie: "Compañeros de cancha" },
    { src: "assets/galeria/cc9-02.jpg", pie: "Antes del juego" },
    { src: "assets/galeria/cc9-03.jpg", pie: "Después del juego" },
    { src: "assets/galeria/cc9-05.jpg", pie: "Camiseta nueva" },
    { src: "assets/galeria/cc9-15.jpg", pie: "Con los Pumas de Salamanca" },
    { src: "assets/galeria/cc9-17.jpg", pie: "Saludo entre rivales" },
    { src: "assets/galeria/cc9-16.jpg", pie: "Amigos del sóftbol" },
    { src: "assets/galeria/cc9-13.jpg", pie: "La familia en el estadio" }
  ],

  /* Publicaciones preparadas con Claude (se suman a las del panel; las del panel mandan).
     Formato igual al del panel. Las fotos van en assets/noticias/. */
  publicaciones: [
    {
      "id": "perfil-roberto-cubillan",
      "tipo": "perfil",
      "titulo": "Perfil City 9: 20 preguntas con Roberto Cubillán",
      "bajada": "Formado en el béisbol de Venezuela y República Dominicana y observado por organizaciones de Grandes Ligas, el cátcher maracucho es hoy el poder de Bombarderos de Illapel. Maestro mueblista, doble campeón jonronero y hombre de familia, cuenta lo duro que fue empezar en Chile y por qué el domingo es para disfrutar.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-12",
      "equipo": "bombarderos",
      "portada": "assets/noticias/roberto-cubillan-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Roberto Cubillán es maracucho y creció con un guante y un bate en la mano. Hizo carrera en el béisbol desde las categorías infantiles hasta la juvenil en Venezuela y en República Dominicana, y fue observado por organizaciones de equipos de las Grandes Ligas, hasta que una lesión le cerró ese camino. En Chile ha vestido las camisetas de Marabinos, Guanareños y Pumas de Salamanca, y en cada equipo dejó la misma carta de presentación: el poder de su bate. Esas credenciales lo llevaron a ser contratado por su equipo actual, Bombarderos de Illapel. Estas son sus 20 respuestas."
        },
        {
          "t": "img",
          "id": "assets/noticias/roberto-cubillan-pumas-rojo.jpg",
          "pie": ""
        },
        {
          "t": "h",
          "x": "Bloque 1: La persona, la familia y el día a día"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "1. ¿Cómo te llamas y de qué ciudad y país vienes?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Roberto Cubillán, y vengo de Maracaibo, estado Zulia."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "2. ¿Con quién vives en Chile?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Vivo con mi esposa, y tengo casi toda mi familia más cercana acá en Chile."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "3. ¿Cuál era tu sueño cuando eras niño?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Ser jugador profesional y llegar a Grandes Ligas."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "4. ¿A qué te dedicabas en tu país y qué haces hoy en Chile?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Yo me dedicaba al béisbol en República Dominicana hasta que me lesioné y no pude seguir. Acá en Chile soy maestro mueblista."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "5. ¿En qué año llegaste a Chile y qué fue lo más duro al principio?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Llegué en el 2020, y lo más duro fue poder establecernos acá en Chile, ya que nos tocó, como a la mayoría, vivir arrimados y dormir en la sala de un departamento de una pieza."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "6. ¿Cuál es tu comida favorita de tu tierra y tu plato chileno preferido?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Mi comida favorita de Venezuela es el arroz con pollo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "7. ¿Qué música o artista no puede faltar en tu auto o en tus audífonos?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Gilberto Santa Rosa. Ese es el hombre."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "8. Si pudieras tener el auto de tus sueños, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Un Camaro."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "9. ¿Qué consejo les das a los niños y jóvenes que te ven jugar o trabajar?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Que sean disciplinados en el camino que desean emprender."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "10. En una sola palabra, ¿qué significa tu familia para ti?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Amor."
        },
        {
          "t": "h",
          "x": "Bloque 2: La pasión por el sóftbol"
        },
        {
          "t": "img",
          "id": "assets/noticias/roberto-cubillan-pumas-salamanca.jpg",
          "pie": "Junto a un compañero de Pumas de Salamanca, otra de las camisetas que ha defendido en Chile"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "11. ¿A qué edad empezaste a jugar o a meterte en el sóftbol?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Empecé a los 19 años."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "12. ¿Por qué juegas o te gusta el sóftbol y no otro deporte?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Por el hecho de haber jugado béisbol toda mi vida, y porque no soy bueno para otro deporte."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "13. ¿Cuál es tu posición en el campo o tu rol en el equipo?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Soy el cátcher del equipo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "14. ¿Cuál ha sido tu momento o logro más grande en el sóftbol?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Haber quedado campeón jonronero en dos ligas distintas al mismo tiempo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "15. ¿Qué es lo que más te gusta del ambiente de los domingos de sóftbol?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "El hecho de compartir con mis compañeros."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "16. Si tuvieras que definir el sóftbol en una palabra, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Hobby."
        },
        {
          "t": "h",
          "x": "Bloque 3: La Copa City 9"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "17. ¿En qué equipo juegas o qué función cumples en la Copa City 9?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Soy del equipo Bombarderos, y bueno, soy un jugador más."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "18. ¿Cuál es tu meta principal con tu equipo para este torneo?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Bueno, que lleguemos a la final y quedemos campeones."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "19. ¿Cómo ves el trabajo y la gestión de la actual directiva de la Liga de La Ligua?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Creo que le han puesto empeño y han levantado una liga desde cero. Eso va a atraer a buenos equipos."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "20. ¿Qué les dices a los fanáticos y a las familias que nos acompañan cada fin de semana?"
        },
        {
          "t": "r",
          "quien": "Roberto Cubillán",
          "x": "Que disfrutemos del domingo, ya que todos vamos a distraernos. No nos lo tomemos muy a pecho, que es solo un juego. Evitemos problemas y apoyen fuertemente a su equipo."
        },
        {
          "t": "img",
          "id": "assets/noticias/roberto-cubillan-terno.jpg",
          "pie": ""
        }
      ]
    },
    {
      "id": "jornada-11-programacion",
      "tipo": "noticia",
      "titulo": "Jornada 11: cinco juegos este domingo en La Ligua Park",
      "bajada": "Atléticos, Pandas y Máster Pumas juegan dos veces en una jornada maratónica que arranca a las 10:00 y cierra a las 18:00. Transmisión en vivo por YouTube e Instagram.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-11",
      "portada": "assets/noticias/jornada-11-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "La Copa City 9 vuelve este domingo 15 de noviembre al Estadio La Ligua Park con la Jornada 11: cinco juegos desde las 10:00 hasta el último lanzamiento de la tarde. Atléticos del Caribe, Pandas de Quillota y Máster Pumas tendrán doble jornada."
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-flyer.jpg",
          "pie": "Programación de la Jornada 11 · Domingo 15 de noviembre · Estadio La Ligua Park"
        },
        {
          "t": "h",
          "x": "Juego por juego"
        },
        {
          "t": "lista",
          "items": [
            "10:00 · Atléticos del Caribe vs Litoral Maitencillo",
            "12:00 · Bombarderos de Illapel vs Los Andes",
            "14:00 · Blessed Barber vs Máster Pumas",
            "16:00 · Pandas de Quillota vs Atléticos del Caribe",
            "18:00 · Máster Pumas vs Pandas de Quillota"
          ]
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-juego1.jpg",
          "pie": "Juego 1 · 10:00 · Atléticos del Caribe vs Litoral Maitencillo"
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-juego2.jpg",
          "pie": "Juego 2 · 12:00 · Bombarderos de Illapel vs Los Andes"
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-juego3.jpg",
          "pie": "Juego 3 · 14:00 · Blessed Barber vs Máster Pumas"
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-juego4.jpg",
          "pie": "Juego 4 · 16:00 · Pandas de Quillota vs Atléticos del Caribe"
        },
        {
          "t": "img",
          "id": "assets/noticias/jornada-11-juego5.jpg",
          "pie": "Juego 5 · 18:00 · Máster Pumas vs Pandas de Quillota"
        },
        {
          "t": "p",
          "x": "Todos los juegos se transmiten en vivo por YouTube e Instagram en @ligadesoftbol_laligua y @mignerentodo. ¡Los esperamos en La Ligua Park!"
        }
      ]
    },
    {
      "id": "perfil-alexis-colina",
      "tipo": "perfil",
      "titulo": "Perfil City 9: 20 preguntas con Alexis Colina",
      "bajada": "El segunda base y campocorto de Pumas de Salamanca llegó de Los Guayos, Carabobo, en 2021. Comerciante, fundador del equipo Los Guayos en Santiago y alguna vez al frente de la liga, habla de los hijos que extraña, de su fe y de por qué los sueños no tienen fronteras.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-11",
      "equipo": "pumas",
      "portada": "assets/noticias/alexis-colina-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Alexis Alexander Colina Vásquez, \"Colina\" para el mundo del softbol, es carabobeño de Los Guayos y trabajador desde los 12 años. Llegó a Chile en 2021, levantó su propio negocio y fundó un equipo de softbol en Santiago. Hoy juega con Pumas de Salamanca en la Copa City 9. Estas son sus 20 respuestas."
        },
        {
          "t": "h",
          "x": "Bloque 1: La persona, la familia y el día a día"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "1. ¿Cómo te llamas y de qué ciudad y país vienes?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Mi nombre es Alexis Alexander Colina Vásquez, aunque deportivamente me conocen como Colina. Soy orgullosamente venezolano, del estado Carabobo, específicamente de un pueblo llamado Los Guayos. Actualmente vivo en Santiago, Chile, una ciudad que me ha brindado muchas oportunidades y donde he podido crecer tanto personal como profesionalmente."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "2. ¿Con quién vives en Chile?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Actualmente vivo con una amiga, quien ha sido una parte fundamental de mi vida. Hemos construido muchas cosas juntos y siempre tratamos de apoyarnos en cada proyecto y cada desafío. Para mí, tener a alguien que te acompañe en los buenos y malos momentos es una bendición."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "3. ¿Cuál era tu sueño cuando eras niño?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Desde pequeño siempre soñé con salir adelante, tener mis propias cosas y poder ayudar a mi familia. Con los años entendí que los sueños no se cumplen solos, sino con sacrificio, disciplina y mucha fe en Dios."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "4. ¿A qué te dedicabas en tu país y qué haces hoy en Chile?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "En Venezuela me dedicaba a hacer cualquier trabajo honrado, porque desde los 12 años siempre he sido un muchacho trabajador independiente. Al llegar a Chile continué trabajando fuertemente hasta lograr tener mi propio negocio, una tienda de ropa virtual en Instagram. Poco a poco fui teniendo otras entradas de dinero, como comprar y vender autos. A eso me dedico actualmente: soy comerciante."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "5. ¿En qué año llegaste a Chile y qué fue lo más duro al principio?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Llegué a Chile en el año 2021. Creo que una de las cosas más difíciles de emigrar es dejar atrás a tu familia, tus costumbres y comenzar prácticamente desde cero en otro país. Pero también aprendí que las dificultades te hacen más fuerte y que cada sacrificio tiene su recompensa. Hoy agradezco las oportunidades que he tenido en este país. Tengo muchos años sin ver a mis hijos, los extraño muchísimo y anhelo con locura poder algún día volver a abrazarlos y decirles lo mucho que los amo."
        },
        {
          "t": "img",
          "id": "assets/noticias/alexis-colina-turno.jpg",
          "pie": ""
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "6. ¿Cuál es tu comida favorita de tu tierra y tu plato chileno preferido?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "De Venezuela, sin duda alguna, me quedo con la arepa. Es una de esas comidas que nunca pueden faltar y que siempre te recuerdan tus raíces. En cuanto a la comida chilena, no tengo un plato favorito como tal, pero disfruto muchísimo un buen asado o un completo italiano."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "7. ¿Qué música o artista no puede faltar en tu auto o en tus audífonos?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Me gusta mucho la salsa porque representa mis raíces venezolanas y nuestras tradiciones. Pero también disfruto bastante el dembow, así que tengo gustos musicales variados. Todo depende del momento y del ánimo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "8. Si pudieras tener el auto de tus sueños, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Me gustan mucho las camionetas grandes, especialmente las Toyota o las Honda. Me encanta su presencia, comodidad y estilo. Son de esos gustos que espero algún día poder cumplir."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "9. ¿Qué consejo les das a los niños y jóvenes que te ven jugar o trabajar?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Que nunca permitan que las circunstancias limiten sus sueños. Que sean disciplinados, respetuosos y constantes. No importa de dónde vengas ni cuántas veces te equivoques, lo importante es levantarte y seguir trabajando por lo que quieres. Y, sobre todo, que nunca pierdan la fe en Dios."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "10. En una sola palabra, ¿qué significa tu familia para ti?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Todo. Porque mi familia es mi motivación, y que sepan que yo voy a ser ese tipo de la familia que Dios usa para cambiar toda la historia de su familia. Los amo."
        },
        {
          "t": "h",
          "x": "Bloque 2: La pasión por el sóftbol"
        },
        {
          "t": "img",
          "id": "assets/noticias/alexis-colina-swing.jpg",
          "pie": ""
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "11. ¿A qué edad empezaste a jugar o a meterte en el sóftbol?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Comencé a jugar béisbol a los 12 años en Venezuela. Desde entonces nació mi pasión por este deporte. Con el tiempo también me involucré en el sóftbol, una disciplina que disfruto muchísimo y que hoy forma parte importante de mi vida."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "12. ¿Por qué juegas o te gusta el sóftbol y no otro deporte?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Porque es un deporte que me apasiona. Me gusta competir, exigirme y compartir con mis compañeros. Para mí no se trata solamente de ganar o perder, sino de disfrutar cada juego, aprender y seguir mejorando."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "13. ¿Cuál es tu posición en el campo o tu rol en el equipo?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Me desempeño principalmente como segunda base y campocorto. Son posiciones que me gustan porque requieren concentración, rapidez y responsabilidad. Siempre trato de aportar tanto ofensiva como defensivamente y dar lo mejor de mí por el equipo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "14. ¿Cuál ha sido tu momento o logro más grande en el sóftbol?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Creo que uno de mis mayores logros ha sido poder crear mi propio equipo de sóftbol en Santiago de Chile, Los Guayos, junto con mi hermano Daniel Carballo y Cristian Toro, que son fundadores conmigo del equipo. Una experiencia que me dejó muchos aprendizajes, grandes amistades y la satisfacción de haber contribuido con nuestro deporte. Más allá de los títulos individuales, eso tiene un valor muy especial para mí."
        },
        {
          "t": "img",
          "id": "assets/noticias/alexis-colina-los-guayos.jpg",
          "pie": "Los Guayos, el equipo que Alexis fundó en Santiago"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "15. ¿Qué es lo que más te gusta del ambiente de los domingos de sóftbol?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "El ambiente familiar, la rivalidad sana y la pasión que demuestra cada equipo. Me gusta ver a las familias apoyando, a los jugadores compartiendo y a las personas disfrutando de un domingo diferente. Eso es lo bonito del deporte: que une a las personas."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "16. Si tuvieras que definir el sóftbol en una palabra, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Pasión. Porque cuando realmente amas este deporte, lo vives dentro y fuera del terreno."
        },
        {
          "t": "h",
          "x": "Bloque 3: La Copa City 9"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "17. ¿En qué equipo juegas o qué función cumples en la Copa City 9?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Actualmente juego con Pumas de Salamanca, un equipo que me dio la oportunidad de jugar con ellos: un grupo unido, competitivo y comprometido."
        },
        {
          "t": "img",
          "id": "assets/noticias/alexis-colina-pumas.jpg",
          "pie": "Con la familia de Pumas de Salamanca"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "18. ¿Cuál es tu meta principal con tu equipo para este torneo?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Nuestra meta es competir al máximo nivel y luchar por el campeonato. Pero más allá de los resultados, quiero que seamos un equipo unido, disciplinado y que se respete dentro y fuera del terreno. Porque los campeonatos son importantes, pero el compañerismo, la responsabilidad y la unión también lo son."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "19. ¿Cómo ves el trabajo y la gestión de la actual directiva de la Liga de La Ligua?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Personalmente, veo muy bien el trabajo que está realizando la directiva actual. Yo tuve la oportunidad de estar al frente de la liga y sé que no es una responsabilidad fácil. Hay que dedicar tiempo, tener paciencia y tomar decisiones que muchas veces no son sencillas. Hoy puedo decir con mucha humildad que siento que están haciendo las cosas incluso mejor de lo que las hice yo, y eso me alegra muchísimo. Porque esto nunca se ha tratado de quién lo hace mejor, sino de que nuestro deporte siga creciendo. Cuentan con mi respeto, mi reconocimiento y mi apoyo cuando lo necesiten. Al final, todos queremos lo mismo: una liga cada día mejor."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "20. ¿Qué les dices a los fanáticos y a las familias que nos acompañan cada fin de semana?"
        },
        {
          "t": "r",
          "quien": "Alexis Colina",
          "x": "Primero que nada, agradecerles de corazón por su apoyo. Ustedes son una parte fundamental de nuestra liga. Los invito a que sigan acompañándonos, que disfruten cada encuentro y que apoyen siempre con respeto. Queremos que el sóftbol de La Ligua siga creciendo y que cada domingo sea una verdadera fiesta deportiva para toda la familia."
        },
        {
          "t": "h",
          "x": "Para cerrar"
        },
        {
          "t": "cita",
          "x": "“Soy Alexis Colina, venezolano de nacimiento, orgulloso de mis raíces y agradecido con Chile por las oportunidades. Creo firmemente que con Dios, disciplina, humildad y perseverancia podemos lograr grandes cosas. Porque los sueños no tienen fronteras.”"
        }
      ]
    },
    {
      "id": "wilmer-borjas-campeon-bate-cerro-navia",
      "tipo": "noticia",
      "titulo": "Wilmer Borjas, campeón bate en Cerro Navia: el zurdo que llena de alegría cada tarde de softbol",
      "bajada": "El lanzador y utility zuliano, jugador insignia de los Pumas de Salamanca, recibió el galardón de campeón bate de la Liga de Cerro Navia, en un torneo donde los Pumas terminaron en el tercer lugar de la categoría Caliche Chata.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-11",
      "equipo": "pumas",
      "portada": "assets/noticias/wilmer-borjas-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Hay jugadores que llenan una planilla y hay jugadores que llenan una tarde. Wilmer Borjas pertenece a los segundos. Cada vez que toma el bate o sube a la lomita, la fanaticada de los Pumas sabe que algo puede pasar, y los amantes del softbol, sin importar la camiseta, se acomodan para mirar. Hoy, mientras defiende el azul y amarillo en la Copa City 9, llega una noticia que confirma lo que en la cancha ya se sabía: Wilmer Borjas es el campeón bate de la Liga de Cerro Navia."
        },
        {
          "t": "h",
          "x": "Un premio con sabor a historia"
        },
        {
          "t": "p",
          "x": "El reconocimiento llegó con la participación de los Pumas de Salamanca en el torneo de la Liga de Cerro Navia, en Santiago, donde el club se quedó con el tercer lugar en la categoría Caliche Chata. Terminar como el mejor bateador de toda una liga capitalina no es casualidad: es fruto de constancia, disciplina y de un ojo que pocos tienen en la caja de bateo."
        },
        {
          "t": "img",
          "id": "assets/noticias/wilmer-borjas-premiacion.jpg",
          "pie": ""
        },
        {
          "t": "h",
          "x": "Un pelotero para todas las posiciones"
        },
        {
          "t": "p",
          "x": "Lanzador reconocido y utility de verdad, Wilmer puede cubrir todas las bases y cualquier posición del campo. Con el madero es un zurdo de poder capaz de abrir el line-up o de asumir la responsabilidad del tercer bate. Esa versatilidad lo convierte en el tipo de pelotero que todo mánager quisiera tener. ¡Jugador acostumbrado a echarse al equipo a sus hombros!"
        },
        {
          "t": "h",
          "x": "De Illapel a Santiago, siempre con jerarquía"
        },
        {
          "t": "p",
          "x": "En la provincia del Choapa ha vestido dos camisetas: debutó con los Cerveceros de Illapel y luego se convirtió en pieza fundamental de los Pumas de Salamanca durante varias temporadas. Ha jugado torneos en Salamanca, Illapel, La Serena, La Ligua y Ovalle, y en Santiago ha tenido un recorrido importante con equipos como Santiago Bistró, Los Theckes y Aligators, entre otros. En cada uno de esos campeonatos ha dejado claro su nivel."
        },
        {
          "t": "img",
          "id": "assets/noticias/wilmer-borjas-pumas.jpg",
          "pie": ""
        },
        {
          "t": "h",
          "x": "Raíces zulianas y un sueño de béisbol profesional"
        },
        {
          "t": "p",
          "x": "Wilmer es venezolano, zuliano, y de joven estuvo muy ligado al béisbol, al punto de firmar con la organización de los Cachorros de Chicago. Un accidente le impidió continuar su carrera profesional, pero no apagó su pasión: como beisbolista ya había dado grandes pasos y muchas satisfacciones a su familia, y esa misma entrega la sigue mostrando hoy en cada diamante de softbol."
        },
        {
          "t": "h",
          "x": "Una familia de deportistas"
        },
        {
          "t": "p",
          "x": "Wilmer es profesor de profesión en Venezuela y hoy, en Chile, trabaja en una fábrica, sin dejar de lado su pasión por el diamante. Su esposa, Marvin MacGregor, también es deportista: fue seleccionada del Zulia en atletismo. Y su hija menor, Sofía Borjas, despunta como futbolista en la categoría sub 15 de la U de Chile. El talento, sin duda, viene de familia."
        },
        {
          "t": "img",
          "id": "assets/noticias/wilmer-borjas-campo.jpg",
          "pie": ""
        },
        {
          "t": "p",
          "x": "Desde la Copa City 9 celebramos este logro de un jugador que honra el softbol con su juego y con su ejemplo. ¡Felicitaciones, Wilmer Borjas!"
        },
        {
          "t": "p",
          "x": "Foto de portada: @agvisuals.cl"
        }
      ]
    },
    {
      "id": "resumen-jornada-9",
      "tipo": "juego",
      "titulo": "Resumen de la Jornada 9: Pumas ruge dos veces y manda en la Copa City 9",
      "bajada": "Doblete de Pumas de Salamanca, se acabó el invicto de Bravos y Guaros sigue con vida. Así se vivió una jornada de cinco juegos en el Estadio La Ligua Park.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-01",
      "portada": "assets/jornadas/j9-pumas-celebra.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Así se vivió la Jornada 9 de la Copa City 9, jugada el domingo 1 de noviembre en el Estadio La Ligua Park. Este resumen reúne los titulares y resultados que acompañaron la portada de la página durante esa semana."
        },
        {
          "t": "h",
          "x": "Juego por juego"
        },
        {
          "t": "cita",
          "x": "Juego 1 · Atléticos del Caribe 11, Pumas de Salamanca 21 · ¡Remontada felina!"
        },
        {
          "t": "img",
          "id": "assets/jornadas/j9-dugout-pumas.jpg",
          "pie": "Jugadores de Pumas de Salamanca en el dugout"
        },
        {
          "t": "p",
          "x": "Pumas de Salamanca vino de atrás, encendió los bates y terminó arrollando 21 carreras por 11 a Atléticos del Caribe en el juego que abrió la Jornada 9."
        },
        {
          "t": "cita",
          "x": "Juego 2 · Pumas de Salamanca 14, Los Andes 6 · Pumas va por la segunda y no perdona"
        },
        {
          "t": "img",
          "id": "assets/jornadas/j9-pumas-ronda.jpg",
          "pie": "Pumas de Salamanca reunido en el campo antes del juego"
        },
        {
          "t": "p",
          "x": "Sin tiempo para respirar, Pumas de Salamanca firmó su segunda victoria del día: 14 carreras por 6 ante Los Andes, y se queda solo en la cima de la tabla."
        },
        {
          "t": "cita",
          "x": "Juego 3 · Bombarderos de Illapel 6, Bravos de La Calera 2 · ¡Se acabó el invicto!"
        },
        {
          "t": "img",
          "id": "assets/jornadas/j9-bombarderos.jpg",
          "pie": "Jugador de Bombarderos de Illapel lanza la bola a primera"
        },
        {
          "t": "p",
          "x": "Bravos de La Calera llegaba con marca perfecta de 4-0, pero Bombarderos de Illapel lo frenó en seco y lo derrotó 6 carreras por 2 en el juego más cerrado de la jornada."
        },
        {
          "t": "cita",
          "x": "Juego 4 · Pandas de Quillota 3, Guaros de San Felipe 16 · Guaros sigue con vida"
        },
        {
          "t": "img",
          "id": "assets/jornadas/j9-pandas-guaros.jpg",
          "pie": "Bateador de Pandas frente al receptor de Guaros"
        },
        {
          "t": "p",
          "x": "Con la espalda contra la pared, Guaros de San Felipe respondió con 16 carreras, despachó 16 por 3 a Pandas de Quillota y se mantiene en la pelea por la clasificación."
        },
        {
          "t": "cita",
          "x": "Juego 5 · Bravos de La Calera 7, Pandas de Quillota 14 · Pandas divide honores"
        },
        {
          "t": "img",
          "id": "assets/jornadas/j9-pandas.jpg",
          "pie": "Jugadores de Pandas de Quillota en el Estadio La Ligua Park"
        },
        {
          "t": "p",
          "x": "Pandas de Quillota se levantó del golpe de la mañana, venció 14 carreras por 7 a Bravos de La Calera y le propinó su segunda derrota seguida en el mismo domingo."
        }
      ]
    },
    {
      "id": "j10-cayo-el-campeon",
      "tipo": "juego",
      "titulo": "Cayó el campeón",
      "bajada": "Bravos de La Calera venció 25 a 15 a Guaros de San Felipe en el cierre de la Jornada 10 y dejó al actual campeón al borde de despedirse de la defensa del título.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-08",
      "portada": "assets/noticias/j10-bravos-celebra.jpg",
      "equipo": "bravos",
      "bloques": [
        {
          "t": "p",
          "x": "El último juego del domingo en el Estadio La Ligua Park tenía cartel de final anticipada y no defraudó. Bravos de La Calera derrotó 25 a 15 a Guaros de San Felipe, el actual campeón, y lo dejó con un pie fuera de la carrera por las semifinales de la Copa City 9."
        },
        {
          "t": "p",
          "x": "Bravos tuvo que sobreponerse a un día largo. Dos horas antes había caído 5 a 3 ante Blessed Barber en un juego de pocas carreras, y llegó al duelo de las 4 de la tarde obligado a reaccionar frente a la ofensiva más productiva del torneo. La respuesta fue una lluvia de carreras: sus 25 anotaciones son la cifra más alta de un equipo en un solo juego de la Copa City 9, una más que las 24 que el propio Bravos le hizo a Máster Pumas en septiembre."
        },
        {
          "t": "p",
          "x": "Guaros no se quedó atrás con el bate. Anotó 15 carreras, una cifra que en esta Copa alcanza para ganar casi cualquier partido, pero no esta vez. Las 40 carreras del juego lo convierten en el segundo partido con más anotaciones del torneo, detrás del 23 a 22 con que Atléticos del Caribe venció a Guaros en octubre. El campeón protagonizó los dos juegos más abiertos de la Copa y perdió ambos."
        },
        {
          "t": "h",
          "x": "Las cuentas del campeón"
        },
        {
          "t": "p",
          "x": "Con la derrota, Guaros queda con 9 puntos (3-5) y ya disputó 8 de sus 9 partidos. Le queda un solo juego, ante Pumas de Salamanca, y aunque lo gane, su techo es de 12 puntos. Tres equipos ya están fuera de su alcance: Blessed Barber (18), Pumas de Salamanca (15) y Bravos de La Calera (15)."
        },
        {
          "t": "p",
          "x": "¿Está eliminado? Matemáticamente, todavía no. Revisamos las más de un millón y medio de combinaciones posibles de los 13 juegos que faltan. Para llegar al cuarto lugar, Guaros tiene que vencer a Pumas y que ningún otro equipo lo supere, algo que solo ocurre por dos caminos: un empate múltiple en 12 puntos que se defina por relación de carreras, donde hoy Guaros tiene ventaja, por ejemplo si Máster Pumas, colista del torneo, gana sus tres juegos, incluido uno ante el líder Blessed; o que al menos dos de los juegos que faltan terminen empatados. Pasa en apenas 2 de cada 100 escenarios."
        },
        {
          "t": "p",
          "x": "Por eso decimos que cayó el campeón: salvo un milagro, la corona cambiará de dueño. Su objetivo realista pasa a ser la Copa de Consolación, que reúne a los equipos del quinto al octavo lugar."
        },
        {
          "t": "h",
          "x": "Bravos, a un paso"
        },
        {
          "t": "p",
          "x": "Para Bravos el triunfo vale doble. Llega a 15 puntos (5-3) y 100 carreras anotadas, iguala a Pumas de Salamanca detrás del líder Blessed Barber y corta una racha de tres derrotas seguidas: las dos de la Jornada 9 y la de este mismo domingo ante Blessed."
        },
        {
          "t": "p",
          "x": "Le queda un juego, ante Pumas de Salamanca, y según nuestros cálculos termina entre los cuatro primeros en más del 99% de las combinaciones posibles. El boleto a semifinales está casi en sus manos."
        },
        {
          "t": "p",
          "x": "El campeón cierra su fase regular ante Pumas de Salamanca. Ya no depende de sí mismo, pero en esta Copa nadie se ha ido sin pelear."
        },
        {
          "t": "p",
          "x": "Transmisión en vivo por YouTube e Instagram: @ligadesoftbol_laligua y @mignerentodo."
        }
      ]
    },
    {
      "id": "j10-bendecidos-pie-y-medio-semifinal",
      "tipo": "juego",
      "titulo": "Bendecidos, con pie y medio en la semifinal",
      "bajada": "Blessed Barber ganó sus dos juegos de la Jornada 10, 11 a 8 ante Los Andes y 5 a 3 ante Bravos de La Calera, tomó el primer lugar de la Copa City 9 y dejó la semifinal prácticamente en el bolsillo.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-08",
      "portada": "assets/noticias/j10-blessed-bateador.jpg",
      "equipo": "blessed",
      "bloques": [
        {
          "t": "p",
          "x": "Doble jornada y doble alegría para Blessed Barber. El equipo de La Ligua jugó dos veces este domingo en el Estadio La Ligua Park y ganó las dos: venció 11 a 8 a Los Andes al mediodía y 5 a 3 a Bravos de La Calera a las 2 de la tarde."
        },
        {
          "t": "h",
          "x": "Dos victorias, dos caras"
        },
        {
          "t": "p",
          "x": "Ante Los Andes cumplió el papel de favorito, aunque tuvo que trabajar. Los Andes le anotó 8 carreras, una cifra alta para la defensa menos castigada de la Copa, pero el bate de Blessed respondió con 11 y se llevó el primer triunfo del día."
        },
        {
          "t": "p",
          "x": "El segundo triunfo pesó más. Bravos de La Calera llegaba igualado con Blessed en 12 puntos, como su rival directo por los primeros lugares de la tabla, y el duelo fue un juego cerrado y de pocas carreras: 5 a 3 para los morados. El dato que lo dice todo: ese mismo Bravos anotó 25 carreras dos horas más tarde ante Guaros."
        },
        {
          "t": "p",
          "x": "Los resultados confirman lo que los números venían diciendo. Blessed Barber recibe 7,4 carreras por juego, el promedio más bajo del torneo, con 52 carreras en contra en siete partidos."
        },
        {
          "t": "h",
          "x": "Primero en la tabla"
        },
        {
          "t": "p",
          "x": "Con 18 puntos y récord de 6-1, Blessed Barber es el nuevo líder de la Copa City 9, tres puntos por encima de Pumas de Salamanca y Bravos de La Calera. Le quedan dos juegos: ante Máster Pumas y ante Atléticos del Caribe."
        },
        {
          "t": "p",
          "x": "Revisamos todas las combinaciones posibles de los 13 juegos que faltan y en ninguna Blessed termina con cuatro equipos por encima en puntos. Solo un escenario extremo lo pondría en riesgo: que pierda sus dos juegos y que Bravos, Bombarderos de Illapel y Atléticos del Caribe ganen todos los suyos para empatarlo en 18 puntos. Aun así, la definición pasaría por la relación de carreras. Ningún otro equipo de la Copa está tan cerca de la semifinal: tiene un pie adentro y el otro en el umbral."
        },
        {
          "t": "p",
          "x": "Con el boleto prácticamente asegurado, la meta ahora es terminar primero: en semifinales, el líder de la fase regular enfrenta al cuarto lugar."
        },
        {
          "t": "p",
          "x": "Transmisión en vivo por YouTube e Instagram: @ligadesoftbol_laligua y @mignerentodo."
        }
      ]
    },
    {
      "id": "directiva-trabajo-que-no-se-ve",
      "tipo": "opinion",
      "titulo": "Lo que no se ve antes del domingo: el trabajo de la directiva de la Copa City 9",
      "bajada": "Cada domingo, La Ligua Park amanece listo para jugar. Detrás de ese campo hay una semana entera de trabajo silencioso, hecho por tres hombres que viven en La Ligua y que le regalan su tiempo al sóftbol.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-07",
      "portada": "assets/noticias/directiva-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Quien llega un domingo al Estadio La Ligua Park ve un campo marcado, las mallas en su lugar, las gradas armadas, el sonido funcionando, un narrador al micrófono y un anotador siguiendo cada turno al bate. Ve a los árbitros listos, el agua fría para los jugadores y la transmisión en vivo. Lo que casi nadie ve es todo lo que pasa antes de que se lance la primera bola. Hoy quiero escribir sobre eso."
        },
        {
          "t": "h",
          "x": "Tres vecinos de La Ligua al servicio del campeonato"
        },
        {
          "t": "p",
          "x": "La directiva de la Copa City 9 somos cuatro personas, y tres de ellas viven en La Ligua: Wilson Terán, director de mantenimiento; Pedro Rojas, secretario, y Yosguar García, “el Árabe”, tesorero. Ellos tres son el corazón de la parte del trabajo que nadie ve."
        },
        {
          "t": "p",
          "x": "Todos tienen su trabajo, su familia y sus obligaciones, como cualquiera. Aun así, entre semana sacan tiempo de su vida diaria para volver al campo. Recogen la basura que queda después de cada domingo, le hacen mejoras al terreno y podan el monte, que en esta época del año crece sin descanso. Lo hacen sin cámaras ni aplausos, muchas veces al final de la tarde, cuando el sol ya se está escondiendo detrás de los cerros. Gracias a ellos, cuando los equipos llegan el domingo, el campo está listo."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-wilson-poda.jpg",
          "pie": "Wilson Terán, director de mantenimiento, poda el monte en los alrededores del campo."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-pedro-poda.jpg",
          "pie": "Pedro Rojas, secretario, desbrozadora en mano en La Ligua Park."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-pedro-atardecer.jpg",
          "pie": "Pedro Rojas al caer la tarde, después de una jornada de poda."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-wilson-atardecer.jpg",
          "pie": "Wilson Terán, al atardecer, listo para seguir con el trabajo en el campo."
        },
        {
          "t": "h",
          "x": "El domingo también se trabaja, y mucho"
        },
        {
          "t": "p",
          "x": "En cada jornada nos toca de todo: poner y quitar las mallas, pintar y marcar el terreno, armar las gradas, instalar la electricidad y el sonido, narrar los juegos y anotar cada partido. También recaudamos el aporte de los equipos, pagamos a los árbitros y compramos el agua para los jugadores. Cuando termina el último out y todos se van a casa, todavía queda desarmar y ordenar."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-yosguar-narracion.jpg",
          "pie": "Yosguar García, “el Árabe”, tesorero, micrófono en mano en la caseta de narración y transmisión."
        },
        {
          "t": "h",
          "x": "Y el trabajo sigue durante la semana"
        },
        {
          "t": "p",
          "x": "Una vez cerrada la jornada empieza otra parte del trabajo. Hay que cargar las estadísticas de cada juego, actualizar la tabla de posiciones, armar la programación de la siguiente jornada y coordinarla con los equipos, que muchas veces tienen complicaciones. Además está la página web, donde publicamos resultados, noticias, perfiles y votaciones, y están las redes sociales, donde contamos lo que pasa en la Copa para que la conozcan más allá de La Ligua Park. Todo eso es visibilizar el torneo, y no se hace solo."
        },
        {
          "t": "h",
          "x": "Un trabajo mancomunado"
        },
        {
          "t": "p",
          "x": "Nadie en esta directiva hace todo, pero entre todos lo hacemos todo. Lo que hacemos no es un cargo, es un compromiso con un campeonato que reúne a diez equipos de nueve ciudades y que se ha convertido en punto de encuentro para cientos de jugadores, familias y aficionados."
        },
        {
          "t": "p",
          "x": "Por eso quise escribir estas líneas. Quiero darle las gracias públicamente a Wilson, a Pedro y a Yosguar por todo lo que hacen sin que nadie se los pida. Quiero también hacer una invitación a los equipos, jugadores y aficionados: cuidemos el campo. Cada bolsa de basura que se lleva de vuelta a casa y cada botella que no queda tirada en las gradas es una tarde menos de limpieza para quienes mantienen este espacio para todos."
        },
        {
          "t": "p",
          "x": "Aquí pueden ver parte de ese trabajo:"
        },
        {
          "t": "video",
          "url": "https://www.instagram.com/reel/Dfa6Mp5tWLP/",
          "pie": "Limpieza y poda del campo de juego de La Ligua Park"
        },
        {
          "t": "p",
          "x": "La próxima vez que lleguen a La Ligua Park y encuentren el campo listo, recuerden que alguien estuvo ahí entre semana, con una desbrozadora al hombro, para que el domingo pudiéramos jugar."
        },
        {
          "t": "img",
          "id": "assets/noticias/directiva-migner-presidente.jpg",
          "pie": "Migner Acosta Yánez, presidente de la directiva de la Copa City 9."
        },
        {
          "t": "p",
          "x": "Migner Acosta Yánez\nPresidente de la directiva, Copa City 9 · Liga de Sóftbol de La Ligua"
        }
      ]
    },
    {
      "id": "limpieza-poda-la-ligua-park",
      "tipo": "noticia",
      "titulo": "La Ligua Park se pone a punto: limpieza y poda del campo de juego",
      "bajada": "Mira en este reel los trabajos de limpieza y poda en el Estadio La Ligua Park, la casa de la Copa City 9.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-06",
      "bloques": [
        {
          "t": "p",
          "x": "El Estadio La Ligua Park, sede única de la Copa City 9, recibió trabajos de limpieza y poda del campo de juego para que los equipos encuentren el diamante en las mejores condiciones en las próximas jornadas."
        },
        {
          "t": "video",
          "url": "https://www.instagram.com/reel/Dfa6Mp5tWLP/",
          "pie": "Limpieza y poda del campo de juego de La Ligua Park"
        }
      ]
    },
    {
      "id": "equipos-bravos-de-la-calera",
      "tipo": "noticia",
      "titulo": "Bravos de La Calera: del mercado al diamante, con el corazón en cada base",
      "bajada": "Trabajan desde temprano entre cajas, frutas y verduras en el mercado de La Calera. Cuando termina la jornada, cambian el delantal por el guante. Así son los Bravos, el equipo vinotinto que llegó a la Copa City 9 para recordarnos por qué amamos este deporte.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-06",
      "equipo": "bravos",
      "portada": "assets/noticias/bravos-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "En la Copa City 9 hay equipos con historia y equipos con estrellas. Los Bravos de La Calera tienen algo que no se compra ni se entrena: hambre de jugar. La mayoría de sus peloteros son trabajadores del mercado de su ciudad, hombres que madrugan, cargan, venden y atienden durante horas, y que aun así, cuando cae la tarde, todavía tienen energía para tomar un bate. Un día decidieron que el sóftbol no podía quedarse solo en conversaciones de pasillo, se juntaron, se inscribieron y hoy defienden el nombre de La Calera frente a las mejores novenas de la zona centro."
        },
        {
          "t": "p",
          "x": "Al frente está Víctor Román, el N° 20, que cumple doble función: dirige desde la línea y capitanea desde el terreno. Es la voz que ordena, el que da el ejemplo y el que mantiene unido a un grupo que trabaja junto toda la semana y que el fin de semana se convierte en familia."
        },
        {
          "t": "h",
          "x": "Un equipo joven que juega sonriendo"
        },
        {
          "t": "p",
          "x": "Si algo distingue a los Bravos es la alegría. Es un equipo mayoritariamente joven y se nota en el dugout: celebran cada hit como si fuera el último, se animan después de cada error y contagian a las gradas del Estadio La Ligua Park. Pero que nadie confunda la sonrisa con falta de seriedad, porque cuando la pelota está en juego, los Bravos corren."
        },
        {
          "t": "h",
          "x": "La velocidad, su mejor arma"
        },
        {
          "t": "p",
          "x": "Su gran fortaleza está en las piernas. Los Bravos corren las bases como pocos en el torneo: convierten sencillos en dobles, toman la base extra en cada descuido y obligan a la defensa rival a jugar apurada. Esa presión constante genera tiros desviados, errores y carreras que no aparecen en ningún pronóstico. No es casualidad que sean el segundo equipo con más triples de la Copa (6). Contra los Bravos, un rodado tranquilo nunca es una jugada segura."
        },
        {
          "t": "h",
          "x": "El poder viene en familia"
        },
        {
          "t": "p",
          "x": "Si la velocidad pone a los corredores en base, los encargados de traerlos a home son los hermanos Carlos Javier (N° 8) y Carlos Gabriel (N° 9), el corazón del lineup calerano. Van mano a mano en la carrera de jonrones: Carlos Gabriel encabeza la tabla de toda la Copa City 9 con 4 cuadrangulares y Carlos Javier le sigue los pasos con 3. Entre los dos suman 7 de los 11 jonrones del equipo."
        },
        {
          "t": "p",
          "x": "La pelea fraterna también se juega en las impulsadas, y ahí los hermanos ocupan los dos primeros lugares del torneo: Carlos Javier lidera con 14 carreras traídas al plato y Carlos Gabriel lo escolta con 12, mientras batea para .476. Una competencia de sangre que entusiasma a sus compañeros y preocupa a los lanzadores rivales."
        },
        {
          "t": "h",
          "x": "Una ofensiva que no da respiro"
        },
        {
          "t": "p",
          "x": "Los números del equipo hablan solos. En seis juegos, los Bravos han anotado 72 carreras, un promedio de 12 por compromiso, con 11 jonrones, 26 dobles y un promedio colectivo de .352. Tienen además la segunda mejor diferencia de carreras de la Copa (+26), solo detrás de Pumas de Salamanca. Con piernas que presionan y bates que castigan, la ofensiva calerana combina lo mejor de dos mundos."
        },
        {
          "t": "h",
          "x": "Un comienzo soñado y una pelea abierta"
        },
        {
          "t": "p",
          "x": "Los Bravos arrancaron la Copa City 9 con cuatro victorias seguidas que sorprendieron a todos: 21 a 7 ante Atléticos del Caribe, 24 a 4 ante Master Pumas, 10 a 9 ante Los Andes y 8 a 6 ante Litoral Maitencillo. Con esa marca perfecta se pusieron entre los equipos a vencer."
        },
        {
          "t": "p",
          "x": "Luego llegó el domingo 1 de noviembre, que recordó lo exigente de este torneo. Bombarderos de Illapel les quitó el invicto (6 a 2) y, ese mismo día, Pandas de Quillota les propinó la segunda derrota (14 a 7). Hoy, con 4 ganados, 2 perdidos y 12 puntos, los Bravos marchan terceros y están en plena lucha por la clasificación. Este domingo 8 de noviembre, a las 16:00, enfrentan a Guaros de San Felipe, el actual campeón, en un juego que puede valer media temporada. Si algo han demostrado estos muchachos es que saben levantarse."
        },
        {
          "t": "p",
          "x": "Porque los Bravos ya ganaron algo más importante. Demostraron que después de una jornada larga de trabajo todavía queda espacio para la pasión, para el compañerismo y para soñar en grande. En La Calera, el mercado cierra temprano, pero el corazón de los Bravos sigue latiendo en el diamante."
        },
        {
          "t": "cita",
          "x": "¡Arriba, Bravos!"
        },
        {
          "t": "h",
          "x": "Ficha del equipo"
        },
        {
          "t": "lista",
          "items": [
            "Ciudad: La Calera",
            "Colores: vinotinto",
            "Mánager y capitán: Víctor Román (N° 20)",
            "Récord: 4 ganados, 2 perdidos · 12 puntos · 3° en la tabla",
            "Fortaleza: velocidad en las bases",
            "Poder ofensivo: los hermanos Carlos Javier (N° 8) y Carlos Gabriel (N° 9)",
            "Próximo juego: domingo 8 de noviembre, 16:00, ante Guaros de San Felipe"
          ]
        },
        {
          "t": "img",
          "id": "assets/noticias/bravos-roster-1.jpg",
          "pie": "Roster oficial de Bravos de La Calera (parte 1)"
        },
        {
          "t": "img",
          "id": "assets/noticias/bravos-roster-2.jpg",
          "pie": "Roster oficial de Bravos de La Calera (parte 2)"
        }
      ]
    },
    {
      "id": "pumas-convivencia-halloween",
      "tipo": "noticia",
      "titulo": "Pumas celebró en familia: asado, Halloween y dos victorias en La Ligua Park",
      "bajada": "Jugadores, esposas, familiares y amigos de Pumas de Salamanca convirtieron el costado izquierdo del Estadio La Ligua Park en su casa para festejar Halloween y las dos victorias del día con un asado de club.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-05",
      "equipo": "pumas",
      "portada": "assets/noticias/pumas-convivencia-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Los Pumas y sus amigos celebraron una tarde distendida con asado y bebidas, aprovechando de festejar Halloween y las dos victorias del día. Entre risas, jugadores, esposas de jugadores, familiares y amigos, Pumas de Salamanca se apoderó de la parte izquierda del campo de La Ligua Park para hacer allí su espacio de convivencia de club."
        },
        {
          "t": "p",
          "x": "Las esposas de los jugadores y demás familiares ayudaron a preparar el asado, mientras los peloteros cumplían con su misión de jugar. Concluidas las obligaciones deportivas, llegó el momento de la distracción y el compartir."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-02.jpg",
          "pie": "La familia Puma reunida en el costado izquierdo del Estadio La Ligua Park"
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-03.jpg",
          "pie": ""
        },
        {
          "t": "h",
          "x": "Se abrió el barril"
        },
        {
          "t": "p",
          "x": "Uno de los jonroneros del día, Juan Chirinos, abrió el barril y prendió la fiesta al compartir el asado. Antonio Olivares se despojó del uniforme y destapó las frías, mientras que el debutante Julio Piñeiro activó las provisiones que tenía en su camioneta."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-04.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-05.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-06.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-07.jpg",
          "pie": ""
        },
        {
          "t": "p",
          "x": "Howard González, el pelotero más antiguo del equipo, destapó el elixir escocés para quienes quisieran probarlo. Julio \"La Bestia\" se decidió por la Coca-Cola, al igual que el matador Wilmer Borjas, mientras que Kelvin, Accemed, Daniel Romero y Ramjses Acosta se alistaban para degustar el asado con chimichurri. A la fiesta también se sumaron Keivel González y Ronaly Vera."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-08.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-09.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-10.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-11.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-12.jpg",
          "pie": ""
        },
        {
          "t": "h",
          "x": "Asignaturas pendientes"
        },
        {
          "t": "p",
          "x": "Quedó una asignatura pendiente con Alexis Colina y Cristian Toro, quienes compartieron solo un rato por compromisos en Santiago. De Néstor Alvizu conversaremos en el próximo capítulo."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-13.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-14.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-15.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-16.jpg",
          "pie": ""
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-17.jpg",
          "pie": ""
        },
        {
          "t": "cita",
          "x": "Un Pumas reestructurado renueva no solo su roster, sino también el sentimiento familiar que siempre ha distinguido a este equipo."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-18.jpg",
          "pie": "Orgullo Puma en La Ligua Park"
        },
        {
          "t": "h",
          "x": "Rumbo a Los Molles"
        },
        {
          "t": "p",
          "x": "Terminado el asado, los peloteros y sus familias alistaron los autos y partieron hasta la famosa playa de Los Molles, donde la celebración continuó dentro y fuera del mar."
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-19.jpg",
          "pie": "La familia Puma en la playa de Los Molles"
        },
        {
          "t": "img",
          "id": "assets/noticias/pumas-convivencia-20.jpg",
          "pie": "La celebración siguió a orillas del mar"
        }
      ]
    },
    {
      "id": "pronosticos-jornada-10",
      "tipo": "opinion",
      "titulo": "Jornada 10: el domingo que empieza a dibujar la semifinal",
      "bajada": "Nadie puede sellar su boleto a semifinales este domingo en La Ligua Park, y nadie puede quedar fuera de esa pelea. Pero los cuatro juegos de la Jornada 10 pueden dejar a Bravos y Blessed Barber con un pie en la fase final y a Guaros y Pandas al borde del abismo.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-05",
      "portada": "assets/noticias/pronosticos-j10-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Quedan 16 juegos de fase regular y la Copa City 9 entra en su tramo decisivo. Con 10 equipos que se enfrentan todos contra todos, cada club disputa 9 partidos: los cuatro primeros avanzan a la semifinal, del quinto al octavo pelean la Copa de Consolación y los dos últimos se despiden del torneo. Este domingo 8 de noviembre se juega la Jornada 10, con cuatro encuentros que mueven, y mucho, la parte media de la tabla."
        },
        {
          "t": "img",
          "id": "assets/noticias/flyer-jornada-10.jpg",
          "pie": "Programación de la Jornada 10 · Domingo 8 de noviembre · Estadio La Ligua Park"
        },
        {
          "t": "h",
          "x": "Así llega la tabla"
        },
        {
          "t": "lista",
          "items": [
            "1. Pumas de Salamanca · 15 pts (5-1)",
            "2. Blessed Barber · 12 pts (4-1)",
            "3. Bravos de La Calera · 12 pts (4-2)",
            "4. Bombarderos de Illapel · 9 pts (3-3)",
            "5. Guaros de San Felipe · 9 pts (3-4)",
            "6. Pandas de Quillota · 7 pts (2-3-1)",
            "7. Litoral Maitencillo · 7 pts (2-3-1)",
            "8. Los Andes · 6 pts (2-3)",
            "9. Atléticos del Caribe · 6 pts (2-3)",
            "10. Máster Pumas · 3 pts (1-5)"
          ]
        },
        {
          "t": "p",
          "x": "Pumas de Salamanca manda con 15 puntos y la mejor ofensiva del torneo después de Guaros. Detrás, Blessed Barber y Bravos de La Calera igualan en 12, aunque Blessed tiene un juego menos y la defensa más sólida de la Copa: apenas 41 carreras recibidas. El cuarto puesto, hoy de Bombarderos, es la frontera más disputada del campeonato."
        },
        {
          "t": "h",
          "x": "Lo que no puede pasar este domingo"
        },
        {
          "t": "p",
          "x": "Hicimos las cuentas con todas las combinaciones de resultados posibles y hay una conclusión clara: ningún equipo puede asegurar su lugar en semifinales este domingo, y ninguno puede quedar matemáticamente eliminado de esa carrera. La definición llegará a partir del 15 de noviembre."
        },
        {
          "t": "p",
          "x": "Lo que sí está escrito: Pumas de Salamanca ya no puede terminar fuera de los ocho primeros. Aunque descansa este domingo, tiene garantizada, como mínimo, la Copa de Consolación."
        },
        {
          "t": "h",
          "x": "Juego por juego: nuestros pronósticos"
        },
        {
          "t": "cita",
          "x": "10:00 AM · Pandas de Quillota vs Atléticos del Caribe"
        },
        {
          "t": "p",
          "x": "Pandas llega con 7 puntos y Atléticos con 6. Los de Quillota vienen de vencer 14-7 a Bravos y también de caer 16-3 ante Guaros, en una misma jornada. Atléticos es el equipo que más carreras ha permitido después de Máster Pumas (87), y ese dato inclina la balanza. Para Pandas es un juego de vida o muerte: si pierde, en cerca de ocho de cada diez escenarios queda sin opciones de semifinal tras la Jornada 11. Pronóstico: ligera ventaja para Pandas."
        },
        {
          "t": "img",
          "id": "assets/noticias/pronosticos-j10-pandas.jpg",
          "pie": "Pandas de Quillota, obligado a ganar el domingo ante Atléticos del Caribe"
        },
        {
          "t": "cita",
          "x": "12:00 M · Los Andes vs Blessed Barber"
        },
        {
          "t": "p",
          "x": "Blessed Barber, con récord de 4-1, es el favorito más claro de la jornada. Los Andes, que juega dos partidos seguidos ese día, enfrenta a la defensa más tacaña del torneo en el primero de ellos. Si Blessed gana, asegura terminar entre los ocho primeros y da un paso enorme hacia la semifinal. Pronóstico: Blessed Barber, con claridad."
        },
        {
          "t": "cita",
          "x": "2:00 PM · Litoral Maitencillo vs Los Andes"
        },
        {
          "t": "p",
          "x": "El juego más parejo del domingo. Litoral suma 7 puntos y Los Andes 6, con números ofensivos y defensivos casi calcados. El cansancio puede pesar en Los Andes, que vendrá de jugar al mediodía. El que pierda este duelo quedará muy comprometido en la lucha por el cuarto lugar y pasará a mirar, sobre todo, hacia la Copa de Consolación. Pronóstico: juego de pronóstico reservado, con mínima ventaja para Litoral."
        },
        {
          "t": "cita",
          "x": "4:00 PM · Bravos de La Calera vs Guaros de San Felipe"
        },
        {
          "t": "p",
          "x": "El plato fuerte. Guaros, actual campeón, es el equipo que más carreras ha anotado en la Copa (97), pero ya jugó 7 de sus 9 partidos y solo le quedan este y el juego ante Pumas. Bravos tiene 12 puntos y viene de dos derrotas seguidas en la Jornada 9. Si Bravos gana, asegura los ocho primeros y queda muy cerca de la semifinal; si gana además a Pumas el 15 de noviembre, la clasificación estaría prácticamente sellada. Si Guaros pierde, su techo baja a 12 puntos y en tres de cada cuatro escenarios quedaría fuera de la carrera por semifinales tras la Jornada 11. Pronóstico: leve ventaja para Bravos, pero cuidado con el bate de Guaros."
        },
        {
          "t": "img",
          "id": "assets/noticias/pronosticos-j10-turno.jpg",
          "pie": "Estadio La Ligua Park, escenario de la Jornada 10"
        },
        {
          "t": "h",
          "x": "Mirando al 15 de noviembre"
        },
        {
          "t": "lista",
          "items": [
            "Pumas de Salamanca: enfrenta a Pandas y a Bravos en la Jornada 11. Si gana ambos, clasifica a semifinales sin depender de nadie; con una sola victoria, clasifica en casi todas las combinaciones posibles.",
            "Máster Pumas: juega ante Pandas y Bombarderos. Una sola derrota lo deja sin semifinal; si pierde los dos, queda eliminado también de la Copa de Consolación.",
            "Bombarderos de Illapel: con 9 puntos y un calendario accesible (Máster Pumas, Litoral y Los Andes), es el gran candidato a quedarse con el cuarto boleto."
          ]
        },
        {
          "t": "h",
          "x": "La pelea por la Copa de Consolación"
        },
        {
          "t": "p",
          "x": "Del quinto al octavo puesto hay seis equipos peleando por cuatro lugares: Guaros, Pandas, Litoral, Los Andes, Atléticos y, según cómo le vaya, Bombarderos. Atléticos y Los Andes tienen a su favor que aún les quedan cuatro partidos; en contra, que tendrán que ganarlos casi todos. Máster Pumas, con 3 puntos, necesita un milagro para entrar en zona de consolación."
        },
        {
          "t": "h",
          "x": "El termómetro de la Copa"
        },
        {
          "t": "p",
          "x": "Probabilidad estimada de cada equipo según su rendimiento en carreras anotadas y recibidas, simulando los 16 juegos que restan (semifinal / consolación / eliminado):"
        },
        {
          "t": "lista",
          "items": [
            "Pumas de Salamanca: más de 99% / menos de 1% / 0%",
            "Blessed Barber: 99% / 1% / 0%",
            "Bravos de La Calera: 89% / 11% / 0%",
            "Bombarderos de Illapel: 48% / 50% / 2%",
            "Litoral Maitencillo: 19% / 65% / 16%",
            "Pandas de Quillota: 16% / 73% / 10%",
            "Guaros de San Felipe: 12% / 84% / 5%",
            "Los Andes: 11% / 65% / 24%",
            "Atléticos del Caribe: 6% / 50% / 44%",
            "Máster Pumas: menos de 1% / 2% / 98%"
          ]
        },
        {
          "t": "p",
          "x": "Estimación propia y no oficial. El sóftbol se juega en el terreno y cualquier pronóstico puede cambiar con un solo inning."
        },
        {
          "t": "h",
          "x": "Nuestra apuesta"
        },
        {
          "t": "p",
          "x": "Si los favoritos cumplen, el domingo por la noche Blessed Barber y Bravos de La Calera tendrán asegurado como mínimo el octavo puesto, Pandas respirará y Guaros quedará contra las cuerdas, obligado a vencer a Pumas en su último partido. Pero esta Copa ya demostró que no respeta favoritos: Máster Pumas le quitó el invicto a Pumas y Bombarderos remontó ante Atléticos. Nos vemos el domingo en La Ligua Park."
        },
        {
          "t": "p",
          "x": "Transmisión en vivo por YouTube e Instagram: @ligadesoftbol_laligua y @mignerentodo."
        }
      ]
    },
    {
      "id": "perfil-jorge-arenas",
      "tipo": "perfil",
      "titulo": "Perfil City 9: 20 preguntas con Jorge Arenas",
      "bajada": "El bateador designado de Atléticos del Caribe llegó de Maracaibo en 2017 y descubrió el softbol a los 34 años. Habla de su fe, de su familia, de la tarde en Puchuncaví en que bateó de 9-8 y de por qué cada domingo de pelota lo devuelve a su tierra.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-03",
      "equipo": "atleticos",
      "portada": "assets/noticias/jorge-arenas-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Jorge Luis Arenas Zambrano es maracucho de nacimiento y hombre de fe. Técnico en telecomunicaciones, llegó a Chile en diciembre de 2017 y hoy vive junto a su esposa y sus dos hijos. Encontró el softbol a los 34 años y, desde entonces, cada domingo en el diamante le devuelve la alegría del niño que soñaba con las Grandes Ligas. Hoy batea para Atléticos del Caribe. Estas son sus 20 respuestas."
        },
        {
          "t": "h",
          "x": "Bloque 1: La persona, la familia y el día a día"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "1. ¿Cómo te llamas y de qué ciudad y país vienes?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Mi nombre es Jorge Luis Arenas Zambrano y soy de Maracaibo, Venezuela."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "2. ¿Con quién vives en Chile?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "¡Sí! Vivo con mi esposa y mis dos hermosos hijos."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "3. ¿Cuál era tu sueño cuando eras niño?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Jugar en las Grandes Ligas."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "4. ¿A qué te dedicabas en tu país y qué haces hoy en Chile?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "En Venezuela era técnico en una empresa de telecomunicaciones de televisión por cable llamada Net Uno. Hoy en Chile, afortunadamente, trabajo en el mismo rubro, en Cable de la Costa, que pertenece a GTD Manquehue."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "5. ¿En qué año llegaste a Chile y qué fue lo más duro al principio?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Llegué en diciembre de 2017. Lo más duro al principio fue adaptarme al cambio de clima y al entorno; algunas personas no eran nada amables."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "6. ¿Cuál es tu comida favorita de tu tierra y tu plato chileno preferido?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "De mi tierra me encanta la corvina con yuca y queso de mano. Y de Chile me gusta el pastel de choclo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "7. ¿Qué música o artista no puede faltar en tu auto o en tus audífonos?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Realmente no tengo un género definido. Me gusta todo tipo de música, pero mayormente escucho música cristiana."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "8. Si pudieras tener el auto de tus sueños, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Honestamente no soy materialista, pero si pudiera elegir, elegiría una camioneta Chevrolet del año."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "9. ¿Qué consejo le das hoy a los niños y jóvenes que te ven jugar o trabajar?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Les diría que confíen en Dios y que no se apoyen en su propia prudencia. Que amen, obedezcan y respeten a sus padres. Que a veces la vida los va a golpear y a herir (nos pasa a todos), pero que vale la pena luchar por sus sueños; que luchen por lo que realmente los haga felices y los llene de paz."
        },
        {
          "t": "cita",
          "x": "“Vale la pena luchar por sus sueños; que luchen por lo que realmente los haga felices y los llene de paz.”"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "10. En una sola palabra: ¿qué significa tu familia para ti?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Todo."
        },
        {
          "t": "img",
          "id": "assets/noticias/jorge-arenas.jpg",
          "pie": "Jorge Arenas, bateador designado de Atléticos del Caribe."
        },
        {
          "t": "h",
          "x": "Bloque 2: La pasión por el softbol"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "11. ¿A qué edad empezaste a jugar o a meterte en el softbol?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "A los 34 años."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "12. ¿Por qué juegas softbol y no otro deporte?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Me gusta porque me recuerda mi niñez y me hace sentir como el niño que fue feliz jugando al béisbol, sin importar nada más."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "13. ¿Cuál es tu posición en el campo o tu rol en el equipo?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Me gusta jugar en la segunda base, pero mayormente juego como bateador designado."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "14. ¿Cuál ha sido tu momento o logro más grande en el softbol?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Mi momento fue en un triangular que se realizó en Puchuncaví, que además ganamos. Bateé de 9-8, incluyendo un cuadrangular."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "15. ¿Qué es lo que más te gusta del ambiente de los domingos de softbol?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Lo que más me gusta es que me hace sentir como si estuviera en mi tierra."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "16. Si tuvieras que definir el softbol en una palabra, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Adrenalina."
        },
        {
          "t": "h",
          "x": "Bloque 3: La Copa City 9"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "17. ¿En qué equipo juegas o qué función cumples en la Copa City 9?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Juego en Atléticos del Caribe."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "18. ¿Cuál es tu meta principal con tu equipo para este torneo?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Mejorar tanto a nivel ofensivo como defensivo, para poder aportar solidez al equipo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "19. ¿Cómo ves el trabajo y la gestión de la actual directiva de la Liga de La Ligua?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Les pondría un 6, en la escala del 1 al 7. Lo han hecho muy bien, pero queda un toque por mejorar."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "20. ¿Qué le dices a la fanaticada y a las familias que nos acompañan cada fin de semana?"
        },
        {
          "t": "r",
          "quien": "Jorge Arenas",
          "x": "Les digo que estamos felices, y que más que una fanaticada somos una familia luchando por un mismo sentir. Son una parte muy importante para nosotros. Les diría que nos sigan apoyando, que todo esto forma parte de nosotros, de nuestras raíces, y que no lo dejemos morir. Valoremos lo que nos identifica, lo que nos pertenece, y sigamos disfrutando sanamente."
        },
        {
          "t": "h",
          "x": "Ficha del pelotero"
        },
        {
          "t": "lista",
          "items": [
            "Nombre: Jorge Luis Arenas Zambrano",
            "Origen: Maracaibo, Venezuela",
            "En Chile: desde diciembre de 2017",
            "Familia: su esposa y sus dos hijos",
            "Oficio: técnico en telecomunicaciones (televisión por cable)",
            "Equipo: Atléticos del Caribe",
            "Posición: bateador designado y segunda base",
            "Su gran tarde: 9-8 con un cuadrangular en el triangular de Puchuncaví, que ganaron",
            "Comida: corvina con yuca y queso de mano (Venezuela) · pastel de choclo (Chile)",
            "Música: cristiana",
            "El softbol en una palabra: adrenalina"
          ]
        },
        {
          "t": "p",
          "x": "Fueron las 20 respuestas de Jorge Arenas, de Atléticos del Caribe. Gracias, Jorge, por compartir tu historia con la familia de la Copa City 9."
        }
      ]
    },
    {
      "id": "perfil-pedro-rojas-rossell",
      "tipo": "perfil",
      "titulo": "Perfil City 9: 20 preguntas con Pedro Rojas Rossell",
      "bajada": "El center field de Atléticos del Caribe y secretario de la Copa City 9 llegó desde Adícora, en el estado Falcón, con el sueño intacto de la pelota. Hablamos de su familia, de su vida en Chile, de cómo se enamoró del softbol en Bogotá y de su meta en el torneo: ser campeón.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-03",
      "equipo": "atleticos",
      "portada": "assets/noticias/pedro-rojas-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Pedro José Rojas Rossell es de esos peloteros que se hacen notar sin levantar la voz. Desde el center field cubre terreno, lee a los bateadores rivales y ordena a sus compañeros; fuera del diamante, trabaja como secretario de la Copa City 9. Nacido en Adícora, en la península de Paraguaná, estado Falcón, llegó a Chile en 2021 y hoy defiende los colores de Atléticos del Caribe. Estas son sus 20 respuestas."
        },
        {
          "t": "h",
          "x": "Bloque 1: La persona, la familia y el día a día"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "1. ¿Cómo te llamas y de qué ciudad y país vienes?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Me llamo Pedro José Rojas Rossell. Vengo de Adícora, en el estado Falcón, Venezuela."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "2. ¿Con quién vives en Chile?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Vivo con mi hermano, Staling Rossell, que también juega en la liga, con su esposa y con mi sobrina."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "3. ¿Cuál era tu sueño cuando eras niño?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Jugar béisbol profesional. Ese siempre fue mi sueño de niño."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "4. ¿A qué te dedicabas en tu país y qué haces hoy en Chile?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "En Venezuela entrené béisbol hasta los 17 años y salí del país a los 18. Actualmente trabajo en una pescadería aquí en Chile."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "5. ¿En qué año llegaste a Chile y qué fue lo más duro al principio?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Llegué a Chile en 2021. Creo que lo más duro fue adaptarme al clima."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "6. ¿Cuál es tu comida favorita de tu tierra y tu plato chileno preferido?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "De mi tierra, el chivo en coco. Y de Chile me gustan el charquicán y los churrascos italianos."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "7. ¿Qué música o artista no puede faltar en tu auto o en tus audífonos?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Una buena salsa."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "8. Si pudieras tener el auto de tus sueños, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Una Mercedes G-Wagon."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "9. ¿Qué consejo le das hoy a los niños y jóvenes que te ven jugar o trabajar?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Que no dejen de luchar por sus sueños y sus metas. Con esfuerzo y dedicación se puede llegar adonde uno quiere."
        },
        {
          "t": "cita",
          "x": "“Con esfuerzo y dedicación se puede llegar adonde uno quiere.”"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "10. En una sola palabra: ¿qué significa tu familia para ti?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Maravillosa."
        },
        {
          "t": "img",
          "id": "assets/noticias/pedro-rojas.jpg",
          "pie": "Pedro Rojas Rossell, center field de Atléticos del Caribe."
        },
        {
          "t": "h",
          "x": "Bloque 2: La pasión por el softbol"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "11. ¿A qué edad empezaste a jugar o a meterte en el softbol?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Empecé a jugar béisbol a los 7 años y lo dejé a los 17. Después jugué varios torneos de softbol en Venezuela, pero al principio no me gustaba, porque sentía que estaba dejando el béisbol. Eso fue por allá en 2017. Volví a jugar softbol en 2021 en Bogotá, Colombia, y allí se veía un softbol muy competitivo. Fue ahí donde me empecé a apasionar, por la pasión y la competitividad con que se jugaba."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "12. ¿Por qué juegas softbol y no otro deporte?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Siempre he jugado muchos deportes, me gusta mucho el deporte: fútbol sala, baloncesto, voleibol, pádel, balonmano. Pero la pasión que siento por el béisbol y el softbol supera la de cualquier otro."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "13. ¿Cuál es tu posición en el campo o tu rol en el equipo?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Juego en el center field. Mi rol es cubrir mucho terreno y analizar bien a los bateadores contrarios, para organizar a mis compañeros y poder moverme mejor cuando salga un buen batazo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "14. ¿Cuál ha sido tu momento o logro más grande en el softbol?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Si se puede decir, en la Liga de La Ligua: la temporada pasada quedé campeón de jonrones y gané el Derby de Cuadrangulares en el Juego de Estrellas."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "15. ¿Qué es lo que más te gusta del ambiente de los domingos de softbol?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Que volvemos a esos domingos que vivíamos en Venezuela, de buena pelota y de amistades."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "16. Si tuvieras que definir el softbol en una palabra, ¿cuál sería?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Pasión."
        },
        {
          "t": "h",
          "x": "Bloque 3: La Copa City 9"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "17. ¿En qué equipo juegas o qué función cumples en la Copa City 9?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Soy secretario de la Copa City 9 y actualmente juego con Atléticos del Caribe."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "18. ¿Cuál es tu meta principal con tu equipo para este torneo?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Clasificar entre los cuatro mejores y quedar campeones."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "19. ¿Cómo ves el trabajo y la gestión de la actual directiva de la Liga de La Ligua?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Muy bien. Están haciendo un buen trabajo."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "20. ¿Qué le dices a la fanaticada y a las familias que nos acompañan cada fin de semana?"
        },
        {
          "t": "r",
          "quien": "Pedro Rojas",
          "x": "Gracias a todos los fanáticos que nos apoyan. Y a los que aún no han ido a ver los juegos, los invito a que visiten la liga, que cada vez va mejorando como liga y como organización."
        },
        {
          "t": "h",
          "x": "Ficha del pelotero"
        },
        {
          "t": "lista",
          "items": [
            "Nombre: Pedro José Rojas Rossell",
            "Origen: Adícora, estado Falcón, Venezuela",
            "En Chile: desde 2021",
            "Equipo: Atléticos del Caribe",
            "Posición: center field",
            "Cargo: secretario de la Copa City 9",
            "Logros: campeón de jonrones y del Derby de Cuadrangulares del Juego de Estrellas (Liga de La Ligua, temporada pasada)",
            "Comida: chivo en coco (Venezuela) · charquicán y churrasco italiano (Chile)",
            "Música: salsa",
            "El softbol en una palabra: pasión"
          ]
        },
        {
          "t": "p",
          "x": "Fueron las 20 respuestas de Pedro Rojas Rossell, de Atléticos del Caribe. Gracias, Pedro, por abrirnos las puertas de tu historia."
        }
      ]
    },
    {
      "id": "perfil-yonny-torres",
      "tipo": "perfil",
      "titulo": "Yonny Torres: el llanero que lanza con el corazón",
      "bajada": "El manager y lanzador de Pandas de Quillota lleva más de dos décadas en el softbol y una vida entera de sabana venezolana a cuestas. Desde Barinas hasta los diamantes de Chile, su historia es la de un pelotero que juega con fe, humildad y cariño por la gente.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-03",
      "equipo": "pandas",
      "portada": "assets/noticias/yonny-torres-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "“Ante todo, siempre llevo la bendición de Dios”. Con esa frase empieza Yonny Benito Torres Betancourt cuando le piden que hable de sí mismo, y no es casualidad. La fe es el punto de partida de un hombre que ha hecho del softbol mucho más que un deporte: un modo de vivir, de compartir y de mantenerse en pie lejos de su tierra."
        },
        { "t": "h", "x": "De Sabaneta al diamante chileno" },
        {
          "t": "p",
          "x": "Yonny nació en Sabaneta, un pueblo del estado Barinas, en pleno corazón de los llanos venezolanos. Allí, entre la sabana y el horizonte abierto, creció con un sueño sencillo y profundo: mantenerse siempre unido a su familia. Nunca imaginó que algún día tendría que dejar Venezuela."
        },
        {
          "t": "p",
          "x": "La vida, sin embargo, lo trajo a Chile hace cuatro años. Llegó junto a su esposa, que hoy es su compañera de camino en este país, mientras sus dos hijos permanecen en Venezuela. Esa distancia es parte de la historia que cargan miles de migrantes venezolanos, y Yonny la lleva con la entereza de quien sabe que cada esfuerzo tiene un propósito."
        },
        { "t": "h", "x": "Veintitrés años de pasión por el softbol" },
        {
          "t": "p",
          "x": "Si hay algo que define a Yonny dentro del terreno es la pasión. Suma cerca de 23 años como jugador activo de softbol, una trayectoria que habla de constancia, disciplina y amor por el juego. Es un lanzador de calidad, de esos que se paran en el círculo con temple y saben leer a cada bateador, y además asumió la responsabilidad de dirigir como manager a Pandas de Quillota."
        },
        {
          "t": "p",
          "x": "Como líder, su filosofía es clara: seguir dando lo mejor de sí y apoyar a todos los peloteros. No se trata solo de ganar juegos, sino de sostener al compañero, de animar al que está empezando y de hacer equipo dentro y fuera del campo."
        },
        { "t": "cita", "x": "“Sigo dando lo mejor de mí y apoyando a todos los peloteros.”" },
        {
          "t": "img",
          "id": "assets/noticias/yonny-torres.jpg",
          "pie": "Yonny Torres, pelota en mano y guante listo: más de dos décadas sobre el diamante."
        },
        { "t": "h", "x": "Un llanero de pies a cabeza" },
        {
          "t": "p",
          "x": "Yonny es un llanero cien por ciento, y lo demuestra en cada detalle. Su gran pasión fuera del diamante es la música llanera venezolana, ese canto de arpa, cuatro y maracas que cuenta la vida del llano. Entre sus artistas favoritos están Eliza Guerrero y Jorge Guerrero, voces que lo acompañan y lo devuelven, aunque sea por un rato, a su Barinas natal."
        },
        {
          "t": "p",
          "x": "El orgullo por sus raíces también pasa por la mesa: su comida favorita es el pescado de su país, ese sabor que no se olvida aunque se cambie de latitud. Y en el béisbol, el deporte que alimentó su infancia, su corazón tiene dueño: los Navegantes del Magallanes, uno de los equipos más tradicionales de la pelota venezolana. Su jugador favorito es Edgardo Alfonzo, referente del Magallanes y de las Grandes Ligas."
        },
        { "t": "h", "x": "La calidad humana detrás del uniforme" },
        {
          "t": "p",
          "x": "Más allá de los lanzamientos y las estrategias, lo que más destaca de Yonny es su calidad humana. Los niños que lo ven jugar se le acercan, y también personas que quieren conocerlo o preguntarle algo. Él responde a todos con cariño y paciencia, convencido de que un pelotero también es un ejemplo para quienes lo miran desde la tribuna."
        },
        {
          "t": "p",
          "x": "Se define como una persona humilde y amigable, y quienes lo conocen lo confirman. Para él, alejarse de alguien o cerrarle la puerta tiene que ser por algo realmente grave; su forma natural de ser es tender la mano. Esa actitud lo convierte en un compañero respetado y en un rival al que siempre da gusto enfrentar."
        },
        { "t": "h", "x": "Un migrante que suma a Chile" },
        {
          "t": "p",
          "x": "La historia de Yonny es también la de una comunidad. Como tantos venezolanos que llegaron a Chile, encontró en el softbol un espacio para reconstruir lazos, hacer amigos y aportar lo mejor de su cultura. En cada juego trae consigo la alegría del llano, la disciplina del deporte y el respeto por el país que hoy lo acoge."
        },
        {
          "t": "p",
          "x": "La Copa City 9, el torneo de las nueve ciudades, existe precisamente para eso: para que el deporte una a personas de distintos orígenes en torno a una misma pasión. Peloteros como Yonny Torres le dan sentido a esta competencia, porque recuerdan que detrás de cada uniforme hay una historia, una familia y un sueño que sigue vivo."
        },
        { "t": "h", "x": "Ficha del pelotero" },
        {
          "t": "lista",
          "items": [
            "Nombre: Yonny Benito Torres Betancourt",
            "Origen: Sabaneta, estado Barinas, Venezuela",
            "Equipo: Pandas de Quillota",
            "Rol: manager y lanzador (pitcher)",
            "Trayectoria: cerca de 23 años como jugador activo de softbol",
            "En Chile: desde hace 4 años",
            "Música: llanera venezolana (Eliza Guerrero y Jorge Guerrero)",
            "Béisbol: Navegantes del Magallanes · Ídolo: Edgardo Alfonzo",
            "Plato favorito: el pescado de su tierra venezolana"
          ]
        },
        {
          "t": "p",
          "x": "Desde la Copa City 9, un reconocimiento a Yonny Torres: pelotero, manager, llanero y gran ser humano."
        }
      ]
    },
    {
      "id": "entrevista-antonio-olivares-j9",
      "tipo": "entrevista",
      "titulo": "Antonio Olivares: “Este equipo está para llegar a la final”",
      "bajada": "El utility de Pumas de Salamanca fue pieza clave en los dos triunfos de su equipo en la Jornada 9. Habla del exceso de confianza del primer juego, de su salida al rescate y de su reto pendiente: ser campeón con Pumas.",
      "autor": "Migner Acosta",
      "fecha": "2026-11-01",
      "equipo": "pumas",
      "portada": "assets/noticias/antonio-olivares-portada.jpg",
      "bloques": [
        {
          "t": "p",
          "x": "Antonio Olivares, una de las bujías de Pumas de Salamanca, fue pieza fundamental en los dos triunfos de su equipo en la jornada de este domingo en el Estadio La Ligua Park. Tras un primer juego en que los felinos arrancaron lentos y solo después del quinto episodio alinearon los bates para voltear el marcador, conversamos con él sobre su labor desde el montículo, la pelea por la clasificación y sus metas en la Copa City 9."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Antonio, coméntanos tus impresiones del primer partido, donde Pumas arrancó lento y no fue sino hasta después del quinto episodio que los bates se alinearon para voltear el encuentro."
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Gracias por la entrevista y gracias también por la oportunidad de jugar con Pumas, por invitarme a su equipo. En el primer partido nos relajamos un poco; fue como un exceso de confianza. Pero después el equipo fue engranando, empezamos a hacer las cosas, nos fueron saliendo y terminamos ganando por amplio margen de carreras. Este equipo está hecho para esto: cuando nos empiezan a salir las cosas, volteamos la partida y ganamos por un score abultado."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Desde que debutaste en la Copa City 9 venías siendo el apagafuegos del equipo. Hoy no tuviste ese protagonismo al inicio del primer juego, porque estaba Julio Piñeiro en el montículo, pero después te tocó salir al rescate."
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Sí. El mánager tomó la decisión de traerme en un inning crucial para el juego. Estábamos abajo por una carrera y, gracias a Dios, logré sacar los dos innings en blanco y pudimos llevarnos la victoria. Salí a tope, llegué a cerrar la partida y todo salió bien."
        },
        {
          "t": "img",
          "id": "assets/noticias/antonio-olivares.jpg",
          "pie": "Antonio Olivares, de Pumas de Salamanca."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Con los resultados de hoy, Pumas llega a 15 puntos, pero todavía no está matemáticamente clasificado. Recordemos que es un campeonato por puntuación y faltan tres juegos. ¿Cómo ves a este equipo para lo que resta de la ronda regular?"
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Sin quitarle mérito a ningún equipo: yo vengo jugando en Santiago y allá la exigencia es un poco mayor. Esta liga todavía es un torneo que está como en exploración; quieren traer peloteros de Santiago y que sea una liga más competitiva."
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Viendo el torneo como está, yo creo que Pumas está para grandes cosas. Por mi parte, en cada equipo donde juego siempre pienso hasta dónde podemos llegar, y creo que este equipo está para llegar a la final."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Eres de esos jugadores que han defendido muchas camisetas. Hace algunas semanas te vimos jugando la final de la Liga de Cerro Navia con Santiago Bistró, y también te hemos visto ganar títulos de bateo y campeonatos con otros equipos. ¿Cuáles son tus metas en esta Copa City 9?"
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Primero, llegar a la final. Para mí llegar a la final ya es un logro, es la ganancia, y obviamente después ganarla. Mi reto es que este equipo, que es un conjunto que trabaja en unión, llegue a la final y la gane."
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "He jugado en muchos equipos que han llegado a finales, pero con Pumas tengo un reto pendiente. Hace seis meses llegamos a semifinales allá en Santiago y no pudimos pasar a la final. Pero aquí vamos a llegar a la final, y estoy 100 % seguro de que la vamos a ganar."
        },
        {
          "t": "cita",
          "x": "“Aquí vamos a llegar a la final, y estoy 100 % seguro de que la vamos a ganar.”"
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Para finalizar: a Juan Chirinos, a ti y a Wilmer Borjas les dicen “el Padre, el Hijo y el Espíritu Santo”. Pero ahora llegó Julio Piñeiro. ¿Qué nombre le ponemos al grupo?"
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Julio Piñeiro también es de los nuestros, así que ahora somos un cuarteto: yo creo que vamos a ser “los cuatro mosqueteros”. Julio es una pieza fundamental para nosotros, y en el pitcheo es una de nuestras cartas a favor, porque lanza muy duro para el pitcheo modificado que se está jugando ahora. Con él, yo creo que lo vamos a lograr."
        },
        {
          "t": "q",
          "quien": "Copa City 9",
          "x": "Un mensaje final para la fanaticada que te sigue a través de la página de la Copa City 9."
        },
        {
          "t": "r",
          "quien": "Antonio Olivares",
          "x": "Que nos apoyen siempre. Vamos a venir con todas las ganas, a dar un buen show y a competir, porque la idea es competir y ganar. Como siempre, se gana y se pierde, pero que la fanaticada nos apoye. Ahí vamos a estar para ellos, y que ellos estén para nosotros también. Muchas gracias."
        },
        {
          "t": "p",
          "x": "Fueron las impresiones de Antonio Olivares, de Pumas de Salamanca."
        }
      ]
    }
  ]
};
