"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[671],{3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?t.createElement(g,i(i({ref:a},c),{},{components:r})):t.createElement(g,i({ref:a},c))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:function(e,a,r){r.r(a),r.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var t=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l="Introducci\xf3n",d={unversionedId:"intro",id:"intro",title:"Introducci\xf3n",description:"Caso de estudio",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/MSC-Prestaexpress-Codeigniter-4/docs/intro",editUrl:"/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Crear Login en CodeIgniter 4",permalink:"/MSC-Prestaexpress-Codeigniter-4/docs/Login/crear-login"}},c={},u=[{value:"Caso de estudio",id:"caso-de-estudio",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n-1",level:2},{value:"Modelo Vista Controlador",id:"modelo-vista-controlador",level:3},{value:"CodeIgniter",id:"codeigniter",level:3},{value:"Herramientas",id:"herramientas",level:2},{value:"Configuraci\xf3n del entorno de trabajo",id:"configuraci\xf3n-del-entorno-de-trabajo",level:2},{value:"Configuraci\xf3n de la base de datos",id:"configuraci\xf3n-de-la-base-de-datos",level:2},{value:"Instalaci\xf3n y configuraci\xf3n de CodeIgniter 4",id:"instalaci\xf3n-y-configuraci\xf3n-de-codeigniter-4",level:2},{value:"Instalaci\xf3n de CodeIgniter 4",id:"instalaci\xf3n-de-codeigniter-4",level:3},{value:"Configuraci\xf3n de CodeIgniter 4",id:"configuraci\xf3n-de-codeigniter-4",level:3}],p={toc:u};function m(e){var a=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("h2",{id:"caso-de-estudio"},"Caso de estudio"),(0,n.kt)("p",null,"Se requiere desarrollar un software para gestionar los pr\xe9stamos de los empleados de Banco de Alimentos de Colima. La empresa cuenta con una caja de ahorro, donde los empleados pueden adquirir pr\xe9stamos, ",(0,n.kt)("strong",{parentName:"p"},"siempre y cuando tenga como m\xednimo un a\xf1o de antig\xfcedad en el trabajo y no tenga activo alg\xfan pr\xe9stamo"),". El monto del pr\xe9stamo va de un mes ",(0,n.kt)("strong",{parentName:"p"},"hasta 6 meses")," de salario. Los pr\xe9stamos se realizan con una tasa de inter\xe9s de 1% sobre saldos insolutos. El pago o descuento del pr\xe9stamo es quincenal y el periodo m\xednimo para pagar son 6 quincenas y m\xe1ximo 48 quincenas."),(0,n.kt)("p",null,"Se requiere un sistema de informaci\xf3n que permita al empleado generar una solicitud, le valide si es o no sujeto del pr\xe9stamo; en caso afirmativo registre los datos del pr\xe9stamo: fecha, nombre del empleado, monto del pr\xe9stamo, periodo del pr\xe9stamo (fecha inicio, fecha fin), quincenas, pagos parciales del empleado (fecha, pago a capital, inter\xe9s, saldo neto). El sistema debe permitir al administrador de la caja de ahorros, ver las solicitudes de pr\xe9stamo realizadas por el empleado; ",(0,n.kt)("strong",{parentName:"p"},"autorizar o no")," los pr\xe9stamos con base a las econom\xedas de la caja; generar un listado con los empleados que tienen pr\xe9stamos especificando (Fecha del pr\xe9stamo, Monto original, pago acumulado a capital, saldo neto), y antes de cada quincena debe reportar a\nRecursos Humanos un listado que especifique el pago a capital, el inter\xe9s y el total a deducir de cada empleado. Tambi\xe9n debe mostrar el importe de intereses cobrados por los pr\xe9stamos durante cierto periodo y por otro lado el historial de cr\xe9ditos de un empleado."),(0,n.kt)("h2",{id:"introducci\xf3n-1"},"Introducci\xf3n"),(0,n.kt)("h3",{id:"modelo-vista-controlador"},"Modelo Vista Controlador"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MVC")," (Modelo-Vista-Controlador) es un patr\xf3n en el dise\xf1o de software com\xfanmente utilizado para implementar interfaces de usuario, datos y l\xf3gica de control. Enfatiza una separaci\xf3n entre la l\xf3gica de negocios y su visualizaci\xf3n [",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Mozilla"),"]."),(0,n.kt)("p",null,"Es decir, permite desarrollar aplicaciones de forma organizada, manteniendo la separaci\xf3n entre la conexi\xf3n a la base de datos (modelo), la visualizaci\xf3n de los datos (vistas), y el ",(0,n.kt)("em",{parentName:"p"},"control")," o manejo de los datos (controlador), es decir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modelo: Maneja datos y l\xf3gica de negocios."),(0,n.kt)("li",{parentName:"ul"},"Vista: Se encarga del dise\xf1o y presentaci\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Controlador: Enruta comandos a los modelos y vistas.")),(0,n.kt)("h3",{id:"codeigniter"},"CodeIgniter"),(0,n.kt)("p",null,"Existen diferentes formas de implementar el patr\xf3n MVC, una forma puede ser creando la estructura y las dependencias manualmente, sin embargo, esto no es algo com\xfan ya que el nivel de complejidad del proyecto se crecer\xeda demasiado, otra forma es mediante un framework, es decir, una herramienta que ya contiene el c\xf3digo necesario para trabajar con este patr\xf3n."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Un framework es un esquema o marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos espec\xedficos, una especie de plantilla que sirve como punto de partida para la organizaci\xf3n y desarrollo de software."),(0,n.kt)("p",{parentName:"blockquote"},"Generalmente, los frameworks son usados  los programadores porque permiten acelerar el trabajo y favorecen que este sea colaborativo, reducir errores y obtener un resultado de m\xe1s calidad. [",(0,n.kt)("a",{parentName:"p",href:"https://www.edix.com/es/instituto/framework/"},"edix"),"].")),(0,n.kt)("p",null,"Existen varios framework que trabajan con MVC en diferentes lenguajes de programaci\xf3n. Codeigniter de PHP es uno de los mas conocidos y utilizados."),(0,n.kt)("h2",{id:"herramientas"},"Herramientas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.apachefriends.org/es/index.html"},"Xampp 8.1.2")," (Entorno de desarrollo que incluye PHP y Mysql)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codeigniter.com"},"Codeigniter 4")," (framework MVC de PHP)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://getbootstrap.com/"},"Bootstrap 5.1")," (framework CSS para creaci\xf3n de interfaces)")),(0,n.kt)("h2",{id:"configuraci\xf3n-del-entorno-de-trabajo"},"Configuraci\xf3n del entorno de trabajo"),(0,n.kt)("p",null,"PHP se trata de un lenguaje de programaci\xf3n que se ejecuta en el servidor, es decir que para poder ejecutar c\xf3digo escrito en PHP necesitamos un servidor, XAMPP es un entorno de trabajo que permite crear un servidor de Apache para ejecutar nuestras aplicaciones."),(0,n.kt)("p",null,"MySQL es un sistema para la gesti\xf3n de base de datos relacionales, XAMPP tambi\xe9n incluye la posibilidad de crear un servidor MySQL."),(0,n.kt)("p",null,"los pasos a seguir para configurar correctamente XAMPP y ejecutar CodeIgniter son:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Descarga de XAMPP ",(0,n.kt)("a",{parentName:"li",href:"https://www.apachefriends.org/es/download.html"},"p\xe1gina oficial")),(0,n.kt)("li",{parentName:"ol"},"Instalar XAMPP"),(0,n.kt)("li",{parentName:"ol"},"Ejecutar el panel de control de XAMPP"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Activar la extensi\xf3n de PHP llamada ",(0,n.kt)("em",{parentName:"strong"},"intl"))),(0,n.kt)("li",{parentName:"ol"},"Despu\xe9s de instalar y configurar XAMPP podemos encender los dos servicios (Apache y MySQL)"),(0,n.kt)("li",{parentName:"ol"},"Comprobar que el servidor Apache funcione correctamente entrando a la ruta ",(0,n.kt)("a",{parentName:"li",href:"http://localhost"},"http://localhost"))),(0,n.kt)("h2",{id:"configuraci\xf3n-de-la-base-de-datos"},"Configuraci\xf3n de la base de datos"),(0,n.kt)("p",null,"XAMPP incluye un Sistema Gestor de Base de Datos de MySQL llamado phpMyAdmin que permite utilizar una interfaz gr\xe1fica para interactuar con nuestra base de datos"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Entramos a ",(0,n.kt)("a",{parentName:"li",href:"http://localhost/phpmyadmin"},"http://localhost/phpmyadmin")),(0,n.kt)("li",{parentName:"ol"},"Hacemos click en ",(0,n.kt)("strong",{parentName:"li"},"Nueva")," para crear una nueva base de datos"),(0,n.kt)("li",{parentName:"ol"},"Introducimos un nombre para nuestra base de datos (en este caso ",(0,n.kt)("strong",{parentName:"li"},"prestaexpress"),") y hacemos click en ",(0,n.kt)("strong",{parentName:"li"},"Crear")),(0,n.kt)("li",{parentName:"ol"},"Podemos usar las opciones de phpMyAdmin para crear nuestras tablas y sus columnas, o podemos ejecutar consultas dando click en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"li"},"SQL")),(0,n.kt)("li",{parentName:"ol"},"Revisamos que nuestras tablas y columnas fueron creadas, si no aparecen se puede dar click en el bot\xf3n de la flecha circular verde para ",(0,n.kt)("strong",{parentName:"li"},"recargar")," las bases de datos.")),(0,n.kt)("h2",{id:"instalaci\xf3n-y-configuraci\xf3n-de-codeigniter-4"},"Instalaci\xf3n y configuraci\xf3n de CodeIgniter 4"),(0,n.kt)("h3",{id:"instalaci\xf3n-de-codeigniter-4"},"Instalaci\xf3n de CodeIgniter 4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Descarga de CodeIgniter desde su ",(0,n.kt)("a",{parentName:"li",href:"https://codeigniter.com/download"},"p\xe1gina oficial")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Descomprimir")," el archivo .zip ",(0,n.kt)("strong",{parentName:"li"},"dentro de la carpeta htdocs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Renombrar")," la carpeta resultante con el ",(0,n.kt)("strong",{parentName:"li"},"nombre de nuestro proyecto")," (este nombre sera con el que abriremos el proyecto desde el navegador web) en este caso ",(0,n.kt)("strong",{parentName:"li"},"prestaexpress")),(0,n.kt)("li",{parentName:"ol"},"Comprobar que CodeIgniter se ejecute correctamente dentro de nuestro servidor Apache en la ruta ",(0,n.kt)("a",{parentName:"li",href:"http://localhost/prestaexpress/public"},"http://localhost/prestaexpress/public"),". ",(0,n.kt)("strong",{parentName:"li"},"(Si nuestro servidor Apache se esta ejecutando dentro de un puerto distinto debemos especificarlo en la url, por ejemplo con el puerto 8080 ",(0,n.kt)("a",{parentName:"strong",href:"http://localhost:8080/prestaexpress/public"},"http://localhost:8080/prestaexpress/public"),")"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La carpeta htdocs es la carpeta donde XAMPP busca los proyectos que se ejecutaran desde el servidor Apache, y es el nombre con el que accederemos desde el navegador web.")),(0,n.kt)("h3",{id:"configuraci\xf3n-de-codeigniter-4"},"Configuraci\xf3n de CodeIgniter 4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Para configurar nuestra aplicaci\xf3n usaremos el archivo de configuraci\xf3n de entorno ",(0,n.kt)("strong",{parentName:"li"},".env"),", ",(0,n.kt)("strong",{parentName:"li"},"re nombramos el archivo env por ",(0,n.kt)("inlineCode",{parentName:"strong"},".env")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env"',title:'".env"'},'CI_ENVIRONMENT = development\n\napp.baseURL = "http://localhost"\n\ndatabase.default.hostname = localhost\ndatabase.default.database = prestaexpress\ndatabase.default.username = root\ndatabase.default.password = \ndatabase.default.DBDriver = MySQLi\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/vegonz/MSC-Prestaexpress-Codeigniter-4/blob/86b6775731fbb97c3e8bb4da5898d11842afedc0/.env"},".env en github")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CI_ENVIRONMENT es utilizado para indicar a CodeIgniter el entorno en que estamos ejecutando nuestra aplicaci\xf3n (development, production) development muestra los errores de ejecuci\xf3n en el navegador web y no debe ser usado cuando nuestra aplicaci\xf3n ya se encuentra en funcionamiento en un servidor"),(0,n.kt)("li",{parentName:"ul"},"app.baseURL es usado para indicar a CodeIgniter la url de todas nuestras rutas y los recursos (archivos, im\xe1genes, etc.)"),(0,n.kt)("li",{parentName:"ul"},"database.default indica el tipo de base de datos y la forma en que se conectara nuestra aplicaci\xf3n, aqu\xed debemos introducir la informaci\xf3n de nuestro servidor MySQL"),(0,n.kt)("li",{parentName:"ul"},"***Si se esta usando Xampp, el usuario por defecto es root sin contrase\xf1a, el servidor (hostname) es localhost, database se refiere al nombre de la base datos que usaremos en el proyecto y DBDriver al tipo de conexi\xf3n que usaremos (por defecto es MySQLi pero tambi\xe9n puede ser Postgres, SQLite3, etc)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El archivo .env es un archivo de configuraci\xf3n que contiene variables de entorno utilizadas para establecer la configuraci\xf3n de nuestra aplicaci\xf3n, incluye varias variables por defecto pero se pueden crear nuevas")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El archivo .env es utilizado para mantener un control de la configuraci\xf3n de nuestra aplicaci\xf3n, no es necesario utilizarlo, pero si no lo usamos entonces debemos establecer esa configuraci\xf3n manualmente en los distintos archivos de configuraci\xf3n como app/config, app/database")))}m.isMDXComponent=!0}}]);