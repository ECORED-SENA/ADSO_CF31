<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    
    //- Tema 1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1#t_1_1 Fundamentos de React JS
    p.mb-5 React JS, es una nueva tecnología importante para la construcción de software en su componente Front-End, que requiere tener en cuenta algunas consideraciones, se pueden ver a continuación:

    .row.justify-content-center.py-5.bg-carousel-1
      .col-12
        SlyderF(columnas="col-12 col-xl-4")
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center ¿Qué es?
            p.text-center Es una nueva tecnología, de reciente desarrollo, que se relaciona con una librería o biblioteca.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center ¿En qué se basa?
            p.text-center Trabaja sobre componentes principalmente.
          
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center  ¿Cuál es su propósito?
            p.text-center Inicialmente fue pensada para solucionar el problema de interfaces que estas actualizando información constantemente. La mayoría de las aplicaciones usadas en la actualidad, actualizan información a cada momento, mediante nuevos comentarios, notificaciones, publicaciones imágenes, etc.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center ¿Quién la creo?
            p.text-center Fue creada por originalmente por Facebook, y hoy en día es una de las librerías más populares que existen para página web y Front-End.
          
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center ¿Cómo trabaja?
            p.text-center Trabaja mediante una librería de JS, una librería es una colección de procesos almacenados en objetos o módulos, es decir, códigos que aceleran el flujo de trabajo, pues consiste en reciclar algo, que antes ya alguien ha creado.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center Requisitos
            p.text-center Es necesario tener un lenguaje para escribir el código, además que esta diseñada para automatizar, mejorar, y acelerar el proceso de desarrollo.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center Antes de empezar
            p.text-center Se recomienda tener conocimientos de Java Script, HTML y XML, para un mejor manejo de esta tecnología.

    //- Tema 1.1
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_2 1.1  ¿Qué es React JS?

    .container-imagen-t-1-2
      img(src='@/assets/imagenes/tema1/imagen_t_1_1.png', alt='')
      p.bloque-text-t-1-2 Es una biblioteca JavaScript de código abierto, desarrollada por la multinacional Facebook para crear interfaces de usuario, es importante tener en cuenta que una biblioteca o librería, es un conjunto de funcionalidades ya construidas y que son re-utilizables siguiendo su sintaxis. Su principal objetivo además de facilitar el desarrollo de aplicaciones de una sola página, es ser sencillo, declarativo y fácil de combinar.
    Separador

    //- Tema 1.2
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_3 1.2. ¿Qué es JSX?

    #bloque-t-1-3.bloque-texto-g
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/imagenes/tema1/imagen_t_1_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su nombre viene de la composición de Java Script (JS) + XML = (JSX) y corresponde a la sintaxis propuesta en React JS para escribir elementos de interfaz web compuestos por Java Script + HTML, en donde el HTML sigue las normas de código bien formado XML.
        div.decorador-text
    Separador

    //- Tema 1.3
    .container_t_1_3
      .titulo-segundo.color-acento-contenido.my-5
        h2#t_1_4 1.3 Instalando React JS

      div.container-imagen-t-1-4
        div.col-12.col-md-6.pe-4
          p Las siguientes instrucciones muestran el proceso de instalación para sistemas operativos Linux versión  Ubuntu 20.04.3 LTS y Windows, en ambos casos, en primer lugar se necesita instalar el servidor denominado Node  y el manejador de paquetes npm para esto se puede empezar haciendo clic en el siguiente link  Node >= 14.0.0 and npm >= 5.6 o puede acceder mediante el enlace https://nodejs.org/en/ a la fecha la versión Node recomendada es 14.1.18 LTS la cual presenta soporte por largo tiempo.
          br
          br
          p.pb-4 A continuación, seguir los siguientes pasos de Instalación sobre Linux Ubuntu 20.04.3 LTS.

        div.col-12.col-md-6.mb-5
          img(src='@/assets/imagenes/tema1/imagen_t_1_3.png')
        h3.mt-4 INSTALANDO REACT JS

        p.w-100 Siga los siguientes pasos de Instalación sobre Linux Ubuntu 20.04.3 LTS.
        SlyderF(columnas="col-12").col-11.mt-5.mx-auto.carousel_t_1_3
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_1.png')
            p Ingrese a  Node >= 14.0.0 and npm >= 5.6 que corresponde a la página oficial de nodejs  https://nodejs.org/en/
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_2.png')
            p Ingrese a la pestaña DOWNLOADS. 
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_3.png')
            p Ingrese a la opción Installing Node.js via package manager 
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_4.png')
            p Ingrese a la opción Debian and Ubuntu based Linux distributions
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_5.png')
            p Ingrese a la opción Node.js binary distributions
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_6.png')
            p Ingrese a la opción Installation instructions  se encuentra al final de la página , vaya hasta encontrar node js.v14.x
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_7.png')
            p Desde línea de comandos ubuntu ingrese las siguientes instrucciones.
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_8.png')
            p A ejecutar curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_9.png')
            p Luego ejecute el comando sudo apt-get install -y nodejs
          div.item-carousel_t_1_3
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_carousel_10.png')
            p Finalmente compruebe la versión instalada v14.18.1 ejecutando el siguiente comando node –version
      p.mt-5.pb-4 Una vez se ha comprobado que la versión instalada es v14.18.1 mediante el comando node –version, continuar con la instalación sobre el sistema operativo Windows, siguiendo los siguientes pasos:

    h3.mt-5 INSTALACIÓN SOBRE SISTEMA OPERATIVO WINDOWS
    p.pb-5 Una vez comprobada que la versión instalada en el punto anterior es v14.18.1 proceda a la instalación sobre el sistema operativo Windows.

    AcordionA.mb-5(tipo="a").container_acordeon_t_1_3
      .row(titulo="Paso 1")
        .content_acordeon
          p Ingrese a  Node >= 14.0.0 and npm >= 5.6  que corresponde a la página oficial de nodejs https://nodejs.org/en/ y descargue la versión para windows de 64 bits.
          img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_1.png').pb-4
      .row(titulo="Paso 2")
        .content_acordeon
          p Descargue en el sitio de su preferencia
          img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_2.png').pb-4
      .row(titulo="Paso 3")
        .content_acordeon
          p Ejecute el archivo descargado como administrador de windows y continúe el wizard haciendo clic en next en cada pantalla.
          .d-flex.flex-wrap.mb-2
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_3.png').col-12.col-md-6.p-2
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_4.png').col-12.col-md-6.p-2
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_5.png').col-12.col-md-6.p-2
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_6.png').col-12.col-md-6.p-2
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_7.png').col-12.col-md-6.p-2.mx-auto
      .row(titulo="Paso 4")
        .content_acordeon
          p Por último de clic en finish para terminar la instalación.
          img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_8.png').col-12.col-md-7.pb-4

