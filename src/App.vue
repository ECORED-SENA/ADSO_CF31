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
.seccion-principal
  overflow-x: hidden
.banner-principal__img
  img
    max-height: 334px
    width: auto
    margin-left: auto
    margin-right: auto
.banner-principal__row
  .banner-principal__info
    @media (min-width: 1400px)
      width: 50%
.titulo-principal
  .titulo-principal__numero
    background-color: #ffa726
    span
      color: white
</style>
