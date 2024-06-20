# Proyecto FULLSTACK -Turnero digital

Este proyecto es un turnero digital, creado con ExpressJS, TypeORM, PostgreSQL por el lado del backend y, ReactJS y Vite por el lado del frontend.

## Tabla de contenidos

1. [Tecnologías](#tecnologías)
2. [Funcionalidades](#funcionalidades)
3. [Estructura](#estructura)
4. [Instalación](#instalación)
5. [Requerimientos](#requerimientos)

## Tecnologías

- **ExpressJS**: Framework utilizado para construir alplicaciones de servidor escalables y mantenibles.
- **TypeScript**: Lenguaje que proporciona tipos estáticos, mejorando la seguridad y mantenibilidad del código.
- **TypeORM**: ORM utilizado para la interacción con la base de datos de manera eficiente.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar la información.
- **ReactJS**: Biblioteca para la creación de la interfaz de usuario del proyecto.
- **Vite**: Herramienta de construcción para el frontend que ofrece un entorno de desarrollo rápido y eficiente.

## Funcionalidades

- **Usuarios no autenticados (invitados)**

  - Registrarse en la aplicación.
  - Ver la información de la página e ingresar a la sección de contactos.

<<<<<<< HEAD
![Registro de Usuario](/Digital-Turner/fotosreadme/inicio.png)
![Registro de Usuario](/Digital-Turner/fotosreadme/registro.png)

=======
>>>>>>> 5bba0cd126327cd3553dc84df375630085080d90
- **Usuarios Registrados (users)**
  - Loguearse.
  - Acceder a su información personal - perfil.
  - Solicitar y cancelar turnos.

<<<<<<< HEAD
  ![Registro de Usuario](/Digital-Turner/fotosreadme/inisiarsesion.png)
  ![Registro de Usuario](/Digital-Turner/fotosreadme/perfil.png)
  ![Registro de Usuario](/Digital-Turner/fotosreadme/turno.png)
  ![Registro de Usuario](/Digital-Turner/fotosreadme/turnocancelado.png)

- **Usuarios Admin**
- Ver la lista de todos los usuarios con sus turnos.

![Registro de Usuario](/Digital-Turner/fotosreadme/admin.png)

=======
>>>>>>> 5bba0cd126327cd3553dc84df375630085080d90
## Requerimientos

- Node.js (v14 o superior)
- PostgreSQL

## Instalación

1. Clona el repositorio:

- git clone https://github.com/Florencia-Harmath/Digital-Turner.git
- cd tu_repositorio

2. Instala las dependencias: bash

- npm install

3. Configura las variables de entorno
   - Crea un archivo .development.env y añade las siguientes variables:
   - Ten en cuenta que por seguridad, las debes guardar tus datos en variables de entorno

   **DATABASE_HOST**=localhost
   **DATABASE_PORT**=5432
   **DATABASE_USERNAME**=tu_usuario
   **DATABASE_PASSWORD**=tu_contraseña
   **DATABASE_NAME**=tu_base_de_datos

   - Asegúrate de guardar tus datos sensibles en variables de entorno por motivos de seguridad.

4. Inicia el servidor

- npm run start

## Estructura

Para mantener el código organizado y modular, se ha utilizado un esquema de scaffolding basado en entidades. Todas las funcionalidades relacionadas con una entidad específica están agrupadas en su propia carpeta, facilitando la escalabilidad y el mantenimiento del proyecto. Este enfoque permite:

- Mantener el código limpio y organizado.
- Facilitar la navegación y comprensión del proyecto.
- Añadir nuevas funcionalidades o entidades sin complicar la estructura del proyecto.
- Identificar y solucionar problemas más fácilmente.

<<<<<<< HEAD
En el lado del frontend, se utilizó Vite para un despliegue más rápido y eficiente de la aplicación.
=======
En el lado del frontend, se utilizó Vite para un despliegue más rápido y eficiente de la aplicación.
>>>>>>> 5bba0cd126327cd3553dc84df375630085080d90
