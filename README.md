🧉 El Buen Mate - Tienda Web
Sitio web estático para la tienda El Buen Mate , dedicada a la venta de yerbas y mates artesanales en Argentina.
Proyecto desarrollado con HTML, CSS y JavaScript puro , sin frameworks ni dependencias externas.

📌 Descripción
Página de destino comercial con:

Sección hero con imagen destacada
Presentación de la marca
Catálogo de productos
Testimonios
Formulario de contacto
Sistema de compra mediante WhatsApp
La lógica de compra y contacto se conecta directamente con la API de WhatsApp ( wa.me) para enviar el pedido o mensaje al número del negocio.

🚀 Tecnologías utilizadas
HTML5
CSS3 (Flexbox + Cuadrícula + Variables CSS)
JavaScript Vanilla (DOM, eventos, manipulación dinámica)
Integración con WhatsApp Web API
Pecado de fondo. Sin base de datos. Todo el front-end.

📂 Estructura del proyecto
📁 proyecto 
├── index.html 
├── styles.css 
├── app.js 
├── /imágenes

🛒 Funcionalidades principales
✔ Sistema de compra
Modal dinámico generado por JavaScript
Validación de campos obligatorios
Envío automático del pedido por WhatsApp
Mensajes de confirmación visual
✔ Formulario de contacto
Validación básica
Envío directo a WhatsApp
Restablecimiento automático del formulario
✔ Diseño responsivo
Adaptable a escritorio y móvil
Uso de consultas de medios
Navegación fija con scroll
⚙ Cómo usar el proyecto
Clonar el repositorio:
git clone https://github.com/tuusuario/turepo.git
Abrir index.html en el navegador.

No requiere instalación ni servidor.

📱 Configuración de WhatsApp
En app.js se encuentra el número configurado:

const telefonoDestino = '3564594042';
Modificar ese número por el correspondiente al negocio si se reutiliza el proyecto.

🎨 Personalización
Se pueden modificar fácilmente:

Colores en :root dentro de styles.css

Productos en index.html

Textos y contenido en cada sección

Número de WhatsApp en app.js

📸 Vista general
Catálogo de productos con imagen, descripción y precio

Modal emergente para completar datos de compra

Footer con información de contacto y redes

📌 Estado del proyecto
Proyecto funcional listo para usarse como:

Landing page comercial

Tienda básica sin pasarela de pago

Portfolio front-end

Base para futura integración con backend

📄 Licencia
Uso libre para fines educativos y comerciales.

👨‍💻 Autor
Desarrollado por Tiago Rojas
San Francisco, Córdoba, Argentina
