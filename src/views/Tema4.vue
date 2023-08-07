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
              img(src='@/assets/curso/tema4/2.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Personal")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Cualificado y responsable para realizar el proceso de inventario bien estructurado y supervisado.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/3.svg')
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
              img(src='@/assets/curso/tema4/4.svg')
      .tarjeta.color-acento-botones.p-4(titulo="Infraestructura tecnológica")
        .row
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            p Desarrollo o adquisición de un #[em software] en la nube de gestión de inventario; escáner para la lectura de códigos de barra de los productos y la contabilización del inventario; de esta manera, se puede hacer el conteo de miles de productos en tan solo unas horas.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/5.svg')
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
              img(src='@/assets/curso/tema4/6.svg')
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_1 4.1 Ley de Pareto o Método ABC
    
    p(data-aos="fade-up") La Ley de Pareto es una herramienta muy útil en el sistema de control y manejo de inventarios, en el cual el Método ABC es la aplicación evidente de la Ley.
    p.mt-4(data-aos="fade-up") El Método ABC es un sistema de clasificación de los productos farmacéuticos, con el propósito de realizar un seguimiento más estrecho a las existencias, ya que permite situar las existencias atendiendo al índice de rotación de estas y reducir al máximo su movimiento.
    p.mt-4(data-aos="fade-up") Con este sistema, el almacén se dividirá en zonas de distintas medidas según el volumen de mercancía que vaya a alojar cada una y según su cercanía a la zona de entrada o salida.

    p.mt-5.text-center.fw-bold(data-aos="fade-up") Se puede clasificar en tres categorías:
    
    .col-lg-10.m-auto.mt-5
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/7.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-3(x="64.7%" y="27%" numero="" style="border-radius:25px;border:2px #8628A5 solid;background-color:#fff;")
          .h5.mb-2(style="color:#8628A5;") Categoría A
          p.mb-0(style="color:#000;") Requiere mayor vigilancia, ya que es la que concentra el mayor valor del #[em(style="color:#000;") stock], con lo que los registros deben ser exactos, completos y detallados. Se suele realizar inventario de forma periódica, unidad por unidad, para evitar errores. #[strong(style="color:#000;") Medicamentos o productos farmacéuticos muy importantes desde el punto de vista económico.]
        .tarjeta.color-acento-botones.p-3(x="64.7%" y="52.5%" numero="" style="border-radius:25px;border:2px #8628A5 solid;background-color:#fff;")
          .h5.mb-2(style="color:#8628A5;") Categoría B
          p.mb-0(style="color:#000;") Requiere menor control por parte de la empresa, ya que rota menos, por lo que se suele actualizar el inventario por lotes, no por unidad. #[strong(style="color:#000;") Medicamentos o productos farmacéuticos moderadamente importantes desde el punto de vista económico.]
        .tarjeta.color-acento-botones.p-3(x="64.7%" y="78.5%" numero="" style="border-radius:25px;border:2px #8628A5 solid;background-color:#fff;")
          .h5.mb-2(style="color:#8628A5;") Categoría C
          p.mb-0(style="color:#000;") El control de este #[em(style="color:#000;") stock] es sencillo porque apenas rota y, con el simple recuento visual de las cajas, se revisa el inventario. #[strong(style="color:#000;") Medicamentos o productos farmacéuticos poco importantes desde el punto de vista económico.]
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_2 4.2 Sistema VEN

    p(data-aos="fade-up") El sistema VEN (Vitales, Esenciales y No esenciales) es otro sistema de control y manejo de inventarios de medicamentos esenciales en establecimientos y servicios farmacéuticos, el cual tiene gran aplicabilidad en momentos donde la institución o establecimiento no dispone del recurso económico para realizar la totalidad de la compra, por lo cual su importancia radica en la posibilidad que da de realizar de forma apropiada la priorización de la compra de cada producto. 

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#81D4FA;border:4px white solid;box-shadow:0px 0px 20px rgba(0,0,0,.2);")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Vitales
              p Son medicamentos imprescindibles, por lo cual su inexistencia puede ocasionar graves consecuencias para los pacientes. Compromete la atención idónea, por lo tanto, la vida de los pacientes. Ocasionan recaídas, incapacidad laboral e incapacidad permanente.
              p.mt-4 Ejemplo:  Adrenalina sol. inyectable, dinitrato de isosorbide 5 mg tableta sublingual, oxígeno.
            .tarjeta-slide__img.d-flex.align-items-center.justify-content-center
              figure.col-10.m-auto
                img(src="@/assets/curso/tema4/8.svg" style="max-height:200px;")
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#C3F8FF;border:4px white solid;box-shadow:0px 0px 20px rgba(0,0,0,.2);")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Esenciales o menos vitales
              p Su inexistencia o poca existencia no es tan grave como los primeros, pero aun así puede provocar incapacidades transitorias o limitantes en algunos casos. La frecuencia y gravedad de las enfermedades es menor que la del grupo de los vitales. 
              p.mt-4 Ejemplo: Paracetamol 500 mg tabletas, naproxeno 250 mg tabletas, betametasona 4 mg sol. inyectable. 
            .tarjeta-slide__img.d-flex.align-items-center.justify-content-center(style="background-color:#C3F8FF;")
              figure.col-10.m-auto
                img(src="@/assets/curso/tema4/9.svg" style="max-height:200px;")
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#CBBFF4;border:4px white solid;box-shadow:0px 0px 20px rgba(0,0,0,.2);")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 No esenciales
              p Su inexistencia o poca existencia no provoca mayores consecuencias negativas o agravamiento de los problemas de salud.  Son medicamentos mínimamente indispensables, de acuerdo con la poca frecuencia y gravedad de las enfermedades para las cuales están indicados. 
              p.mt-4 Ejemplo: Tinidazol 1 gr tabletas, betametasona 1 % crema, multivitamínicos polvos orales.
            .tarjeta-slide__img.d-flex.align-items-center.justify-content-center(style="background-color:#CBBFF4;")
              figure.col-10.m-auto
                img(src="@/assets/curso/tema4/10.svg" style="max-height:200px;")



      
      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
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
.img-infografica__item__dot:before
  background-color: transparent !important
</style>
