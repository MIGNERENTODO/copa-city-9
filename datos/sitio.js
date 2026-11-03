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
    minimos: { vb: 5, il: "3.0" }   /* mínimos para líderes de AVG/OPS y EFE/WHIP */
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
    jornada: "Jornada 9",
    fecha: "2026-11-01",
    slides: [
      { tag: "Jornada 9 · Domingo 1 de noviembre", img: "assets/jornadas/j9-pumas-celebra.jpg", pos: "center 40%", alt: "Pumas de Salamanca celebra en el Estadio La Ligua Park",
        titulo: "Pumas ruge dos veces y manda en la Copa City 9",
        bajada: "Doblete de Pumas de Salamanca, se acabó el invicto de Bravos y Guaros sigue con vida. Así se vivió una jornada de cinco juegos en el Estadio La Ligua Park.",
        corto: "Resumen de la jornada", link: "#calendario" },
      { tag: "Juego 1 · Jornada 9", visita: "atleticos", cv: 11, local: "pumas", cl: 21,
        img: "assets/jornadas/j9-dugout-pumas.jpg", pos: "center 46%", alt: "Jugadores de Pumas de Salamanca en el dugout",
        titulo: "¡Remontada felina!",
        bajada: "Pumas de Salamanca vino de atrás, encendió los bates y terminó arrollando 21 carreras por 11 a Atléticos del Caribe en el juego que abrió la Jornada 9.",
        corto: "Pumas vino de atrás y aplastó a Atléticos" },
      { tag: "Juego 2 · Jornada 9", visita: "pumas", cv: 14, local: "andes", cl: 6,
        img: "assets/jornadas/j9-pumas-ronda.jpg", pos: "center 60%", alt: "Pumas de Salamanca reunido en el campo antes del juego",
        titulo: "Pumas va por la segunda y no perdona",
        bajada: "Sin tiempo para respirar, Pumas de Salamanca firmó su segunda victoria del día: 14 carreras por 6 ante Los Andes, y se queda solo en la cima de la tabla.",
        corto: "Segunda victoria del día para Pumas" },
      { tag: "Juego 3 · Jornada 9", visita: "bombarderos", cv: 6, local: "bravos", cl: 2,
        img: "assets/jornadas/j9-bombarderos.jpg", pos: "center 28%", alt: "Jugador de Bombarderos de Illapel lanza la bola a primera",
        titulo: "¡Se acabó el invicto!",
        bajada: "Bravos de La Calera llegaba con marca perfecta de 4-0, pero Bombarderos de Illapel lo frenó en seco y lo derrotó 6 carreras por 2 en el juego más cerrado de la jornada.",
        corto: "Bombarderos le quitó el invicto a Bravos" },
      { tag: "Juego 4 · Jornada 9", visita: "pandas", cv: 3, local: "guaros", cl: 16,
        img: "assets/jornadas/j9-pandas-guaros.jpg", pos: "center 52%", alt: "Bateador de Pandas frente al receptor de Guaros",
        titulo: "Guaros sigue con vida",
        bajada: "Con la espalda contra la pared, Guaros de San Felipe respondió con 16 carreras, despachó 16 por 3 a Pandas de Quillota y se mantiene en la pelea por la clasificación.",
        corto: "Guaros goleó a Pandas y sigue en carrera" },
      { tag: "Juego 5 · Jornada 9", visita: "bravos", cv: 7, local: "pandas", cl: 14,
        img: "assets/jornadas/j9-pandas.jpg", pos: "center 42%", alt: "Jugadores de Pandas de Quillota en el Estadio La Ligua Park",
        titulo: "Pandas divide honores",
        bajada: "Pandas de Quillota se levantó del golpe de la mañana, venció 14 carreras por 7 a Bravos de La Calera y le propinó su segunda derrota seguida en el mismo domingo.",
        corto: "Pandas se levantó y hundió a Bravos" }
    ]
  },

  jugadorSemana: [],

  /* Programación semanal. Se carga desde el panel privado (pestaña Programación).
     Esta es solo la programación inicial. En cada partido el primer equipo es visita y el segundo es local.
     Formato: { n: 9, fecha: "2026-11-01", partidos: [["visita","local","10:00"], ...] } */
  programacion: [
    { n: 9, fecha: "2026-11-01", partidos: [["atleticos","pumas","10:00"], ["pumas","andes","12:00"], ["bombarderos","bravos","14:00"], ["pandas","guaros","16:00"], ["bravos","pandas","18:00"]] }
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
