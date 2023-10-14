<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="zoom-in") El sistema de control y registro de inventarios de productos farmacéuticos es una herramienta para gestionar de manera eficiente el inventario de una farmacia, controlando existencias, fechas de vencimiento y facilitando el registro y reabastecimiento de productos. Mejora la precisión, optimiza recursos y cumple con regulaciones farmacéuticas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con el sistema de control y registro de inventarios, lo cual tiene que ver con todo lo relacionado con las existencias y ayuda a activar la efectividad y prevenir el fraude. Para ello, se debe tener en cuenta lo siguiente:<br>- Sistemas de información.<br>- Registros contables.<br>- Gestión.<br>-Herramientas operativas para el control.<br>- Documentación en los procesos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
