export default {
  global: {
    componenteFormativo: 'Desarrollo de Front-end con REACT JS',
    descripcionCurso: `El diseño de un sitio <em>web</em> corresponde a un componente fundamental en el <br>
      proceso de creación de aplicaciones <em>web</em>, este componente está orientado <br>
      a la comprensión de los conceptos más importantes que se deben tener en <br>
      cuenta para la construcción del <em>Front-End</em> con la tecnología React JS.`,
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de React JS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es React JS?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué es JSX?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Instalando React JS',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Crear un proyecto',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Propiedades y Estados de los Componentes',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Eventos en React',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Listas y keys',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Formularios',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Concepto de clases en React',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Funciones Hooks',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Ciclos de Vida de los Componentes de React',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Ejecutar la aplicación',
            hash: 't_1_12',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Node. (2021). Node JS Server.',
      link: 'https://nodejs.org/en/',
    },
    {
      referencia:
        'React JS. (2021). React – A JavaScript library for building user interfaces. Biblioteca de React.',
      link: 'https://reactjs.org/',
    },
  ],
  glosario: [
    {
      termino: 'CSS3',
      significado: 'Hojas de estilo en cascada versión 3.',
    },
    {
      termino: 'DOM',
      significado: 'Modelo de objetos de un documento HTML',
    },
    {
      termino: 'ES6',
      significado: 'Abreviación del estándar ECMA SCRIPT. Versión 6.',
    },
    {
      termino: 'FRONTEND',
      significado:
        'Se refiere a la capa de presentación de una aplicación web.',
    },
    {
      termino: 'HTML',
      significado: 'Lenguaje de marcado hipertexto.',
    },
    {
      termino: 'JAVASCRIPT',
      significado: 'Lenguaje de programación.',
    },
    {
      termino: 'JSX',
      significado:
        'Sintaxis propuesta en React JS para escribir elementos de interfaz web.',
    },
    {
      termino: 'NODE.js',
      significado: 'Es un servidor de aplicaciones.',
    },
    {
      termino: 'NPM',
      significado: 'Es un manejador de paquetes de sistema operativo.',
    },
    {
      termino: 'SPA',
      significado: 'Tipo de aplicación Web.',
    },
  ],
  complementario: [
    {
      texto:
        'Editor HTML gratuito en línea, limpiador y convertidor. (2021, 27 de octubre). [Página web].',
      tipo: 'Página web.',
      link: 'https://htmled.it/or/',
    },
    {
      texto: 'Cubic Factory.  (2021, 27 de octubre). [Página web].',
      tipo: 'Página web.',
      link: 'https://www.cubicfactory.com/jseditor/',
    },
    {
      texto:
        'CodeSandbox: Online Code Editor and IDE for Rapid Web Development. (2021, 27 de octubre). [Página web].',
      tipo: 'Página web.',
      link: 'https://codesandbox.io',
    },
    {
      texto: 'React Playground. (2021, 27 de octubre). [Página web].',
      tipo: 'Página web.',
      link: 'https://playcode.io/react/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Hernán Muñoz Carvajal',
        cargo: 'Experto temática',
        centro:
          'Regional-Cauca Centro de teleinformática y producción industrial.',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital. Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Durán',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Oleg Litvin',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
