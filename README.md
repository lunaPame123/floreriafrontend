# *APLICACIÓN PARA VENTA DE ARREGLOS FLORALES*

El proyecto consiste en desarrollar una **aplicación web para la venta de arreglos florales**, que permitirá a los usuarios explorar un catálogo de ramos prediseñados según el tipo de evento, como cumpleaños, bodas o aniversarios, así como crear ramos personalizados seleccionando flores, colores y accesorios. La plataforma ofrecerá una interfaz intuitiva y responsiva, permitirá gestionar pedidos de manera segura y proporcionará información detallada sobre cada arreglo. Además, contará con funcionalidades que faciliten la administración de productos y pedidos, garantizando eficiencia y escalabilidad para futuras mejoras del sistema.

## *1. Arquitectura del Proyecto*

La aplicación se desarrollará bajo una **arquitectura multicapa**, separando claramente la presentación, la lógica de negocio y la gestión de datos. El **frontend**, construido en **React**, será responsable de la interacción con los usuarios y consumirá información a través de una **API RESTful**. El **backend**, implementado en **Django (Python)** y complementado con **Django REST Framework**, gestionará la lógica de negocio, la administración de usuarios y la comunicación con la base de datos.

Para el almacenamiento de información se utilizará inicialmente **SQLite**, la base de datos integrada en Django, con la posibilidad de migrar a **MySQL** en fases posteriores para mejorar la escalabilidad y el rendimiento. Esta arquitectura permite un mantenimiento más sencillo, facilita la incorporación de nuevas funcionalidades como pasarelas de pago y garantiza la adaptabilidad del sistema para futuras aplicaciones móviles.

## *2. Librerías Utilizadas*

En el **backend** se emplearán las siguientes librerías: **Django** como framework principal, **Django REST Framework** para la creación de la API, **psycopg2** como conector de la base de datos y **Pillow** para el manejo de imágenes de los arreglos florales.

En el **frontend**, se utilizarán **React** como biblioteca principal, **Axios** para las peticiones HTTP hacia la API y **React Router** para la navegación entre las diferentes vistas de la aplicación.

## *3. Tecnologías Utilizadas*

El desarrollo del proyecto se basa en **Python** para el backend y **JavaScript** para el frontend. La interfaz de usuario se implementará con **React**, complementada con **HTML5** y **CSS3** para la estructura y el diseño de las páginas, y con **Bootstrap 5** para asegurar un diseño responsivo y adaptable a distintos dispositivos. La base de datos se gestionará inicialmente con **SQLite**, con posibilidad de migrar a **MySQL** en etapas posteriores, garantizando estabilidad, seguridad y compatibilidad con Django.

## *4. Requerimientos del Proyecto*
### *4.1. Requerimientos Funcionales*

La aplicación deberá permitir que los usuarios se registren y gestionen sus cuentas de manera segura, incluyendo el inicio de sesión y la recuperación de contraseña en caso de ser necesario. Una vez autenticados, los clientes podrán consultar el catálogo de arreglos florales, visualizando información detallada de cada producto, como su descripción, precio, categoría y una imagen representativa. Además, la plataforma permitirá la creación de ramos personalizados, donde los usuarios podrán seleccionar flores, colores y accesorios, y la aplicación calculará automáticamente el precio del ramo según los elementos elegidos.
La aplicación contará con funcionalidades adicionales que mejorarán la experiencia del usuario, tales como la posibilidad de marcar arreglos favoritos, generar tarjetas digitales personalizadas para acompañar los pedidos y activar el modo regalo sorpresa, que permite programar envíos con mensajes ocultos para los destinatarios. Adicionalmente, la plataforma proporcionará información sobre el significado de cada flor, con el fin de orientar a los usuarios en la selección de los arreglos y garantizar una experiencia de compra más personalizada y significativa.
Desde el punto de vista administrativo, la aplicación permitirá gestionar el catálogo de productos, incluyendo la adición, edición y eliminación de arreglos y flores, así como la supervisión de pedidos y el seguimiento de su estado, garantizando que la gestión interna sea eficiente y organizada. Todos los pedidos, preferencias y personalizaciones estarán respaldados por una base de datos estructurada que asegura la integridad y consistencia de la información.

### *4.2. Requerimientos No Funcionales*
En cuanto a los aspectos no funcionales, la aplicación debe contar con una interfaz de usuario intuitiva, amigable y responsiva, que se adapte a diferentes dispositivos, incluyendo computadoras, tablets y teléfonos móviles. La seguridad es un aspecto fundamental, por lo que la plataforma garantizará el manejo seguro de contraseñas, la protección de los datos personales de los usuarios y el control de acceso según el rol asignado (usuario o administrador).
Asimismo, la aplicación debe ofrecer un rendimiento ágil, con tiempos de carga reducidos para imágenes y contenidos, y disponibilidad continua para los usuarios. La escalabilidad del sistema permitirá la incorporación de nuevas categorías de arreglos, flores o funcionalidades futuras sin necesidad de realizar cambios significativos en la base de datos o en la estructura de la aplicación.

## *5. Base de Datos*
### *5.1. Diagrama Entidad Relación*

<img width="1920" height="1080" alt="Usuarios" src="https://github.com/user-attachments/assets/1ac58734-5f9a-4391-bbf7-fb40c67921c6" />

### *5.2. Digrama Relacional*
<img width="1190" height="714" alt="DiagRel" src="https://github.com/user-attachments/assets/4b41f5fc-b792-475a-b07d-922b7303111a" />
