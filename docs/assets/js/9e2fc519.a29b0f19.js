"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[729],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5077:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={sidebar_position:2},p="Indice de empleados",s={unversionedId:"CRUD-Empleados/indice-empleados",id:"CRUD-Empleados/indice-empleados",title:"Indice de empleados",description:"1. Creamos la ruta donde vamos a mostrar el indice de empleados dentro de app/Config/Routes.php",source:"@site/docs/CRUD-Empleados/indice-empleados.md",sourceDirName:"CRUD-Empleados",slug:"/CRUD-Empleados/indice-empleados",permalink:"/docs/CRUD-Empleados/indice-empleados",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CRUD-Empleados/indice-empleados.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Preparaci\xf3n",permalink:"/docs/CRUD-Empleados/preparacion"},next:{title:"Crear empleado",permalink:"/docs/CRUD-Empleados/crear-empleado"}},d={},c=[],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"indice-de-empleados"},"Indice de empleados"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creamos la ruta donde vamos a mostrar el indice de empleados dentro de ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Config/Routes.php"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Config/Routes.php"',title:'"app/Config/Routes.php"'},"$routes->get('/empleados', 'EmpleadosController::index');\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Creamos la funci\xf3n index dentro de ",(0,r.kt)("inlineCode",{parentName:"li"},"EmpleadosController.php"),", CodeIgniter incluye una funci\xf3n para crear la ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"paginaci\xf3n"))," de nuestra tabla simplemente indicamos cuantos registros queremos que tenga cada p\xe1gina (en este caso 10 pero puede ser cualquier n\xfamero)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Controllers/EmpleadoController.php"',title:'"app/Controllers/EmpleadoController.php"'},"// vista de indice (tabla) de empleados\npublic function index()\n{\n    // conseguir todos los empleados vigentes de la bd\n    // - creamos una instancia de la tabla de empleados\n    $empleadoModel = new EmpleadoModel();\n\n    // Recuperamos los empleados vigentes a traves del modelo\n    // Como en el modelo establecimos 'fecha_egreso' como $deletedField\n    // CodeIgniter sabe autom\xe1ticamente que aquellos usuarios con una fecha de egreso registrada\n    // son los que no est\xe1n vigentes\n    // ** Armamos la consulta \n    $data['empleados'] = $empleadoModel->paginate(10);\n    \n    // si usamos la librer\xeda paginate, usamos pager para generar los links\n    // que mostraremos en la vista del indice\n    $data['pager'] = $empleadoModel->pager;\n    \n    // enviamos esta informaci\xf3n a la vista\n    // debemos crear una carpeta llama empleado dentro de app/Views\n    // y dentro un archivo php llamado index.php\n    return view('empleado/index', $data);\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Creamos el archivo para la vista en del indice en ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Views/empleado/index.php"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Views/empleado/index.php"',title:'"app/Views/empleado/index.php"'},'<?php echo $this->extend(\'plantilla.php\'); ?>\n<?php echo $this->section(\'contenido\'); ?>\n<div class="container mt-3">\n    <div class="row justify-content-between align-items-center">\n        <h3 class="col-auto">Empleados</h3>\n        <div class="col-auto">\n            <a href="" class="btn btn-primary btn-sm" title="Nuevo empleado">\n                <i class="bi bi-plus-circle"></i>\n                Nuevo\n            </a>\n        </div>\n    </div>\n    <table class="table table-striped table-hover">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Nombre</th>\n                <th>Fecha de ingreso</th>\n                <th>Acciones</th>\n            </tr>\n        </thead>\n        <tbody>\n            <?php if (isset($empleados) and !is_null($empleados)) : ?>\n                <?php foreach ($empleados as $k => $empleado) : ?>\n                    <tr>\n                        <td class="font-weight-bold"><?= $k + 1; ?></td>\n                        <td>\n                            <p class="mb-0"><?= $empleado->emp_nombre; ?></p>\n                            <p class="font-italic text-muted small mb-0"><?= $empleado->usuario; ?></p>\n                        </td>\n                        <td><?= $empleado->fecha_ingreso; ?></td>\n                        <td>\n                            <a href="" class="btn btn-outline-primary btn-sm">Editar</a>\n                            <a href="" class="btn btn-outline-danger btn-sm">Dar de baja</a>\n                        </td>\n                    </tr>\n                <?php endforeach; ?>\n            <?php else : ?>\n                <tr>\n                    <td colspan="4">\n                        <p>La tabla no tiene registros.</p>\n                    </td>\n                </tr>\n            <?php endif; ?>\n        </tbody>\n    </table>\n    <?php echo $pager->links() ?>\n</div>\n</div>\n\n<?php echo $this->endSection(); ?>\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Comprobamos que todo funcione en ",(0,r.kt)("a",{parentName:"li",href:"http://localhost/prestaexpress/public/empleados"},"http://localhost/prestaexpress/public/empleados"),", si usas otro puerto recuerda incluirlo en la url")))}u.isMDXComponent=!0}}]);