<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Registros contables de inventario
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Las compras de productos o mercancías en una empresa se registran por medio de un débito a la cuenta Inventarios. Cuando la empresa realiza una venta, se registran dos asientos contables:
        ul.lista-ul.mt-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            div Uno al crédito para registrar la venta.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            div Otro para fijar el costo de venta y disminuir la cantidad del inventario.
        .cajon.color-acento-contenido.p-4.mt-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Todo esto debe hacerse diariamente. El débito por las compras y el crédito por las ventas mantienen un registro actualizado de las existencias disponibles, para así no necesitar asientos de ajuste al final del periodo.
        p.mt-4(data-aos="fade-up") De forma general, en ambos sistemas se utiliza la cuenta Inventarios, sin embargo, su modo de empleo es diferente en cada uno de ellos.
        p.mt-4(data-aos="fade-up") 
      .col-lg-4.mb-4.mb-lg-0.cont_2_1
        figure.pt-3
          img.m-auto(src="@/assets/curso/tema2/2.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    
    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 1
        span Ciclo financiero a corto plazo en empresas comerciales
      figure.mt-5
        img.m-auto(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" alt="Imagen que representa un ciclo financiero, el cual consta de los siguientes aspectos de manera cíclica: Efectivo-Inventarios-Cuentas por cobrar" style="max-width:350px;")
    
    .row.mt-5(style="background-color:#E5DFF9;border-radius:25px;")
      .col-lg-3.mb-4.mb-md-0.col-md-5(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema2/4.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
      .col-lg-9.mb-4.mb-md-0.col-md-7.pt-4.pb-4(style="place-self:center;")
        p.fw-bold.text-center(data-aos="fade-up") El registro contable de inventarios requiere la apertura de las siguientes cuentas:
        .mt-4.row
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Inventario inicial.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Compras.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Devoluciones en compra.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Gastos de compras.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Ventas.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Devoluciones en ventas.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Mercancías en tránsito.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Mercancías en consignación.
              li.d-flex(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Inventario final.

    p.mt-5(data-aos="fade-up") De acuerdo con el PUC (Plan Único de Cuentas), existe un catálogo de cuentas estandarizado para los comerciantes y empresarios colombianos, en el cual se codifican los registros contables. El inventario es una cuenta de activo de la empresa y cada mercancía o producto tiene una tarjeta kárdex (ver ejemplo a continuación) donde se registran los movimientos contables.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 2
        span Ejemplo tarjeta kárdex
      figure.mt-5
        img.m-auto(src="@/assets/curso/tema2/5.svg" data-aos="zoom-in-up" alt="Imagen con un formato de ejemplo de una tarjeta Kárdex, el cual contiene la siguiente información: Control de Existencias en el Inventario - EMPRESA _ABC_ Control de Existencias en el Inventario - EMPRESA _ABC_ Producto Cantidad máxima Cantidad mínima Método Fecha Detalle: Concepto - Factura No. Entradas: Cantidad - Valor unitario - Valor total Salidas: Cantidad - Valor unitario - Valor total Saldos: Cantidad - Valor unitario - Valor total Costos" style="max-width:350px;")
      



</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 100%
  top: 0
  right: -10%
  height: 100%
  background: url(../assets/curso/tema2/1.png)
  background-size: contain
  background-repeat: no-repeat
  background-position: top
</style>
