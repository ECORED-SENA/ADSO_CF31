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
      h1#t_1 Fundamentos de React JS
    p.mb-5 React JS, es una nueva tecnología importante para la construcción de software en su componente Front-End, que requiere tener en cuenta algunas consideraciones, se pueden ver a continuación:

    .row.justify-content-center.py-5.bg-carousel-1
      .col-12
        SlyderF(columnas="col-12 col-xl-4")
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_1.svg' alt='AvatarTop')
            h2.text-center ¿Qué es?
            p.text-center Es una nueva tecnología, de reciente desarrollo, que se relaciona con una librería o biblioteca.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_2.svg' alt='AvatarTop')
            h2.text-center ¿En qué se basa?
            p.text-center Trabaja sobre componentes principalmente.
          
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_3.svg' alt='AvatarTop')
            h2.text-center  ¿Cuál es su propósito?
            p.text-center Inicialmente fue pensada para solucionar el problema de interfaces que estas actualizando información constantemente. La mayoría de las aplicaciones usadas en la actualidad, actualizan información a cada momento, mediante nuevos comentarios, notificaciones, publicaciones imágenes, etc.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_4.svg' alt='AvatarTop')
            h2.text-center ¿Quién la creo?
            p.text-center Fue creada por originalmente por Facebook, y hoy en día es una de las librerías más populares que existen para página web y Front-End.
          
          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_5.svg' alt='AvatarTop')
            h2.text-center ¿Cómo trabaja?
            p.text-center Trabaja mediante una librería de JS, una librería es una colección de procesos almacenados en objetos o módulos, es decir, códigos que aceleran el flujo de trabajo, pues consiste en reciclar algo, que antes ya alguien ha creado.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_6.svg' alt='AvatarTop')
            h2.text-center Requisitos
            p.text-center Es necesario tener un lenguaje para escribir el código, además que esta diseñada para automatizar, mejorar, y acelerar el proceso de desarrollo.

          .tarjeta.color-acento-botones.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/imagenes/tema1/imagen_t_1_carousel_img_7.svg' alt='AvatarTop')
            h2.text-center Antes de empezar
            p.text-center Se recomienda tener conocimientos de Java Script, HTML y XML, para un mejor manejo de esta tecnología.

    //- Tema 1.1
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_1 1.1  ¿Qué es React JS?

    .container-imagen-t-1-2
      img(src='@/assets/imagenes/tema1/imagen_t_1_1.png', alt='')
      p(data-aos="fade-up" data-aos-delay="100").bloque-text-t-1-2 Es una biblioteca JavaScript de código abierto, desarrollada por la multinacional Facebook para crear interfaces de usuario, es importante tener en cuenta que una biblioteca o librería, es un conjunto de funcionalidades ya construidas y que son re-utilizables siguiendo su sintaxis. Su principal objetivo además de facilitar el desarrollo de aplicaciones de una sola página, es ser sencillo, declarativo y fácil de combinar.
    Separador

    //- Tema 1.2
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_2 1.2. ¿Qué es JSX?

    #bloque-t-1-3.bloque-texto-g
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/imagenes/tema1/imagen_t_1_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left" data-aos-delay="100")
        p.mb-0 Su nombre viene de la composición de Java Script (JS) + XML = (JSX) y corresponde a la sintaxis propuesta en React JS para escribir elementos de interfaz web compuestos por Java Script + HTML, en donde el HTML sigue las normas de código bien formado XML.
        div.decorador-text
    Separador

    //- Tema 1.3
    .container_t_1_3
      .titulo-segundo.color-acento-contenido.my-5
        h2#t_1_3 1.3 Instalando React JS

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

    TabsB.color-acento-contenido.mb-5.pestanasb_t_1_3
      .py-4.py-md-5(titulo="Paso" :icono="require('@/assets/imagenes/tema1/icono_t_1_3_01.svg')")
        .row
          .content_acordeon
          p Ingrese a  Node >= 14.0.0 and npm >= 5.6  que corresponde a la página oficial de nodejs https://nodejs.org/en/ y descargue la versión para windows de 64 bits.
          img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_1.png').pb-4.mx-auto.mt-3(style="max-width: 1000px")
      .py-4.py-md-5(titulo="Paso" :icono="require('@/assets/imagenes/tema1/icono_t_1_3_02.svg')")
        .row
          .content_acordeon
            p Descargue en el sitio de su preferencia
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_2.png').pb-4.mx-auto.mt-3(style="max-width: 1000px")
      .py-4.py-md-5(titulo="Paso" :icono="require('@/assets/imagenes/tema1/icono_t_1_3_03.svg')")
        .row
          .content_acordeon
            p Ejecute el archivo descargado como administrador de windows y continúe el wizard haciendo clic en next en cada pantalla.
            .d-flex.flex-wrap.mb-2
              img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_3.png').col-12.col-md-6.p-2.ms-auto(style="max-width: 500px")
              img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_4.png').col-12.col-md-6.p-2.me-auto(style="max-width: 500px")
              img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_5.png').col-12.col-md-6.p-2.ms-auto(style="max-width: 500px")
              img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_6.png').col-12.col-md-6.p-2.me-auto(style="max-width: 500px")
              img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_7.png').col-12.col-md-6.p-2.mx-auto(style="max-width: 500px")
      .py-4.py-md-5(titulo="Paso" :icono="require('@/assets/imagenes/tema1/icono_t_1_3_04.svg')")
        .row
          .content_acordeon
            p Por último de clic en finish para terminar la instalación.
            img(src='@/assets/imagenes/tema1/imagen_t_1_3_acordeon_8.png').col-12.col-md-7.pb-4.me-auto(style="max-width: 500px")

    //- Tema 1.4
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_4 1.4 Crear un proyecto
    div.d-flex.flex-wrap
      .col-12.col-md-6.order-2.order-md-1
        p Una vez llevado a cabo el proceso de instalación del paso anterior de node y npm, se puede crear el proyecto React e ir ejecutando los siguientes comandos:
        div(data-aos="fade-right" data-aos-delay="200").container-commands-t_1_4
          p 1. npx create-react-app my-app 
            br
            | 2. cd my-app
            br
            | 3. npm start
        p Iniciar a la creación del proyecto, mediante la siguiente secuencia:
      .col-12.col-md-6.order-1.order-md-2
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_1.png').mb-4.ps-0.ps-md-3
    ImagenInfograficaB.color-primario.mb-5.img-install-node
      template(v-slot:imagen)
        figure
          img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_2.png', alt='Pasos para crear un proyecto en Node js')

      div(x="11%" y="48%" tooltip="Crear un comando ubuntu" numero="1")
        h5 Crear un comando ubuntu
        p Desde línea de comando Ubuntu ejecute npx create-react-app my-app
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_1.png')

      div(x="26.2%" y="76%" tooltip="Ejecución de npx create-react-app my-app" numero="2")
        h5 Ejecución de npx create-react-app my-app
        p Una vez el sistema termine la ejecución del paso anterior ejecute cd my-app 
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_2.png')
      
      div(x="42%" y="48%" tooltip="Ejecute npm start para lanzar el proyecto" numero="3")
        h5 Ejecute npm start para lanzar el proyecto
        p Dentro de la carpeta ejecute npm start para lanzar el proyecto
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_3.png')

      div(x="58%" y="76%" tooltip="Proyecto React" numero="4")
        h5 Proyecto React
        p El sistema lanza el primer proyecto React en el navegador como lo muestra la siguiente imagen.
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_4.png')

      div(x="73.7%" y="48%" tooltip="Ejecute npm start para lanzar el proyecto" numero="5")
        h5 Ejecute npm start para lanzar el proyecto
        p Una vez finalizado la creación del proyecto, usted deberá revisar que la estructura del proyecto react, este conformada del siguiente conjunto de carpetas y archivos
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_5.png')
      
      div(x="89%" y="76%" tooltip="Ejecute npx create-react-app my-app" numero="6")
        h5 Ejecute npx create-react-app my-app
        p Desde línea de comando Windows ejecute npx create-react-app my-app
        img(src='@/assets/imagenes/tema1/imagen_t_1_4_img_interactive_6.png')

    //- Tema 1.5 y Tema 1.6
    .container_t_1_n5_y_n6
      //- Tema 1.5
      .titulo-segundo.color-acento-contenido.my-5
        h2#t_1_5 1.5 Propiedades y Estados de los Componentes
      p Un componente en React hace referencia a la posibilidad de definir de manera independiente una funcionalidad que puede ser re-utilizable dentro del sistema, en esencia estas funcionalidades se escriben a manera de funciones JavaScript que reciben unas entradas que se denominan propiedades y devuelven una forma de visualización. 
      br
      p Ejemplo de un componente denominado Bienvenido que recibe una propiedad y devuelve un párrafo de saludo.
      img(src='@/assets/imagenes/tema1/imagen_t_1_5_img_1.png').img-primary
      .col-12.col-md-10.d-flex.flex-wrap.mx-auto
        .col-12.col-md-6.bg-container-t_1_5(data-aos="fade-right" data-aos-delay="300")
          p Además, a un componente se le puede aplicar el concepto de estado en donde este, se define como la capacidad de especificar variables que pueden cambiar su valor en el tiempo, convirtiéndose en un comportamiento interno del componente, estos componentes se definen con el nombre de clase con la palabra reservada class.
        .col-12.col-md-6(data-aos="fade-left" data-aos-delay="300")
          img(src='@/assets/imagenes/tema1/imagen_t_1_5_img_2.png')
      
      //- Tema 1.6
      .titulo-segundo.color-acento-contenido.my-5
        h2#t_1_6 1.6 Eventos en React
      p Los eventos en React se manejan semejante a los del DOM se le pasa una función al controlador del evento.
      
      img(src='@/assets/imagenes/tema1/imagen_t_1_6_img_1.png').pb-5
    Separador

    //- Tema 1.7
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_7 1.7 Listas y keys
    p.mb-5.pb-4 Las listas hacen referencia a un arreglo de datos, que bien puede ser un arreglo de objetos o de datos simples con carácteres, números, etc. Como toda lista en programación, React proporciona un método para extraer estos datos y mostrarlos en la página en la cual se está trabajando, a continuación se presenta cómo se hace:
    .container_t_1_7
      ImagenInfograficaB.color-acento-contenido.mb-5.img-t_1_7
        template(v-slot:imagen)
          figure
            img(src='@/assets/imagenes/tema1/imagen_t_1_7.png', alt='Pasos para crear un proyecto en Node js')

        div(x="10%" y="75%" tooltip="Listas y keys JS" numero="").content-infografia_t_1_7
          p En React es necesario pasar arreglos de datos a listas para el manejo de algunos componentes lo cual se trabaja con la función map de la siguiente manera en donde se devuelve un elemento < li > por cada número.
          img(src='@/assets/imagenes/tema1/imagen_t_1_7_img_interactive_1.png')

        div(x="90%" y="75%" tooltip="Listas y keys JSX" numero="").content-infografia_t_1_7
          p Adicional al manejo de listas es muy importante tener en cuenta el identificador único de componentes para evitar errores en el DOM por lo tanto es necesario manejar el atributo key.
          img(src='@/assets/imagenes/tema1/imagen_t_1_7_img_interactive_2.png')
    Separador

    //- Tema 1.8
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_8 1.8 Formularios

    .col-12.container-t_1_8
      .col-12.col-md-6(data-aos="fade-right" data-aos-delay="200")
        img(src='@/assets/imagenes/tema1/imagen_t_1_5_img_2.png').mb-4.mb-md-0
      .col-12.col-md-6.bg-container-t_1_8(data-aos="fade-left" data-aos-delay="200")
        p Además, a un componente se le puede aplicar el concepto de estado en donde este, se define como la capacidad de especificar variables que pueden cambiar su valor en el tiempo, convirtiéndose en un comportamiento interno del componente, estos componentes se definen con el nombre de clase con la palabra reservada class.
    Separador

    //- Tema 1.9
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_9 1.9 Concepto de clases en React
    p.mb-5 Las clases son otra forma de definir un componente en React se caracterizan por tener propiedades y a diferencia de las funciones pueden definir estados propios sin utilizar el concepto de Hook; dentro de los componentes de clase existe una función constructora que se utiliza para definir el estado inicial del componente. Es muy importante llamar a la función super() dentro del constructor para que los parámetros funcionen adecuadamente, como puede verse en la siguiente imagen:
    div.container_t_1_9
      img(src='@/assets/imagenes/tema1/imagen_t_1_9_1.png')
      .decorator_t_1_9
        p Explorar el siguiente recurso y conocer los aspectos más relevantes relacionados con el concepto de clases en React:
    .row
      .col-12.col-md-7.mb-5.mb-md-0.container_line_time_t_1_9.order-2.order-md-1
        LineaTiempoD.color-primario
          p(numero="1" titulo="Componentes ") Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
          
          p(numero="2" titulo="React") React le permite definir componentes como clases o funciones. Los componentes definidos como clases actualmente proporcionan una serie de características extra 
          
          p(numero="3" titulo="La función super()") La función super() dentro del constructor, es un componente de React válido porque acepta un solo argumento de objeto “props” (que proviene de propiedades) con datos y devuelve un elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.
          
          p(numero="4" titulo="Nombres de componentes") Comience siempre los nombres de componentes con una letra mayúscula.
            br
            br
            | React trata los componentes que empiezan con letras minúsculas como etiquetas del DOM. Por ejemplo, < div /> representa una etiqueta div HTML pero < Welcome /> representa un componente y requiere que Welcome esté definido.
      .col-12.col-md-5.px-5.order-1.order-md-2
        img(src='@/assets/imagenes/tema1/imagen_t_1_9_2.png').mb-4(data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="center-bottom")

    //- Tema 1.10
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_10 1.10 Funciones Hooks
    p Es el concepto que permite darle a los componentes definidos por medio de funciones manejo de variables de estado locales, así como lo hacen las clases.
      br
      br
      | Los Hooks son funciones JavaScript e imponen dos reglas:
    .container_t_1_10
      .container_cards_1_10
        .col-12.d-none.d-md-flex
          img(src="@/assets/imagenes/tema1/imagen_t_1_10.svg").pb-3(data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000")
        .col-12.col-md-6.mb-3.mb-md-0
          .card_1_10.mx-auto.ms-md-auto.me-md-2
            img(src="@/assets/imagenes/tema1/card_imagen_t_1_10_1.svg")
            p Solo llamar Hooks en el nivel superior. No hay que llamar Hooks dentro de loops, condiciones o funciones anidadas.
        .col-12.col-md-6
          .card_1_10.mx-auto.me-md-auto.ms-md-2
            img(src="@/assets/imagenes/tema1/card_imagen_t_1_10_1.svg")
            p Solo llamar Hooks desde componentes de función de React. No hay que llamar Hooks desde las funciones regulares de JavaScript.
        .col-12.d-none.d-md-flex
          img(src="@/assets/imagenes/tema1/imagen_t_1_10_1.svg").pt-3(data-aos="flip-right" data-aos-delay="400" data-aos-duration="1000")
    p.mt-3.mb-0 Ejemplo de una función que utiliza el Hook useState
    .d-flex.flex-wrap.mt-5
      img(src='@/assets/imagenes/tema1/imagen_t_1_10_2.png').col-12.col-md-6.px-0.order-2.order-md-1
      img(src='@/assets/imagenes/tema1/imagen_t_1_10_3.png').col-12.col-md-6.px-0.order-1.order-md-2
    Separador

    //- Tema 1.11
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_11 1.11 Ciclos de Vida de los Componentes de React

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        p.mb-0 Métodos de ciclo de vida de React
      table
        thead
          tr
            th Nombre del Método
            th Utilidad
        tbody
          tr
          tr
            td componentWillMount()
            td Se ejecuta justo antes del primer pintado del componente.
          tr
            td componentDidMount()
            td Se ejecuta después del primer pintado del componente.
          tr
            td componentWillReceiveProps(nextProps)
            td Se invoca cuando las propiedades se van a actualizar.
          tr
            td shouldComponentUpdate(nextProps, nextState)
            td Se invocará cuando se producen cambios de propiedades o cambios de estado.
          tr
            td componentWillUpdate(nextProps, nextState)
            td Este se invocará justo antes de que el componente vaya a actualizar su vista.
          tr
            td componentDidUpdate(prevProps, prevState)
            td Este se invocará justo después de que el componente vaya a actualizar su vista.
          tr
            td componentWillUnmount()
            td Se ejecuta en el momento que el componente se va a retirar del DOM.

    p.py-4 Se puede observar en la siguiente imagen cómo quedará el archivo:
    .container_t_1_11
      img(src='@/assets/imagenes/tema1/imagen_t_1_11_1.png').mb-5
      button(@click="modal_t_11 = true") ATENCIÓN
    ModalA(:abrir-modal.sync="modal_t_11")
      .row.align-items-center
        .col-12.modal_t_11
          p En React.js los componentes que no sean puros (todos los que se crean mediante clases o React.createClass) poseen algo conocido como el ciclo de vida. Este ciclo de vida, son una serie de funciones que se ejecutan en distintos momentos de la vida del componente y nos permiten realizar distintas acciones en estos momentos.
    p.pt-5 Las utilidades del método de ciclo de vida de React, pueden ser detalladas a continuación: 

    //- Tema 1.12
    .titulo-segundo.color-acento-contenido.my-5
      h2#t_1_12 1.12 Ejecutar la aplicación
    p.mb-5 Para ejecutar una aplicación React JS, se usa el comando npm start y para generar la versión de producción se debe ejecutar el siguiente comando npm run build.
    img(src='@/assets/imagenes/tema1/imagen_t_1_12_1.png').img_t_1_12_1
    p Este comando genera la carpeta build con la versión compilada y minificada del proyecto React SPA (Single Page Aplication), a continuación, se observará cómo debe quedar la organización y registro de éste proceso.
    .d-flex.flex-wrap.mt-5
      img(src='@/assets/imagenes/tema1/imagen_t_1_12_2.png').col-12.col-md-6(style="")
      img(src='@/assets/imagenes/tema1/imagen_t_1_12_3.png').col-12.col-md-6.d-flex.my-auto(style="max-height: 610px")
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
    modal_t_11: false,
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
    width: 65px
    height: 65px
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-content: center
    background-color: #ffa726
    color: white
    border-radius: 50%
    font-size: 2.5rem
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
.pestanasb_t_1_3
  .tabs-b__tab__icon
    img
      max-height: 50px
  .tabs-b__tab__title
    span
      font-size: 1rem
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
.container-commands-t_1_4
  background-color: #FCEAB3
  position: relative
  width: 80%
  max-width: 340px
  margin-right: auto
  margin-left: auto
  ::before
    content: ''
    position: absolute
    top: 0
    left: 0
    height: 8px
    width: 24px
    background-color: #FFCA28
  p
    padding: 1rem 2rem
.img-install-node
  width: calc(100% + 6rem)
  position: relative
  left: -3rem
  .img-infografica-b__modal
    background-color: #12263F
  @media (max-width: 768px)
    left: -1.5rem
    width: calc(100% + 3rem)
.container_t_1_n5_y_n6
  margin-left: -3rem
  margin-right: -3rem
  padding-right: 3rem
  padding-left: 3rem
  background: linear-gradient(1deg, #4dd0e136, transparent)
  .img-primary
    max-width: 945px
    margin-right: auto
    margin-left: auto
    padding-top: 1.5rem
    padding-bottom: 2rem
  .bg-container-t_1_5
    background-color: #039BE5
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    p
      color: white
      padding: 2rem
      margin-bottom: 0
  @media (max-width: 768px)
    margin-left: -1.5rem
    margin-right: -1.5rem
    padding-right: 1.5rem
    padding-left: 1.5rem
.container_t_1_7
  background-image: url('../assets/imagenes/tema1/container-imagen_t_1_7.png')
  background-position: top
  background-repeat: no-repeat
  margin-left: -3rem
  margin-right: -3rem
  margin-top: 5rem
  .img-infografica-b
    max-width: 686px
    margin-left: auto
    margin-right: auto
  img
    margin-left: auto
    margin-right: auto
    position: relative
    top: -3.5rem
  .img-t_1_7
    position: relative
    top: -3.5rem
    color: #12263F
    img
      top: 0
      max-height: 526px
      max-width: 686px
    .img-infografica-b__modal
      background-color: #F4FDFF
    .content-infografia_t_1_7
      margin-right: auto
      margin-left: auto
    .content-infografia_t_1_7 p, .img-infografica-b__modal__btn-cerrar i
      color: #12263F !important
  .img-t_1_7.img-infografica-b--open
    max-width: 100%
    max-height: 526px !important
  @media (max-width: 768px)
    margin-left: -1.5rem
    margin-right: -1.5rem
    .img-t_1_7 .content-infografia_t_1_7
      width: 100%
.container-t_1_8
  background-color: #1565C0
  display: flex
  flex-wrap: wrap
  .bg-container-t_1_8
    display: flex
    flex-wrap: wrap
    align-items: center
    p
      color: white
      padding: 2rem
.container_t_1_9
  position: relative
  margin-left: -3rem
  margin-right: -3rem
  margin-bottom: 3rem
  .decorator_t_1_9
    width: 100%
    max-width: 820px
    position: absolute
    bottom: -1rem
    left: 50%
    transform: translateX(-50%)
    background-color: #FCEAB3
    padding: 1.5rem 2rem
    p
      margin-bottom: 0
    ::before
      content: ''
      position: absolute
      top: 0
      left: 0
      height: 8px
      width: 24px
      background-color: #FFCA28
  @media (max-width: 768px)
    margin-right: -1.5rem
    margin-left: -1.5rem
    .decorator_t_1_9
      position: relative
      bottom: 1rem
.container_line_time_t_1_9
  .linea-tiempo-d__item--selected
    .tarjeta
      background-color: #C9F1F6
.container_t_1_10
  background-image: url('../assets/imagenes/tema1/container-imagen_t_1_10.png')
  background-repeat: no-repeat
  margin-right: -3rem
  margin-left: -3rem
  margin-top: 12rem
  img
    max-width: 820px
    margin-left: auto
    margin-right: auto
    position: relative
    top: -9rem
  p
    position: relative
    left: 3rem
    bottom: 4rem
  .container_cards_1_10
    width: 100%
    display: flex
    flex-wrap: wrap
    align-items: stretch
    height: 100%
    position: relative
    top: -8rem
    img
      max-width: 247px
      position: relative
      top: 0
      left: 0
      bottom: 0
    .card_1_10
      max-width: 400px
      background-color: #1565C0
      padding: 2rem 3rem
      border-radius: 46px
      height: 100%
      img
        max-width: 140px
        position: relative !important
        top: 0
        margin-bottom: 3rem
      p
        position: relative
        left: 0
        bottom: 0
        margin-bottom: 0
        color: white
  @media (max-width: 768px)
    margin-right: -1.5rem
    margin-left: -1.5rem
    padding-right: 2rem
    padding-left: 2rem
    margin-bottom: 5rem
    img
      top: 0
    p
      bottom: -4rem
      left: 0
    .container_cards_1_10
      top: -3rem
.img_t_1_12_1
  max-width: 1030px
  margin-right: auto
  margin-left: auto
  margin-bottom: 1.5rem
.container_t_1_11
  margin-right: -3rem
  margin-left: -3rem
  padding: 3rem
  background-color: #E5F9FC
  text-align: center
  img
    max-width: 945px
    margin-right: auto
    margin-left: auto
  button
    background-color: #039BE5
    color: white
    min-height: 58px
    min-width: 189px
    border-radius: 58px
    font-weight: bold
  @media (max-width: 768px)
    margin-right: -1.5rem
    margin-left: -1.5rem
.modal_t_11
  min-height: 220px
  display: flex
  align-items: center
  p
    max-width: 600px
    margin-right: auto
    margin-left: auto
    text-align: justify
</style>
