export default {
  global: {
    componenteFormativo: 'Sistema de control y registro de inventarios',
    descripcionCurso:
      'Es importante llevar un sistema de inventario permanente (revisión física del <em>stock</em>) en farmacias y servicios farmacéuticos. Existe una preocupación sobre la disponibilidad de productos farmacéuticos para satisfacer la demanda de los clientes, sin embargo, es importante establecer un <em>stock</em> óptimo, manteniendo así la rentabilidad del negocio, además de pensar en la complacencia de las necesidades reales de sus clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de información en el control de inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Registros contables de inventario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clases de inventarios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Rotación del inventario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores de gestión del inventario',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Toma de inventario físico',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Métodos de evaluación de inventarios',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Sistemas de reposición de inventarios',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas operativas para el control de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ley de Pareto o Método ABC',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistema VEN',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación proceso de inventarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de inventarios',
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. Mayo 14 de 2007.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo4_CF018_Resolución_1403_de_2007.pdf',
    },
    {
      tema: 'Gestión de inventarios',
      referencia:
        'Decreto 780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo5_CF018_Decreto_780_de_2016_Sector_Salud_y_Protección_Social.pdf',
    },
    {
      tema: 'Gestión de inventarios',
      referencia:
        'Resolución 2955 de 2007. [Ministerio de la Protección Social]. Por la cual se modifican algunos numerales del Manual de Condiciones Esenciales y Procedimientos del Servicio Farmacéutico, adoptado mediante Resolución 1403 de 2007 y se dictan otras disposiciones. Agosto 27 de 2007.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3_CF018_Resolución_2955_de_2007.pdf',
    },
    {
      tema: 'Métodos de evaluación de inventarios',
      referencia:
        'Contador Contado. (2018). Métodos de Inventario PEPS, UEPS, y Promedio.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JLB3KXGqXDc',
    },
    {
      tema: 'Métodos de evaluación de inventarios',
      referencia:
        'Rusbel 1507. (2015). PEPS método de valuación (Caso práctico).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Qv5Kh_LLSYs',
    },
  ],
  glosario: [
    {
      termino: 'Capital',
      significado:
        'en economía, se entiende por capital un componente material de la producción, básicamente constituido por maquinaria, utillaje o instalaciones, que, en combinación con otros factores, como el trabajo, materias primas y los bienes intermedios, permite crear bienes de consumo.',
    },
    {
      termino: 'Flujo',
      significado:
        'es el sistema de métodos de control únicos que las empresas utilizan para regular la actividad de los productos dentro de sus operaciones. Este proceso abarca desde fabricantes que aprovisionan materias primas hasta minoristas que almacenan productos terminados.',
    },
    {
      termino: 'Indicador',
      significado:
        'herramienta para medir el grado de cumplimiento con los objetivos propuestos.',
    },
    {
      termino: 'Logística',
      significado:
        'conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'conjunto de bienes tangibles e intangibles, derechos y obligaciones futuras',
    },
    {
      termino: 'RFID',
      significado: 'identificación por radiofrecuencia.',
    },
    {
      termino: 'VEN',
      significado: ' Vitales, Esenciales, No esenciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Vega, D. (2019). 3 herramientas que facilitan el control de inventarios. ClickBalance.',
      link:
        'https://clickbalance.com/blog/nichos/3-herramientas-que-facilitan-el-control-de-inventarios',
    },
    {
      referencia: 'Tecnipesa. (s. f.). Trazabilidad farmacéutica.',
      link:
        'https://www.tecnipesa.com/soluciones/trazabilidad-producto/trazabilidad-farmaceutica',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Edwin Amir Moreno Moreno',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
