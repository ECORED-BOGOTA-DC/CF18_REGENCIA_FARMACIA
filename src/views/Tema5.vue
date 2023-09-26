<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Documentación proceso de inventarios
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema5/1.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:300px;")
      .col-lg-8(style="place-self:center;")
        .cajon.color-secundario.p-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") Todo proceso o actividad que se lleve a cabo en el servicio o establecimiento farmacéutico debe documentarse, con el objetivo de estandarizar y, con esto, garantizar que todas las personas que intervienen en estos procesos o actividades las llevarán a cabo de una misma forma.
        p.mt-4.fw-bold(data-aos="fade-up") Los procedimientos cuentan con una estructura definida, la cual consta de la siguiente información:
        .col-lg-10.m-auto.mt-4
          ul.lista-ul
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Nombre del proceso o procedimiento.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Introducción.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Objetivo general. 
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Objetivo específico.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Definiciones.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Indicadores.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Descripción de actividades: diagrama de flujo.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Requisitos legales y reglamentarios del proceso o procedimiento (marco legal).
        p.mt-4(data-aos="fade-up") A continuación, se ampliará la información sobre cada uno de los componentes de esta estructura.
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Nombre del proceso o procedimiento
    p(data-aos="fade-up") Es importante nombrar el procedimiento para su correcta identificación. Debe ir acompañado del logo y/o nombre de la empresa, la codificación del documento, fecha de creación y versión.
    p.mt-4(data-aos="fade-up") Esta estructura se utiliza cuando el servicio o establecimiento farmacéutico trabaja bajo un sistema de calidad, el cual recomienda que toda la documentación debe ser controlada.
    p.mt-5.fw-bold.text-center(data-aos="fade-up") A continuación, se mostrará un ejemplo de la estructura del encabezado:
    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        p.mb-0 #[b Figura 6]. Estructura encabezado proceso/procedimiento
      figure.mt-4
        img.m-auto(src="@/assets/curso/tema5/2.svg" data-aos="zoom-in-up" alt="Imagen con un ejemplo de la estructura encabezado proceso/procedimiento, que consta de la siguiente información: Nombre y/o logo de la droguería INVENTARIO FÍSICO GENERAL Y SELECTIVO EN EL ALMACÉN P-0-010 Cartagena Febrero 2023 Versión: 01 Página 1 de 7" style="max-width:850px;")
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Objetivo y alcance del procedimiento
    p(data-aos="fade-up") En el objetivo, se debe definir la finalidad que se busca con el procedimiento, debe ser claro, entendible y su descripción debe iniciar en infinitivo “ar” “er” “ir”; y en el alcance, desde y hasta dónde abarcan las actividades del procedimiento.
    p.mt-5.fw-bold.text-center(data-aos="fade-up") A continuación, se presenta un ejemplo.
    .col-lg-10.m-auto.mt-5
      .row
        .col-lg.p-0
          .h-100.p-5.border-radius_hide(style="background-color:#BAE7FC;border-radius:15px 0px 0px 15px;")
            figure.col-5.m-auto
              img.m-auto(src="@/assets/curso/tema5/3.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;")
            h4.mt-5.text-center(data-aos="fade-up") Objetivo
            p.mt-4(data-aos="fade-up") Determinar la existencia de los medicamentos, insumos hospitalarios y dispositivos médicos recibidos en #[strong droguería ABC], con el fin de verificar, cotejar y controlar las existencias reales con los registrados en el sistema.
        .col-lg.p-0
          .h-100.p-5.border-radius_hide(style="background-color:#CBBFF4;border-radius:0px 15px 15px 0px;")
            figure.col-5.m-auto
              img.m-auto(src="@/assets/curso/tema5/4.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;")
            h4.mt-5.text-center(data-aos="fade-up") Alcance
            p.mt-4(data-aos="fade-up") Este procedimiento aplica para el almacenamiento de medicamentos, insumos hospitalarios y dispositivos médicos recibidos en #[strong droguería ABC].
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Responsables
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Se deben definir los responsables del proceso, entendiendo que hay labores que son de gestión y otras operativas.
        p.mt-4.fw-bold.mb-0(data-aos="fade-up") Ejemplo
        p(data-aos="fade-up") Responsables de garantizar cumplimiento de las actividades:
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Jefe almacén.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Gerente administrativo.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Director técnico.
      .col-lg-4(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema5/5.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Referencias y definiciones
    p(data-aos="fade-up") En las referencias, se deben registrar las normas que se tomaron como base para determinar los requisitos a cumplir. Por ejemplo: Resolución 1403 de 2007.
    .cajon.color-secundario.p-4.mt-4(style="background-color:#E4DDFA;")
      p.mb-0(data-aos="fade-up") Es importante incluir las definiciones de los términos que se utilizan de manera más frecuente, con el objetivo de que sean comprendidos y se comprenda su significado durante el desarrollo del procedimiento.
    .mt-5.mb-0.text-center.p-3(style="background-color:#7E5EE3;border-radius:15px 15px 0px 0px;")
      p.mb-0.fw-bold.text-white(data-aos="fade-up") Ejemplo
    .p-4.pb-5(style="background-color:#F3F9FF;border-radius:0px 0px 15px 15px;")
      p.fw-bold(style="color:#7E5EE3;" data-aos="fade-up") Referencias
      ul.lista-ul.mt-3
        li(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7E5EE3;")
          | N/A
      p.fw-bold.mt-4(style="color:#7E5EE3;" data-aos="fade-up") Definiciones
      ul.lista-ul.mt-3.mb-0
        li.d-flex(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7E5EE3;")
          div #[strong Inventario general:] inventario masivo, incluye todos los productos almacenados en la bodega de la empresa y sirve de sustento a los estados financieros de la entidad. Este inventario requiere de un apropiado programa y se realiza por lo menos una vez en cada ejercicio. El inventario general normalmente se efectúa cerrando las operaciones del almacén por uno o varios días, pudiendo realizarse también en movimiento.
        li.d-flex(data-aos="fade-up")
          i.fas.fa-atom(style="color:#7E5EE3;")
          div #[strong Inventario selectivo:] comprende a un grupo de productos previamente seleccionados. Se realiza periódicamente o cada vez que sea necesario comprobar que los registros se mantienen al día, así como para verificar que las existencias físicas concuerdan con estos. Se realiza sin paralizar las actividades del almacén, pudiendo o no bloquear temporalmente la documentación y el despacho por el plazo que dure el mismo.
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Políticas
    p(data-aos="fade-up") Hace referencia a un conjunto de lineamientos o principios estructurados, en distintos niveles, que guían la toma de decisiones y la acción de una empresa. A continuación, observe un ejemplo de políticas enfocadas a las actividades y gestión del inventario.
    .cont_5_1.mt-5.pt-4.pb-5
      .row.col-lg-10.m-auto
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta1.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 1
            div
              p.mb-0 La gerencia administrativa y financiera es la encargada de programar y organizar el inventario general; pero también puede disponer que se efectúe un inventario selectivo en caso de que sea necesario.
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta2.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 2
            div
              p.mb-0 El jefe de almacén será el responsable de realizar de manera periódica los inventarios selectivos en el almacén y reportar los resultados.
        .col-lg-4
          .tarjeta-numerada.color-primario.p-5.tarjeta3.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 3
            div
              p.mb-0 La gerencia administrativa y financiera será autorizada para realizar ajustes al inventario, en su defecto, por la gerencia general.
      .row.col-lg-10.m-auto.mt-4.justify-content-center
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.tarjeta3.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 4
            div
              p.mb-0 Durante el inventario general, no se realizan ni recibos ni entregas de mercancías de la bodega.
        .col-lg-4
          .tarjeta-numerada.color-primario.p-5.tarjeta1.h-100(data-aos="fade-up")
            .tarjeta-numerada__numero
              .h2 5
            div
              p.mb-0 En los inventarios selectivos, no es necesario frenar la actividad de recibo y entrega de mercancías, esto solo si se hace muy necesario, y se hará un comunicado por parte de la gerencia administrativa al respecto.
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Desarrollo de las actividades
    p(data-aos="fade-up") Se detallan paso a paso las actividades correspondientes al proceso (Inventarios), definiendo los responsables de la ejecución de cada una de ellas. Las actividades deben ser redactadas de manera que todos entiendan y no se presenten confusiones.
    p.mt-5.fw-bold.text-center(data-aos="fade-up") Ejemplo de desarrollo de actividades en un inventario general:
    .col-lg-10.m-auto.mt-5
      PasosA.color-primario(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0(data-aos="fade-right") La gerencia administrativa y financiera programa los inventarios generales para que sean ejecutados para cierre de cada año.
          .col-md-6.text-center(style="place-self:center;")
            figure.text-center
              img.m-auto(src="@/assets/curso/tema5/6.svg" data-aos="fade-left" style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row
          .col-md-6.text-center.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img.m-auto(src="@/assets/curso/tema5/7.svg" data-aos="fade-right" style="max-width:150px;display:inline;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            p.mb-0.text-start(data-aos="fade-left") La gerencia administrativa y financiera hará la asignación y nombramiento de las personas involucradas, cada una con sus responsabilidades, y se encargará de la logística del inventario.
        .row
          .col-md-6.mb-4.mb-md-0(style="place-self:center;")
            p.mb-0(data-aos="fade-right") Se pasará comunicado al personal involucrado en el inventario informando la fecha y duración de este, así como las demás instrucciones que se consideren necesarias.
          .col-md-6.text-center(style="place-self:center;")
            figure.text-center
              img.m-auto(src="@/assets/curso/tema5/8.svg" data-aos="fade-left" style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row
          .col-md-6.text-center.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img.m-auto(src="@/assets/curso/tema5/9.svg" data-aos="fade-right" style="max-width:150px;display:inline;" alt="Imagen decorativa")
          .col-md-6(style="place-self:center;")
            p.mb-0.text-start(data-aos="fade-left") El jefe de almacén dispondrá y preparará el almacén para la realización del inventario, poniendo mayor énfasis en el orden y la limpieza, y generará el listado actual de inventario y lo pasará a la gerencia administrativa y financiera.
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Registros
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-acento-contenido.p-4(style="background-color:#DCFBFF;")
          p.mb-0(data-aos="fade-up") Son documentos que permiten evidenciar la realización de una actividad y, en cada procedimiento, se debe dejar consignada dicha información. 
        p.mt-4(data-aos="fade-up") A continuación, se observa el listado de registros que la empresa tiene para dejar evidencia de la realización del inventario:
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | F-O-022 Inventario general.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | F-O-023 Inventario selectivo.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | F-O-024 Ajustes de inventario.
      .col-lg-4(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema5/10.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Flujograma
    p(data-aos="fade-up") Un flujograma o diagrama de flujo consiste en una figura o gráfica que representa una serie de procesos o un grupo de actividades por medio de símbolos, y permite tener una visión general del proceso, identificar los puntos críticos y otras ventajas más.
    p.mt-5.text-center.fw-bold(data-aos="fade-up") A continuación, se observa un ejemplo de un flujograma del proceso de inventarios.
    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        p.mb-0 #[b Figura 7]. Flujograma inventarios
    .col-lg-8.m-auto.mt-4
      figure
        img.m-auto(src="@/assets/curso/tema5/11.svg" data-aos="zoom-in-up" alt="Imagen con un ejemplo de un flujograma de inventarios, el cual se representa de la siguiente manera: Verificar stock de MX en PC. Verificar stock físico. ¿Concuerdan las cantidades? Sí Diligenciar formato No Buscar en bodegas, A. cuarentena, vencimiento, etc. Se encuentran los productos Sí Diligenciar formato No Informar al jefe inmediato" style="max-width:950px;")
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Control de cambios
    p(data-aos="fade-up") Todos los cambios que se realicen al documento deben estar registrados en los controles de cambios, incluyendo cuando cambien de versión. Con esto, se dará a conocer que el proceso ha venido teniendo mejoras y se utiliza la versión más actualizada.
    p.mt-5.fw-bold.text-center(data-aos="fade-up") A continuación, se muestra un ejemplo de los elementos a tener en cuenta para registrar los cambios en el documento:
    .col-lg-8.m-auto.mt-4
      figure
        img.m-auto(src="@/assets/curso/tema5/12.svg" data-aos="zoom-in-up" alt="Imagen de un formato sobre los elementos a tener en cuenta para registrar los cambios en el documento, el cual debe llevar: Versión Fechas Descripción modificación" style="max-width:850px;")
    .row.mt-5.mb-5.titulo_decorativo1(data-aos="fade-up" style="max-width:fit-content;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa" style="max-width:350px;")
      .col.p-0(style="place-self:center;")
        h3.mb-0(style="border-bottom:3px #81D4FA solid;") 
          span.ps-2 Indicadores
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mt-4(data-aos="fade-up") Son de gran utilidad para medir el grado de cumplimiento con los objetivos propuestos. Para su creación, se debe determinar la siguiente información:
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            |   Objetivo al que apunta.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Nombre.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Fórmula.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            |   Frecuencia de medición.
        p.mt-4(data-aos="fade-up") En la siguiente tabla, se observan algunos ejemplos de indicadores para un servicio o establecimiento farmacéutico, además de un ejemplo de un indicador de inventario con: nombre, fórmula y frecuencia de medición (anual, mensual).
      .col-lg-4(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema5/13.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        p.mb-0 #[b Tabla 1]. Ejemplos indicadores
      figure
        img.m-auto(src="@/assets/curso/tema5/14.svg" data-aos="zoom-in-up" alt="Imagen que contiene una tabla con un formato de ejemplos de indicadores, la cual tiene la siguiente información: Nombre - Fórmula - Periodicidad Indicadores de actividad Gestión adquisiciones Pedidos - Número de pedidos realizados - Mensual Procedimientos de compras - Número de concursos públicos - Anual Número de procedimientos negociados - Anual Número de especialidad concurso/número total de especialidades - Anual Número de especialidades negociadas/número total de especialidades - Anual Gestión almacenes Inventarios - Número de inventarios totales - Anual  Número de inventarios parciales - Mensual Medicamentos inventariados/total medicamentos - Mensual Caducidades - Número de medicamentos caducados - Mensual Gestión de la información Número de informes a dirección - Trimestral Número de informes a unidades clínicas - Trimestral Número de informes a servicio murciano - Mensual" style="max-width:950px;")

</template>

<script>
export default {
  name: 'Tema5',
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
.cont_5_1
  position: relative
.cont_5_1:before
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
@media screen and (max-width: 992px)
  .border-radius_hide
    border-radius: 0px !important
</style>
