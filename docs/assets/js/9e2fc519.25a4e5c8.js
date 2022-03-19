"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[729],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return u}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=i(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?t.createElement(h,l(l({ref:a},d),{},{components:n})):t.createElement(h,l({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5077:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={sidebar_position:2},s="Indice de empleados",i={unversionedId:"CRUD-Empleados/indice-empleados",id:"CRUD-Empleados/indice-empleados",title:"Indice de empleados",description:"1. Creamos la ruta donde vamos a mostrar el indice de empleados dentro de app/Config/Routes.php",source:"@site/docs/CRUD-Empleados/indice-empleados.md",sourceDirName:"CRUD-Empleados",slug:"/CRUD-Empleados/indice-empleados",permalink:"/MSC-Prestaexpress-Codeigniter-4/docs/CRUD-Empleados/indice-empleados",editUrl:"https://github.com/vegonz/MSC-Prestaexpress-Codeigniter-4/tree/master/docs/docs/CRUD-Empleados/indice-empleados.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Preparaci\xf3n",permalink:"/MSC-Prestaexpress-Codeigniter-4/docs/CRUD-Empleados/preparacion"},next:{title:"Crear empleado",permalink:"/MSC-Prestaexpress-Codeigniter-4/docs/CRUD-Empleados/crear-empleado"}},d={},m=[],c={toc:m};function u(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"indice-de-empleados"},"Indice de empleados"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creamos la ruta donde vamos a mostrar el indice de empleados dentro de ",(0,o.kt)("inlineCode",{parentName:"li"},"app/Config/Routes.php"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Config/Routes.php"',title:'"app/Config/Routes.php"'},"$routes->get('/empleados', 'EmpleadosController::index');\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Creamos la funci\xf3n index dentro de ",(0,o.kt)("inlineCode",{parentName:"li"},"EmpleadosController.php")," (que creamos en la secci\xf3n de ",(0,o.kt)("a",{parentName:"li",href:"/docs/CRUD-Empleados/preparacion"},"preparaci\xf3n"),"), CodeIgniter incluye una funci\xf3n para crear la ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"paginaci\xf3n"))," de nuestra tabla simplemente indicamos cuantos registros queremos que tenga cada p\xe1gina (en este caso 10 pero puede ser cualquier n\xfamero)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Controllers/EmpleadoController.php"',title:'"app/Controllers/EmpleadoController.php"'},"// vista de indice (tabla) de empleados\npublic function index()\n{\n    // conseguir todos los empleados vigentes de la bd\n    // - creamos una instancia de la tabla de empleados\n    $empleadoModel = new EmpleadoModel();\n\n    // Recuperamos los empleados vigentes a traves del modelo\n    // Como en el modelo establecimos 'fecha_egreso' como $deletedField\n    // CodeIgniter sabe autom\xe1ticamente que aquellos usuarios con una fecha de egreso registrada\n    // son los que no est\xe1n vigentes\n    // ** Armamos la consulta \n    $data['empleados'] = $empleadoModel->paginate(10);\n    \n    // si usamos la librer\xeda paginate, usamos pager para generar los links\n    // que mostraremos en la vista del indice\n    $data['pager'] = $empleadoModel->pager;\n    \n    // enviamos esta informaci\xf3n a la vista\n    // debemos crear una carpeta llama empleado dentro de app/Views\n    // y dentro un archivo php llamado index.php\n    return view('empleado/index', $data);\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Creamos el archivo para la vista en del indice en ",(0,o.kt)("inlineCode",{parentName:"li"},"app/Views/empleado/index.php"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Views/empleado/index.php"',title:'"app/Views/empleado/index.php"'},'<?php echo $this->extend(\'plantilla.php\'); ?>\n<?php echo $this->section(\'contenido\'); ?>\n<div class="container mt-3">\n    <div class="row justify-content-between align-items-center">\n        <h3 class="col-auto">Empleados</h3>\n        <div class="col-auto">\n            <a href="<?php echo base_url(\'empleados/crear\'); ?>" class="btn btn-primary btn-sm" title="Nuevo empleado">\n                <i class="bi bi-plus-circle"></i>\n                Nuevo\n            </a>\n        </div>\n    </div>\n    <table class="table table-striped table-hover">\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Nombre</th>\n                <th>Fecha de ingreso</th>\n                <th>Acciones</th>\n            </tr>\n        </thead>\n        <tbody>\n            <?php if (isset($empleados) and !is_null($empleados)) : ?>\n                <?php foreach ($empleados as $k => $empleado) : ?>\n                    <tr>\n                        <td class="font-weight-bold"><?= $k + 1; ?></td>\n                        <td>\n                            <p class="mb-0"><?= $empleado->emp_nombre; ?></p>\n                            <p class="font-italic text-muted small mb-0"><?= $empleado->usuario; ?></p>\n                        </td>\n                        <td><?= $empleado->fecha_ingreso; ?></td>\n                        <td>\n                            <a href="<?php echo base_url(\'empleados/editar/\' . $empleado->id_empleado); ?>" class="btn btn-outline-primary btn-sm">Editar</a>\n                            <a href="<?php echo base_url(\'empleados/eliminar/\' . $empleado->id_empleado); ?>" class="btn btn-outline-danger btn-sm">Dar de baja</a>\n                        </td>\n                    </tr>\n                <?php endforeach; ?>\n            <?php else : ?>\n                <tr>\n                    <td colspan="4">\n                        <p>La tabla no tiene registros.</p>\n                    </td>\n                </tr>\n            <?php endif; ?>\n        </tbody>\n    </table>\n    <?php echo $pager->links() ?>\n</div>\n</div>\n\n<?php echo $this->endSection(); ?>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"El bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"nuevo"))," usa la url ",(0,o.kt)("inlineCode",{parentName:"p"},"<?php echo base_url('empleados/crear'); ?>")," que crearemos despu\xe9s para el formulario de nuevo empleado")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"El bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"editar"))," usa la url ",(0,o.kt)("inlineCode",{parentName:"p"},"<?php echo base_url('empleados/editar/' . $empleado->id_empleado); ?>")," que crearemos despu\xe9s para el formulario de editar empleado y que usa como par\xe1metro el id_usuario")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"El bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"dar de baja"))," usa la url ",(0,o.kt)("inlineCode",{parentName:"p"},"<?php echo base_url('empleados/eliminar/' . $empleado->id_empleado); ?>")," que crearemos despu\xe9s para eliminar un empleado y que usa como par\xe1metro el id_usuario")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Comprobamos que todo funcione en ",(0,o.kt)("a",{parentName:"li",href:"http://localhost/prestaexpress/public/empleados"},"http://localhost/prestaexpress/public/empleados"),", si usas otro puerto recuerda incluirlo en la url")))}u.isMDXComponent=!0}}]);