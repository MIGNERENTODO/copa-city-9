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
    { id: "blessed", nombre: "Blessed Barber's", ciudad: "Club invitado", abrev: "BLE", logo: "assets/logos/blessed.png", color: "#5B2A9E", color2: "#3FC1D6", alias: ["blessed", "barber", "ble"] },
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
        { nombre: "Cristian Toro", posicion: "Utility", foto: "assets/jugadores/pumas-cristian-toro.jpg" }
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
  jugadorSemana: [],

  /* Programación semanal. Se carga desde el panel privado (pestaña Programación).
     Esta es solo la programación inicial. En cada partido el primer equipo es visita y el segundo es local.
     Formato: { n: 9, fecha: "2026-11-01", partidos: [["visita","local","10:00"], ...] } */
  programacion: [
    { n: 9, fecha: "2026-11-01", partidos: [["atleticos","pumas","10:00"], ["pumas","andes","12:00"], ["bombarderos","bravos","14:00"], ["pandas","guaros","16:00"], ["bravos","pandas","18:00"]] }
  ],

  /* Encuestas y votaciones del público. Cada persona vota una vez por encuesta.
     estado: "abierta" o "cerrada".
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
      fecha: "2026-10-18",
      candidatos: "auto"
    },
    {
      id: "campeon",
      tipo: "equipos",
      pregunta: "¿Quién será el campeón de la Copa City 9?",
      estado: "abierta",
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
  ]
};
