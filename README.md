# challenge-full-stack-alkemy

En este repositorio dejo tanto el back, el front y la base de datos.

# Instrucciones para clonarlo.

Se debe tener instalada la version estable de Node.

Se clona el proyecto.
Se corre npm install tanto en la carpeta /server como en /client<br>
Para correr el server nos posicionamos en /server y damos: nodemon<br>
Para correr el client nos posicionamos en /client y damos: npm run dev<br>

La base de datos es relacional, esta creada en MySQL utilizando WAMP y PHP MyAdmin.<br>
Debemos descargarla, importarla como una nueva base de datos y chequear si en server/index.js se llama igual<br>
Se compone de dos tabLas: usuarios y facturas

# Tecnologia

El back esta construido en Node usando Express.<br>
El front esta construido en React con Vite. <br>
Para las peticiones del front se uso Axios.<br>
Para los estilos, usamos Material UI para React<br>

# Proximos pasos

Registrar nuevo usuario<br> Hecho ✅
Perfil de usuarios <br> Hecho ✅
Recuperar contrasena<br>
Mejorar el sistema de filtros y poder combinarlos<br>
Enviar por email las facturas<br>
Que el usuario pueda configurar limites y alertas para administrar sus gastos.<br>
Exportar en PDF <br>
Crear organizacion con acceso a perfiles <br>
Registrarse con Google, Facebook <br>
Agenda de proveedores y clientes <br>
Alertas por email <br>
Estadisticas <br>
