<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas operativas para el control de inventarios
    
    .row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="fade-right")
      .col-lg-5(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Tanto el gerente como el encargado del almacén priorizan su gestión en mantener el inventario al 100 %, sin embargo, muchas veces el tiempo no alcanza o el personal es insuficiente.
        p.mt-4(data-aos="fade-up") Para optimizar y gestionar un buen control de inventarios, se requieren cuatro herramientas puntuales, las cuales se presentan a continuación, junto con los beneficios que conllevan:
    
    TabsA.color-primario.mt-5
      .tarjeta.color-acento-botones.p-4(titulo="Formatos o reportes <br> para inventarios")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Según la clasificación de los inventarios para identificar la mercancía que representa más pérdida para la empresa. 
            p.mt-4 Estos reportes pueden ser:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Reporte de existencia y costos de cada uno de los productos.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Reporte de máximos y mínimos.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Reporte de mercancía pendiente por entregar.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Reporte de movimientos del inventario.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/2.png')
      .tarjeta.color-acento-botones.p-4(titulo="Personal")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Cualificado y responsable para realizar el proceso de inventario bien estructurado y supervisado.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/3.png')
      .tarjeta.color-acento-botones.p-4(titulo="Infraestructura logística ")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Se cumple con las condiciones de almacenamiento y conservación de la mercancía, de acuerdo con las indicaciones del proveedor, como:
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Almacén
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Bodega
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Estanterías
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Estibas
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/4.png')
      .tarjeta.color-acento-botones.p-4(titulo="Infraestructura tecnológica")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Desarrollo o adquisición de un #[em software] en la nube de gestión de inventario; escáner para la lectura de códigos de barra de los productos y la contabilización del inventario; de esta manera, se puede hacer el conteo de miles de productos en tan solo unas horas.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/5.png')
      .tarjeta.color-acento-botones.p-4(titulo="Beneficios")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            ul.fa-ul
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Información de los inventarios en tiempo real.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Capacidad de crear multi-almacén: perfecto cumplimiento de los pedidos, entrega de productos exactos, a tiempo y con una eficiencia óptima.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Facilidad de enlazar otros procesos de la empresa al proceso de inventarios, como: compras, facturación electrónica, contabilidad electrónica, etc.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Mejorar el proceso comercial y ahorrar tiempo al integrar cada una de las áreas involucradas en este proceso.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/6.png')
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_1 4.1 Ley de Pareto o Método ABC
    
    p(data-aos="fade-up") La Ley de Pareto es una herramienta muy útil en el sistema de control y manejo de inventarios, en el cual el Método ABC es la aplicación evidente de la Ley.
    p.mt-4(data-aos="fade-up") El Método ABC es un sistema de clasificación de los productos farmacéuticos, con el propósito de realizar un seguimiento más estrecho a las existencias, ya que permite situar las existencias atendiendo al índice de rotación de estas y reducir al máximo su movimiento.
    p.mt-4(data-aos="fade-up") Con este sistema, el almacén se dividirá en zonas de distintas medidas según el volumen de mercancía que vaya a alojar cada una y según su cercanía a la zona de entrada o salida.

    p.mt-5.text-center.fw-bold(data-aos="fade-up") Se puede clasificar en tres categorías:
    
    .col-lg-10.m-auto.mt-5
      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/7.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="")
          .h5.mb-2 titulo
          p



      
      
</template>

<script>
export default {
  name: 'Tema4',
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