</template>

<script>
// import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    // Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
.span-decorator
  position: relative
.span-decorator::after
  content: ''
  position: absolute
  width: 100%
  top: -.5rem
  left: 0
  height: 3px
  background: linear-gradient(red, transparent)
.bg-carousel-1,.carousel_t_1_3
  background-color: #ebf4fd
  position: relative
  margin-left: -3rem
  margin-right: -3rem
  .horizontal-scroll
    margin-right: 2px
    margin-left: 2px
    align-items: stretch !important
  .slyder-f__slyde
    margin-bottom: .3rem
    margin-top: .3rem
  .slyder-f__btn .fas
    width: 75px
    height: 75px
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-content: center
    background-color: #ffa726
    color: white
    border-radius: 50%
    font-size: 3rem
  .color-acento-botones
    background-color: white
    box-shadow: 0 1px 3px 2px #dbdbdb
.container-imagen-t-1-2
  position: relative
  width: 100%
  .bloque-text-t-1-2
    margin-right: auto
    margin-left: auto
    position: relative
    top: -2rem
    padding: 2rem
    width: 90%
    background-color: #4DD0E1
    z-index: 1
#bloque-t-1-3
  min-height: 448px
  .bloque-texto-g__img
    width: 40%
    background-size: contain
    background-position: center
    background-repeat: no-repeat
  .bloque-texto-g__texto
    position: relative
    margin-top: auto
    margin-bottom: auto
    width: 57%
    background-color: #FCEAB3
    .decorador-text
      position: absolute
      top: 0
      left: 0
      width: 24px
      height: 8px
      background-color: #FFCA28
.container-imagen-t-1-4
  display: flex
  flex-wrap: wrap
.container_t_1_3
  margin-left: -3rem
  background: linear-gradient(1deg, #4dd0e136, transparent)
  margin-right: -3rem
  padding-left: 3rem
  padding-right: 3rem
  .carousel_t_1_3
    background-color: transparent
    .item-carousel_t_1_3
      img
        margin-bottom: 3rem
      p
        display: flex
        flex-wrap: wrap
        align-content: center
        justify-content: center
        min-height: 157px
        background-color: #FCEAB3
.container_acordeon_t_1_3
  .tarjeta
    background-color: #F6F6F6
  .acordion__activo
    background-color: #F4FDFF
    .content_acordeon
      width: 90%
      margin-right: auto
      margin-left: auto
      p
        margin-bottom: 3rem
      img
        max-width: 100%
@media (max-width: 1200px)
  .bg-carousel-1,.carousel_t_1_3
    .slyder-f__btn
      width: 10%
      margin-left: -.5rem
@media (max-width: 991px)
  .bg-carousel-1,.carousel_t_1_3
    .slyder-f__btn .fas
      border-radius: 0
@media (max-width: 768px)
  .bg-carousel-1,.carousel_t_1_3
    margin-right: -2rem
    margin-left: -1.5rem
  #bloque-t-1-3
    .bloque-texto-g__texto
      width: 100%
    .bloque-texto-g__img
      width: 60%
      left: 50%
      top: -1rem
      transform: translateX(-50%)
  .container_t_1_3 .carousel_t_1_3 .item-carousel_t_1_3 p
    padding: 1rem
    text-align: center
</style>
