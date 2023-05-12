<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de inventarios
    
    figure
      img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Se debe tener en cuenta que, en lo concerniente a inventarios, se encuentran una serie de conceptos y términos que se pueden llegar a confundir. Ellos abarcan lo mismo, pero con calidades diferentes, como se presenta a continuación:

    .row.mt-5(@mouseover="mostrarIndicador = false")
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/2.png")
            .cont_image1__description.p-3
              h5.text-white Inventario
              p.mb-0.text-white Listado ordenado y valorado de productos y/o materia prima de la empresa.
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            .indicador--click(v-if="mostrarIndicador")
            img(src="@/assets/curso/tema3/3.png")
            .cont_image1__description.p-3
              h5.text-white #[em Stock]
              p.mb-0.text-white Bienes o productos de la empresa que necesitan ser almacenados para la posterior venta o incorporación al proceso de fabricación.
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/4.png")
            .cont_image1__description.p-3
              h5.text-white Existencia
              p.mb-0.text-white Activos que adquiere la empresa para ser vendidos en el curso normal de la explotación, en el proceso de producción, o en forma de materiales o suministros para ser consumidos en la prestación del servicio.
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") Igualmente, se deben tener claros los siguientes conceptos antes de continuar.

    .cont_3_1.mt-5.pt-4.pb-4
      .row
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/6.png" data-aos="fade-right")
        .col-lg-8(style="place-self:center;")
          ul.lista-ul.mb-0
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Productos:] bienes adquiridos por la empresa que están destinados para la venta y que constituyen el objeto mismo del negocio.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Materias primas:] para la elaboración de productos.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Productos en proceso:] bienes o servicios que se encuentran en fase de transformación al cierre del conteo.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Productos semiterminados:] todos los productos que han sido fabricados o transformados por la empresa pero que no pueden ser vendidos porque falta una parte del proceso (envasado, embalaje, etc.).
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Productos terminados:] listos para su utilización, distribución, oferta y venta.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Insumos de aprovisionamiento:] abastecerse de los materiales necesarios cuando tiene que realizar las actividades de fabricación o comercialización.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | #[strong Activos fijos:] bienes y derechos que no son convertidos en efectivo por una empresa en el año y permanecen en ella durante más de un año (muebles, inmuebles, etc.)
    
    .row.mt-5
      .col-lg-6.col-md-4.mb-4.mb-md-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Los bienes de una empresa deben ser ordenados y descritos de acuerdo con las características de cada artículo o producto, también llamados mercancías; deben estar agrupados por su valor o similitud, porque forman parte del patrimonio o capital de la empresa. Todo inventario depende directamente de dos procesos que deben estar previamente bien establecidos en la empresa:
      .col-lg-3.col-md-4.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/7.svg" data-aos="fade-up")
      .col-lg-3.col-md-4.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/8.svg" data-aos="fade-up")
    
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        p.fw-bold(data-aos="fade-up") Los objetivos para la realización de los inventarios en toda empresa se enmarcan en:
        ul.lista-ul.mb-0.mt-4
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Mantener los stocks de seguridad, reduciendo riesgos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Programar la adquisición de materia prima e insumos para una producción efectiva y eficiente, generando reducción en los costos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Reducir las variaciones entre la oferta de la empresa y la demanda de los clientes.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Programar el transporte de productos para disminuir los costos de distribución.
      .col-lg-6
        .h-100.p-4.cont_background1.d-flex.align-items-center(style="border-radius:20px;")
          .row
            .col-lg-3.mb-md-0.mb-4.col-md-5
              figure
                img(src="@/assets/curso/tema3/10.svg" data-aos="fade-up")
            .col-lg-9.col-md-7
              p.mb-0(data-aos="fade-up") #[strong La realización de inventarios y #[em stock]] es la forma más simple de gestionar las necesidades de cada uno de los productos en existencia, y con base en lo anterior, se realizan los pedidos de los productos en cantidades y tiempos.
    
    .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#DCFBFF;")
      p.mb-0(data-aos="fade-up") A través de la contabilidad de la empresa, se realiza el inventario, como resultado de las entradas y salidas de los bienes y/o servicios que maneja la empresa. Sin embargo, dependiendo del tiempo estipulado por los encargados de la administración de la empresa, los inventarios se realizan de acuerdo con el tipo y requerimiento del proceso de contabilidad de esta.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Clases de inventarios
    
    p.text-center.fw-bold(data-aos="fade-up") Los tipos de inventarios son:

    .cont_3_2.mt-5.pt-4.pb-5
      .row
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta1.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 1
            div
              p.fw-bold Materias primas
              p.mt-3 Son aquellas que no han sufrido ningún cambio previo al proceso de producción y son utilizadas directamente en el mismo.
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta2.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 2
            div
              p.fw-bold Materias en proceso
              p.mt-3 Se utilizan en la elaboración del producto y su aspecto ha cambiado por resultado del proceso de producción.
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta3.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 3
            div
              p.fw-bold Productos terminados
              p.mt-3 Son los que están terminados para el almacenamiento y venta posterior.
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta4.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 4
            div
              p.fw-bold Materias y suministros
              p.mt-3 No forman parte del producto, pero son pieza fundamental para el buen funcionamiento de las máquinas utilizadas en el proceso productivo.
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") En la siguiente imagen, se representa gráficamente lo relacionado con el modelo de inventario:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 3
        span Modelo de inventario
      figure.mt-4
        img(src="@/assets/curso/tema3/12.svg" data-aos="zoom-in-up")
        figcaption.fw-normal.text-center.mt-3.p-4(style="background-color:#E8E8E8;") Nota. Tomada de #[a(target="_blank" style="color:#7E5EE3;" href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59186Página 25") https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59186Página 25]

    p.mt-5(data-aos="fade-up") Para el logro de los objetivos de la empresa, es importante priorizar el inventario de materias primas y el inventario final o de producto terminado; por esta razón, la estructura del inventario es directamente proporcional al tamaño de la empresa, debido a que el proceso de verificación de la cantidad de productos se especificará en el marco de la cadena de adquisición y suministro del negocio.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p.fw-bold(data-aos="fade-up") Teniendo en cuenta lo anterior, la mayoría de las empresas cuenta con tres niveles o tipos de inventarios:
        ol.lista-ol--cuadro.mt-3
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#7E5EE3;")
              span 1
            | #[strong Primer inventario:] existencias básicas que mantienen el equilibrio entre las entradas y salidas, el debe y el haber.
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#7E5EE3;")
              span 2
            | #[strong Segundo inventario:] existencias que deben estar a mano en caso de que exista desequilibrio en la demanda. Es también llamado inventario o stock de seguridad.
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#7E5EE3;")
              span 3
            | #[strong Tercer inventario:] cantidades de materia prima o productos que se pueden necesitar adicionalmente por aumento futuro en la demanda.
        p.mt-4.fw-bold(data-aos="fade-up") Es así como los niveles de inventario reflejan:
        ul.lista-ul.mb-0.mt-3
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | La producción futura.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | La estacionalidad de la demanda.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | La confiabilidad de los proveedores.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | La eficiencia operativa.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/13.png" data-aos="fade-left")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Rotación del inventario
    
    p(data-aos="fade-up") Muestra la rapidez con que la empresa utiliza sus inventarios, es decir, cuántas veces en el periodo y cada cuántos días. Algunos indicadores reflejan la eficiencia en la utilización del inventario en la empresa.

    p.mt-5.fw-bold.text-center(data-aos="fade-up") Se calcula de la siguiente manera:

    .col-lg-8.m-auto.mt-5
      PasosA.color-acento-contenido(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0.text-center(style="place-self:center;")
            p.mb-0.fw-bold(data-aos="fade-right") Rotación del inventario
          .col-md-6.text-center(style="place-self:center;")
            .h-100.p-4.d-flex.align-items-center.justify-content-center.flex-wrap(style="background-color:#ECF9FF;border-radius:20px;" data-aos="fade-left")
              p.w-100.mb-0(style="border-bottom:1px #5FA3C2 solid;") #[em Costo de venta]
              p.w-100.mb-0 #[em Inventario promedio]
        .row
          .col-md-6.text-center.mb-4.mb-md-0(style="place-self:center;")
            .h-100.p-4.d-flex.align-items-center.justify-content-center.flex-wrap(style="background-color:#ECF9FF;border-radius:20px;" data-aos="fade-right")
              p.w-100.mb-0(style="border-bottom:1px #5FA3C2 solid;") #[em Días del período que se analiza]
              p.w-100.mb-0 #[em Rotación del inventario]
          .col-md-6.text-center(style="place-self:center;")
            p.mb-0.fw-bold(data-aos="fade-left") Plazo medio de inventario 
        .row
          .col-md-6.mb-4.mb-md-0.text-center(style="place-self:center;")
            p.mb-0.fw-bold(data-aos="fade-right") Rotación del inventario de materia prima
          .col-md-6.text-center(style="place-self:center;")
            .h-100.p-4.d-flex.align-items-center.justify-content-center.flex-wrap(style="background-color:#ECF9FF;border-radius:20px;" data-aos="fade-left")
              p.w-100.mb-0(style="border-bottom:1px #5FA3C2 solid;") #[em Materia prima consumida]
              p.w-100.mb-0 #[em Inventario promedio de materia prima]
        .row
          .col-md-6.text-center.mb-4.mb-md-0(style="place-self:center;")
            .h-100.p-4.d-flex.align-items-center.justify-content-center.flex-wrap(style="background-color:#ECF9FF;border-radius:20px;" data-aos="fade-right")
              p.w-100.mb-0(style="border-bottom:1px #5FA3C2 solid;") #[em Costo de la producción bruta]
              p.w-100.mb-0 #[em Inventario promedio producción en proceso]
          .col-md-6.text-center(style="place-self:center;")
            p.mb-0.fw-bold(data-aos="fade-left") Rotación del inventario de producción en proceso
        .row
          .col-md-6.mb-4.mb-md-0.text-center(style="place-self:center;")
            p.mb-0.fw-bold(data-aos="fade-right") Rotación del inventario de producción terminada
            p Este indicador se mide en veces.
          .col-md-6.text-center(style="place-self:center;")
            .h-100.p-4.d-flex.align-items-center.justify-content-center.flex-wrap(style="background-color:#ECF9FF;border-radius:20px;" data-aos="fade-left")
              p.w-100.mb-0(style="border-bottom:1px #5FA3C2 solid;") #[em Costo de la producción mercantil]
              p.w-100.mb-0 #[em Inventario promedio producción]
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Indicadores de gestión del inventario
    
    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Es el modo que se utiliza para conocer cómo ha sido el movimiento de los productos en números. Estos se pueden medir dividiendo las ventas totales entre el número de producto que se tiene en existencias. 
        p.mt-4(data-aos="fade-up") Existen diversos indicadores que sirven para el perfeccionamiento de la gestión de inventarios y stock, lo cual ayuda a una mejor toma de decisiones administrativas para el continuo mejoramiento de los procesos.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") Una óptima organización de los recursos y de la parte operativa de la empresa garantizan un servicio de mayor calidad al menor costo posible.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/14.png" data-aos="fade-left")
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") Existen tres indicadores importantes de inventarios, que son:

    TabsB.color-acento-contenido.mt-4
      .py-4.py-md-5.p-4(titulo="Rotación de existencias" :icono="require('@/assets/curso/tema3/15.png')")
        .row
          .col-lg-8.col-md-7.mb-4.mb-md-0
            h4 Rotación de existencias
            p Permite identificar la frecuencia con la que se renueva el inventario en tiempo, ya sea anual, semestral o mensual.
            p.mt-4.text-center.fw-bold Fórmula
            .p-4.bg-white.text-center(style="border-radius:20px;border:1px #00BCD4 solid;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
              .row.col-lg-10.m-auto
                .col-auto(style="place-self:center;")
                  p.mb-0 #[em Tasa de rotación =]
                .col(style="place-self:center;")
                  p.mb-0(style="border-bottom:1px #12263F solid;") #[em Valor de las referencias vendidas]
                  p.mb-0 #[em Valor promedio de existencias]
          .col-md-5.col-lg-4
            figure
              img(src='@/assets/curso/tema3/18.png')
      .py-4.py-md-5.p-4(titulo="Rotura de <em>stock</em>" :icono="require('@/assets/curso/tema3/16.png')")
        .row
          .col-lg-8.col-md-7.mb-4.mb-md-0
            h4 Rotura de <em>stock</em>
            p Se encarga de evidenciar la cantidad de veces que el establecimiento o servicio farmacéutico se ha quedado sin stock y, por ende, no ha podido satisfacer las necesidades de los usuarios o pacientes.
            p.mt-4.text-center.fw-bold Fórmula
            .p-4.bg-white.text-center(style="border-radius:20px;border:1px #00BCD4 solid;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
              .row.col-lg-10.m-auto
                .col-auto(style="place-self:center;")
                  p.mb-0 #[em Índice de rotura de stock =]
                .col(style="place-self:center;")
                  p.mb-0(style="border-bottom:1px #12263F solid;") #[em Pedidos no satisfechos]
                  p.mb-0 #[em Pedidos totales]
                .col-auto(style="place-self:center;")
                  p.mb-0 X 100
          .col-md-5.col-lg-4
            figure
              img(src='@/assets/curso/tema3/19.png')
      .py-4.py-md-5.p-4(titulo="Contracción de inventario" :icono="require('@/assets/curso/tema3/17.png')")
        .row
          .col-lg-8.col-md-7.mb-4.mb-md-0
            h4 Contracción de inventario
            p Por medio de este, se evidencia si la cantidad de inventario que aparece en el sistema coincide con el inventario físico.
            p.mt-4.text-center.fw-bold Fórmula
            .p-4.bg-white.text-center(style="border-radius:20px;border:1px #00BCD4 solid;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
              .row.col-lg-10.m-auto
                .col-auto(style="place-self:center;")
                  p.mb-0 #[em Contracción del stock =]
                .col(style="place-self:center;")
                  p.mb-0(style="border-bottom:1px #12263F solid;") #[em Stock que debería haber - Stock que hay realmente]
                  p.mb-0 #[em Stock que debería haber]
          .col-md-5.col-lg-4
            figure
              img(src='@/assets/curso/tema3/20.png')
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") En la siguiente imagen, se presentan los pasos del proceso de planificación y organización de inventarios:

    .col-lg-6.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 4
        span Planificación y organización
      figure.mt-5
        img(src="@/assets/curso/tema3/21.svg" data-aos="zoom-in-up")
        figcaption.fw-normal.text-center.mt-3.p-4(style="background-color:#E8E8E8;") Nota. Tomada de Arenal (2020, p. 88)
    
    Separador.mt-5 

    .titulo-segundo
      h2#t_3_4 3.4 Toma de inventario físico
    
    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Es el recuento físico de los insumos o productos de una empresa en un determinado tiempo, como requerimiento extracontable, es decir, solo se remite a la realidad del almacén.
        p.mt-4(data-aos="fade-up") El inventario físico permite verificar la existencia real de lo que existe en los registros contables digitalizados, además de confirmar la rotación de los productos, bienes o servicios. De esta forma, con el inventario físico, se identifican fácilmente:
        ul.lista-ul.mb-0.mt-4
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Pérdidas de productos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Fallas en el sistema de conservación.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Mercancía fabricada en mayor cantidad que la demanda.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Materia prima vencida.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Maquinaria obsoleta o en mal estado.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/22.png" data-aos="fade-left")
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") El proceso del inventario físico implica diversas tareas:

    .cont_3_3.mt-5.pt-4.pb-5
      .row.col-lg-10.m-auto
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta1.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 1
            div
              p Informar e involucrar a los empleados.
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta2.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 2
            div
              p Determinar las fechas o días programados para el conteo, buscando en lo posible que sean temporadas de poca actividad en la empresa.
        .col-lg-4
          .tarjeta-numerada.color-primario.p-5.tarjeta3.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 3
            div
              p Limpiar y ordenar los almacenes para facilitar la elaboración del inventario.
      .row.col-lg-10.m-auto.mt-4.justify-content-center
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta3.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 4
            div
              p Colocar los productos de acuerdo con el sistema de surtido. De esta manera, los artículos podrán movilizarse más rápidamente.
        .col-lg-4
          .tarjeta-numerada.color-primario.p-5.tarjeta1.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 5
            div
              p Detallar las características de todos los bienes, principalmente como su categoría (tipo de producto) y su medida (en litros, metros o kilos).
              p.mt-3 Por ejemplo, en el caso de una farmacia, pueden clasificarse en antinflamatorios, antibióticos, artículos de higiene personal, entre otros.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El inventario físico debe ser programado y ordenado realizando un registro detallado, real y ágil de todos y cada uno de los productos o artículos que se encuentran en el almacén o bodega:
        .row.p-3(style="border-top:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Materias primas.
        .row.p-3(style="border-top:1px #B0C0D2 solid;border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Productos en proceso.
        .row.p-3(style="border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Productos terminados. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/24.png" data-aos="fade-left")
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/25.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p.fw-bold(data-aos="fade-up") Para lo anterior, se hace necesario la utilización de herramientas como:
        .row.p-3(style="border-top:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Lectura de código de barras.
        .row.p-3(style="border-top:1px #B0C0D2 solid;border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Lectura de placas.
        .row.p-3(style="border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Lectura por escáner.
        .row.p-3(style="border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Tecnología de radiofrecuencia (RFID).
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.fw-bold(data-aos="fade-up") Las ventajas que el inventario físico aporta a la organización son:
        .row.p-3(style="border-top:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Ordena las existencias en el almacén.
        .row.p-3(style="border-top:1px #B0C0D2 solid;border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Cuantifica de forma real las existencias.
        .row.p-3(style="border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Corrige las diferencias entre los datos registrados y los reales.
        .row.p-3(style="border-bottom:1px #B0C0D2 solid;" data-aos="fade-up")
          .col-auto(style="place-self:center;")
            i.far.fa-circle
          .col(style="place-self:center;")
            p.mb-0 Ofrece datos reales a la empresa, ayudando a la purga de existencias deterioradas o perdidas.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.png" data-aos="fade-left")
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") En la siguiente imagen, se muestran algunos de los elementos involucrados en el control de inventarios:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 5
        span Elementos involucrados en el control de inventarios
      figure.mt-5
        img(src="@/assets/curso/tema3/27.svg" data-aos="zoom-in-up")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_5 3.5 Métodos de evaluación de inventarios
    
    p(data-aos="fade-up") El inventario físico permite verificar la existencia real de lo que existe en los registros contables digitalizados, además de confirmar la rotación de los productos, bienes o servicios. De esta forma, con el inventario físico, se identifican fácilmente:

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Costo específico") Registro minucioso de cada operación de compra.
          p(numero="2" titulo="PEPS (Primeras entradas, primeras salidas)") Las primeras unidades en entrar al inventario del almacén serán las primeras en salir, razón por la cual, al final del periodo contable, las existencias quedarán valuadas al precio de costo de adquisición o producción.
          p(numero="3" titulo="UEPS (Ultimas entradas, primeras salidas)") Determina los costos a los inventarios bajo el imaginario de que las mercancías que se adquieren de último son las primeras en utilizarse o venderse, por lo tanto, el costo de las mercancías vendidas quedará valuado a los últimos precios de compra con que fueron adquiridos por la empresa.
          p(numero="4" titulo="Promedio ponderado") Consiste en dividir el valor del saldo entre el número de unidades en existencia. Esta operación se efectuará en cada compra, siempre que haya una modificación del saldo y de existencias. El costo promedio determinado se valuará conforme al costo de venta y al inventario final.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/28.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") Como complemento y profundización, se invita al aprendiz a consultar los siguientes videos ubicados en la sección de material complementario.

    ul.lista-ul.mb-0.mt-4
      li(data-aos="fade-up")
        i.fas.fa-atom(style="color:#7E5EE3;")
        | Métodos de inventario PEPS, UEPS y Promedio.
      li(data-aos="fade-up")
        i.fas.fa-atom(style="color:#7E5EE3;")
        | PEPS método de valuación (caso práctico).
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_6 3.6 Sistemas de reposición de inventarios
    
    p(data-aos="fade-up") Se refiere al reabastecimiento de productos dentro del almacén posterior a su recepción, y tiene como objetivo evitar el desabastecimiento completo de cualquier producto.

    p.mt-5.fw-bold.text-center(data-aos="fade-up") Para ello, existen tres estrategias de reposición de inventarios:

    .row.mt-5(@mouseover="mostrarIndicador2 = false")
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/29.png")
            .cont_image1__description.p-3(style="background-color:#81D4FA;")
              h5 Reposición por demanda
              p.mb-0 Esta se da cuando seleccionan todos los productos que serán despachados durante el día. Normalmente, se utiliza cuando la demanda de pedidos es por tiempos específicos, por ejemplo, las canastillas de medicamentos y dispositivos médicos que se preparan para pacientes de cirugía.
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            .indicador--click(v-if="mostrarIndicador2")
            img(src="@/assets/curso/tema3/30.png")
            .cont_image1__description.p-3(style="background-color:#81D4FA;")
              h5 Reposición por fractura del #[em stock]
              p.mb-0 Esta se da cuando el inventario llega al nivel mínimo de existencias definido con antelación.
      .col-xl.mb-4.mb-xl-0
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/31.png")
            .cont_image1__description.p-3(style="background-color:#81D4FA;")
              h5 Reposición de #[em stock “Top Off”]
              p.mb-0 Esta reposición consiste en abastecer las estanterías vacías al mismo tiempo que se están dispensando o distribuyendo los productos.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_image1
  position: relative
  overflow: hidden
  cursor: pointer
.cont_image1__description
  background-color: #8628A5
  position: absolute
  bottom: 0
  width: 100%
  height: auto
  transition: all 0.5s ease-in
  top: 80%
.cont_image1:hover .cont_image1__description
  top: auto
@media screen and (max-width: 1200px)
  .cont_image1__description
    top: 90%
@media screen and (max-width: 992px)
  .cont_image1__description
    top: 87%
@media screen and (max-width: 770px)
  .cont_image1__description
    top: 83%
@media screen and (max-width: 480px)
  .cont_image1__description
    top: 75%
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  top: 0
  left: -15%
  height: 100%
  background: url(../assets/curso/tema3/5.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_background1
  background: url(../assets/curso/tema3/9.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_3_2
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  top: 0
  left: -15%
  height: 100%
  background: url(../assets/curso/tema3/11.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.tarjeta1.tarjeta-numerada.color-primario
  border-color: #81D4FA
  background-color: #fff
  box-shadow: 0px 0px 20px rgba(0,0,0,.1)
.tarjeta1.tarjeta-numerada__numero
  background-color: #81D4FA
.tarjeta2.tarjeta-numerada.color-primario
  border-color: #CBBFF4 !important
  background-color: #fff
  box-shadow: 0px 0px 20px rgba(0,0,0,.1)
.tarjeta2 .tarjeta-numerada__numero
  background-color: #CBBFF4 !important
.tarjeta3.tarjeta-numerada.color-primario
  border-color: #4CEBFF !important
  background-color: #fff
  box-shadow: 0px 0px 20px rgba(0,0,0,.1)
.tarjeta3 .tarjeta-numerada__numero
  background-color: #4CEBFF !important
.tarjeta4.tarjeta-numerada.color-primario
  border-color: #81D4FA !important
  background-color: #fff
  box-shadow: 0px 0px 20px rgba(0,0,0,.1)
.tarjeta4 .tarjeta-numerada__numero
  background-color: #81D4FA !important
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: #12263F
.tabs-b
  background-color: #E6F7FE
.tabs-b__tab
  background-color: #fafafa
.tabs-b.color-acento-contenido .tabs-b__tab--active
  background-color: transparent
  border: none !important
.tabs-b__tab
  border: none !important
.cont_3_3
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  top: 0
  left: -15%
  height: 100%
  background: url(../assets/curso/tema3/23.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #DCFBFF
</style>
