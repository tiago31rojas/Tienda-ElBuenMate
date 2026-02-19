
document.addEventListener('DOMContentLoaded', function() {
    crearModalCompra();
    
    configurarBotonesCompra();
    
    configurarCierreModal();
    
    configurarFormularioCompra();
    
    configurarFormularioContacto();
});

function crearModalCompra() {
    const modal = document.createElement('div');
    modal.id = 'modal-compra';
    modal.className = 'modal-compra';
    modal.style.display = 'none';
    
    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="cerrar-modal">&times;</span>
            <h2>Completar Compra</h2>
            <form id="formulario-compra">
                <input type="hidden" id="producto-seleccionado" name="producto">
                <input type="hidden" id="precio-seleccionado" name="precio">
                
                <div class="form-group">
                    <label for="nombre-compra">Nombre completo *</label>
                    <input type="text" id="nombre-compra" name="nombre" required>
                </div>
                
                <div class="form-group">
                    <label for="email-compra">Correo electrónico *</label>
                    <input type="email" id="email-compra" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="telefono-compra">Teléfono *</label>
                    <input type="tel" id="telefono-compra" name="telefono" required>
                </div>
                
                <div class="form-group">
                    <label for="direccion-compra">Dirección de envío *</label>
                    <textarea id="direccion-compra" name="direccion" rows="3" required></textarea>
                </div>
                
                <button type="submit" class="btn">Confirmar Compra</button>
            </form>
            
            <div id="alerta-compra" class="alerta"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const estilos = document.createElement('style');
    estilos.textContent = `
        .modal-compra {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal-compra .modal-contenido {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            position: relative;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .modal-compra .cerrar-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
        }
        
        .modal-compra .cerrar-modal:hover {
            color: #333;
        }
        
        .modal-compra h2 {
            margin-top: 0;
            margin-bottom: 20px;
            color: #2c3e50;
        }
        
        .modal-compra .form-group {
            margin-bottom: 20px;
        }
        
        .modal-compra label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }
        
        .modal-compra input,
        .modal-compra textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .modal-compra .btn {
            background-color: #27ae60;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        .modal-compra .btn:hover {
            background-color: #219653;
        }
        
        .alerta {
            padding: 15px;
            margin-top: 20px;
            border-radius: 5px;
            display: none;
        }
        
        .alerta.exito {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .alerta.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        @media (max-width: 600px) {
            .modal-compra .modal-contenido {
                width: 95%;
                padding: 20px;
            }
        }
    `;
    
    document.head.appendChild(estilos);
}

function configurarBotonesCompra() {
    const botonesCompra = document.querySelectorAll('.product-card .btn');
    
    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productoCard = this.closest('.product-card');
            const producto = productoCard.querySelector('h3').textContent;
            const precio = productoCard.querySelector('.price').textContent;
            
            document.getElementById('producto-seleccionado').value = producto;
            document.getElementById('precio-seleccionado').value = precio;
            
            document.getElementById('modal-compra').style.display = 'flex';
        });
    });
}

function configurarCierreModal() {
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('modal-compra');
        
        if (e.target.classList.contains('cerrar-modal')) {
            modal.style.display = 'none';
        }
        
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function mostrarAlertaCompra(mensaje, tipo) {
    const alerta = document.getElementById('alerta-compra');
    alerta.textContent = mensaje;
    alerta.className = 'alerta ' + tipo;
    alerta.style.display = 'block';
    
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 5000);
}
function configurarFormularioCompra() {
    const formulario = document.getElementById('formulario-compra');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre-compra').value;
        const email = document.getElementById('email-compra').value;
        const telefono = document.getElementById('telefono-compra').value;
        const direccion = document.getElementById('direccion-compra').value;
        
        if (!nombre || !email || !telefono || !direccion) {
            mostrarAlertaCompra('Por favor, complete todos los campos obligatorios.', 'error');
            return;
        }
        
        const producto = document.getElementById('producto-seleccionado').value;
        const precio = document.getElementById('precio-seleccionado').value;
        
        const mensaje = `¡Nueva compra en El Buen Mate!%0A%0AProducto: ${producto}%0APrecio: ${precio}%0A%0ACliente:%0A- Nombre: ${nombre}%0A- Email: ${email}%0A- Teléfono: ${telefono}%0A- Dirección: ${direccion}`;
        
        const telefonoDestino = '3564594042';
        
        window.open(`https://wa.me/${telefonoDestino}?text=${mensaje}`, '_blank');
        
        mostrarAlertaCompra('¡Compra realizada con éxito! Se ha enviado la notificación por WhatsApp.', 'exito');
        
        formulario.reset();
        
        setTimeout(() => {
            document.getElementById('modal-compra').style.display = 'none';
        }, 3000);
    });
}


function configurarFormularioContacto() {
    const formularioContacto = document.getElementById('form-contacto');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('message').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }

             
            const telefonoDestino = '3564594042'; 
            const texto = `Hola, soy ${nombre}Mi correo es ${email}Quiero decir: ${mensaje}`;
            const url = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');

            alert('¡Mensaje enviado! Te contactaremos a la brevedad.');
            formularioContacto.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', configurarFormularioContacto);


