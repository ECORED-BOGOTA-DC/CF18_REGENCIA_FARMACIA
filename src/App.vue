<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 114px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #00BCD4 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #FFB30B !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-interno__titulo__icono
  background-color: #12263F !important
.banner-principal-decorativo-1
  top: 32% !important
  right: 79% !important
.banner-principal-decorativo-2
  top: 64% !important
  right: 73% !important
.banner-principal-decorativo-3
  animation: float1 2.8s ease-in-out infinite alternate !important
  position: absolute !important
  top: 61% !important
  right: 21% !important
.banner-principal-decorativo-4
  animation: float1 2.8s ease-in-out infinite alternate !important
  position: absolute !important
  top: 23% !important
  right: 6% !important
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
</style>
