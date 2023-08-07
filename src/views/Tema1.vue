<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas de información en el control de inventarios

    
    .row
      .col-lg-4.mb-4.mb-lg-0.cont_1_1
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        .cajon.color-secundario.p-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") Los sistemas de control de inventario son herramientas tecnológicas que integran todos los procesos de las labores de inventario de una empresa y responden a la contabilización del patrimonio del negocio, incluidos:
        .col-lg-10.m-auto.mt-4.row
          .col-lg.col-6.mb-lg-0
            ul.lista-ul
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Transporte
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Compra
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Recepción
          .col-lg.col-6.mb-lg-0
            ul.lista-ul
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Almacenamiento
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Facturación
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Seguimiento
          .col-lg.col-6.mb-lg-0
            ul.lista-ul
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Reordenamiento
        p.mt-4(data-aos="fade-up") Por lo general, las empresas que se dedican a la comercialización de productos o bienes de consumo deben llevar un inventario claro y organizado, de forma tal que sea fácil y ágil conocer el estado de este. El desarrollo y la utilización de los sistemas de información en la gestión y control de inventarios permiten acceder a la información rápidamente, lo que resulta útil en la preparación de los productos de consumo que tienen alta demanda, para así poder satisfacer las necesidades y expectativas del consumidor o cliente, sin permitir que la competencia sustituya estas necesidades.
        p.mt-4(data-aos="fade-up") En Colombia, las empresas cuya misión es comercializar artículos o productos utilizan un sistema de inventario periódico o permanente para determinar el costo total de las mercancías vendidas.
    
    .cont_1_2.mt-5.pt-4.pb-4
      .col-lg-10.m-auto
        SlyderA.slyder1(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Sistema periódico 
              p La empresa no afecta la cuenta de inventarios a lo largo del año contable, solo usa la cuenta de compra de mercancías, y al finalizar el año, realiza un inventario físico de las existencias; con este dato podrá realizar una operación simple para obtener el costo de las mercancías vendidas durante el año: Inventario inicial + compras - inventario final. Las devoluciones de las mercancías compradas se contabilizan en la cuenta de compras; mientras que las ventas se contabilizan en las cuentas de ingresos. El sistema de inventario periódico es también llamado inventario físico.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/4.svg')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Sistema permanente
              p Sistema contable de inventarios de costos de compras y costo de ventas, de esta manera, se conocerá realmente el costo de las mercancías y el saldo del inventario. El sistema permanente o perpetuo se realiza mediante el kárdex, donde se lleva el registro de cada unidad, su valor de compra, la fecha de adquisición, el valor de la salida de cada unidad y la fecha en que se retira del almacén para su venta o salida de la empresa.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/5.svg')
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") El sistema de inventarios está conformado por los siguientes elementos:
          
    TabsA.color-primario.mt-5
      .tarjeta.color-acento-botones.p-4(titulo="Costos")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p El costo de mantener un artículo en el inventario depende del valor unitario, es decir, el dinero pagado al proveedor para adquirir uno o varios artículos; en este caso, los costos serán reales, estándares o predeterminados. Según el modelo de inventarios, los costos pueden ser:
            ul.fa-ul.mt-4
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Costos de aprovisionamiento.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Costos de almacenamiento o bodegaje, que incluyen el riesgo de robo o pérdida, obsolescencia, deterioro o desperfectos, seguros, almacén y capital.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Costos asociados a la existencia de demanda insatisfecha, situación que se llama #[strong rotura de #[em stock]].
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/6.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Demanda")
        .row
          p El comportamiento del inventario de un artículo depende de la demanda del artículo referenciado.
          figure.mt-2
            img(src='@/assets/curso/tema1/7.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Nivel de servicio")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p La gestión del #[em stock] influye directamente en la calidad del servicio. Esto demuestra que, por la ruptura de un #[em stock], la demanda queda insatisfecha y posiblemente el consumidor busque el producto con la competencia. Tener un buen nivel de servicio significa que el cliente tenga el artículo o producto en el momento en que lo necesita. Por lo anterior, un nivel de servicio alto significa mayores costos de almacenamiento y pedido. Para calcular el nivel del servicio, se utiliza la siguiente fórmula:
            ul.fa-ul.mt-4
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Nivel de servicio (%) = (ventas/demanda) x 100
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Un nivel de servicio del 85 % indica que de 100 artículos que nos demandan nuestros clientes, 15 no son encontrados.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Es lo mismo que tener una rotura de 15%.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/8.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Plazos")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p El tiempo de espera o plazo de entrega es el que transcurre desde que se emite o genera una orden de pedido hasta que los productos entran al almacén. Los podemos clasificar en:
            ul.fa-ul.mt-4
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiempo de trámites administrativos.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiempo de tránsito de la orden del pedido hasta llegar a manos del proveedor.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiempo del despacho por parte del proveedor.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiempo en el transporte del producto desde el proveedor externo hasta la bodega o almacén.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tiempo que transcurre desde la recepción del pedido hasta su disponibilidad.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/9.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Productos")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Es la mercancía que se controla y manipula en el inventario.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/10.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Horizontes de planeación")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Es el periodo de tiempo para el cual se proyecta el inventario, ya sea a corto, mediano o largo plazo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/11.svg')
    
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/12.svg")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Tecnologías para los inventarios
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/13.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") El uso de las Tecnologías de la Información (TI) tiene grandes ventajas, siendo una de las principales la generación de competitividad.
        p.mt-4(data-aos="fade-up") Los clientes son cada vez más exigentes al momento de adquirir los productos, por eso las TI son una de las herramientas más eficientes y eficaces en el momento del manejo de inventarios, debido a que:
        ul.fa-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Erradican los errores de facturación.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Minimizan los tiempos en el cargue y descargue de los productos.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Permiten el rastreo y trazabilidad de los productos.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Conectan al cliente-vendedor-proveedor.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Brindan disponibilidad de la información de manera inmediata y actualizada.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Evitan los desabastecimientos o sobre #[em stock] de los productos.
        p.mt-4(data-aos="fade-up") Los dos tipos de tecnologías de la información más usadas son:
        ul.fa-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | La lectura por escáner.
          li(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | La tecnología de radiofrecuencia (RFID).
    
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/12.svg")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 La identificación por radiofrecuencia (RFID)
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Es un sistema de almacenamiento y recuperación de datos remoto, que utiliza dispositivos denominados etiquetas, tarjetas, transpondedores o #[em tags] RFID. El propósito fundamental de la tecnología RFID es transmitir la identidad de un objeto (similar a un número de serie único) mediante ondas de radio. Las tecnologías RFID se agrupan dentro de las denominadas auto ID (identificación automática).
        p.mt-4(data-aos="fade-up") Actualmente, la tecnología más utilizada en las empresas y negocios del sector farmacéutico para la identificación de los productos farmacéuticos es la de códigos de barras, los cuales presentan desventajas, como son la imposibilidad de ser reprogramados, generan un mayor costo y un reproceso, mientras que las etiquetas RFID contienen dispositivos especiales que permiten recibir y responder por radiofrecuencia desde un emisor-receptor, son dispositivos pequeños (similares a una etiqueta adhesiva) que pueden adherirse al empaque o caja de un producto.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/14.svg" data-aos="fade-left")
    
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/12.svg")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 ¿Qué #[em software] se debe utilizar en el control de inventario? 

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/15.svg" data-aos="fade-right")   
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Primero, se debe conocer qué es #[em software]. Se denomina así a todos los elementos que no son físicos, es decir, intangibles que componen un dispositivo electrónico, como los celulares, tabletas y computadoras, y permiten su funcionamiento. El #[em software] es quien guía a la parte física de los dispositivos, denominada #[em hardware].
        .cajon.color-secundario.p-4.mt-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") Un buen #[em software] para el control de inventario optimiza la productividad y la eficiencia a lo largo de la cadena de suministro. De esta manera, es mucho más fácil satisfacer las expectativas del cliente, teniendo claridad de las ubicaciones correctas de un producto y sus cantidades.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 100%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema1/1.png)
  background-size: contain
  background-repeat: no-repeat
  background-position: top
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema1/3.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.slyder1 .slyder-a__bullets__item--active
  background-color: #7E5EE3 !important
  border-color: #7E5EE3 !important
.slyder1 .slyder-a__bullets__item
  background-color: #C7C3F3
  border: 1px solid #C7C3F3
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1)
.tabs-a__content-item--active .tarjeta.color-acento-botones
  background-color: #EEEAFC
.tabs-a__content-item--active .tarjeta.color-acento-botones *
  color: #12263F
.tabs-a.color-primario .tabs-a__tab__selected
  background-color: #5B33DB
  color: #fff
.tabs-a.color-primario .tabs-a__tab__selected:before
  background-color: #5B33DB
.tabs-a.color-primario .tabs-a__tab:hover, .tabs-a.color-primario .tabs-a__tab:active, .tabs-a.color-primario .tabs-a__tab:focus
  background-color: #5B33DB
  color: #fff
.tabs-a__tab
  background-color: #F6F6F6
</style>
