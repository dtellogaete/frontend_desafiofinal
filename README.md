# Herbaland - Marketplace de Hierbas Medicinales y Saludables

Herbaland, un Marketplace dedicado a la venta de hierbas medicinales y productos saludables. Este proyecto está desarrollado en React y utiliza React Router para la navegación entre rutas. A continuación, se describen las diferentes vistas implementadas en el proyecto.

## Integrantes

1. Gustavo Aguilar
2. Daniel Tello

## Vistas

1. **Cart (Carrito)**: En esta vista, los usuarios pueden ver los productos que han agregado al carrito de compras. Además, podrán modificar las cantidades de los productos o eliminarlos del carrito antes de finalizar la compra.

2. **Contact (Contacto)**: En esta vista, los usuarios pueden completar un formulario de contacto para enviar consultas o mensajes.

3. **Home**: Esta es la página de inicio del Marketplace, donde se muestra una selección de productos destacados y algunos otros anuncios.

4. **Login**: En esta vista, los usuarios pueden iniciar sesión en sus cuentas existentes para acceder a funcionalidades adicionales, como ver su perfil y realizar compras.

5. **Marketplace**: Esta vista es el catálogo principal del Marketplace, donde los usuarios pueden explorar y comprar diferentes productos de hierbas medicinales y saludables.

6. **NotFound**: Esta vista se muestra cuando un usuario intenta acceder a una URL que no existe o no se encuentra dentro del proyecto.

7. **ProductSingle (Producto Descripción)**: En esta vista, los usuarios pueden ver los detalles completos de un producto seleccionado, incluyendo su descripción, precio y opciones de compra (agregar al carrito).

8. **Profile**: En esta vista, los usuarios pueden ver y editar su perfil de usuario, incluyendo información personal y de contacto.

9. **Registro Usuario**: En esta vista, los usuarios pueden registrarse para crear una nueva cuenta en Herbaland. Deben proporcionar sus datos personales y de contacto para completar el registro.

10. **Registro Producto**: Esta vista está reservada para usuarios con roles especiales (administradores, por ejemplo). Permite agregar nuevos productos al catálogo de Herbaland.

## Requerimientos

El proyecto cumple con los siguientes requerimientos:

- Está desarrollado en React y utiliza React Router para manejar la navegación entre las diferentes vistas del Marketplace.
- Se han implementado componentes reutilizables, como Footer, Navbar y Card de producto, para mejorar la estructura y el rendimiento del proyecto.
- Los hooks `useState` y `useEffect` se utilizan para gestionar el estado y los efectos secundarios en los componentes del proyecto.
- El Context de React se ha utilizado para almacenar los datos de los productos agregados al carrito de compras, lo que permite que esta información esté disponible en diferentes partes del proyecto.

## Funcionalidades Futuras

Se tiene previsto trabajar con una base de datos para implementar funcionalidades adicionales, tales como:

- Crear usuarios para permitir el acceso personalizado a diferentes funcionalidades del Marketplace.
- Almacenar información de los productos, usuarios y pedidos en la base de datos para mantener un registro completo de las transacciones.
- Vistas privadas para usuarios logueados y personalizadas según el rol.

## Proyecto

El proyecto puede visualizarse en [https://dtellogaete.github.io/frontend_desafiofinal/](https://dtellogaete.github.io/frontend_desafiofinal/).
