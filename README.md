
Título: Nekoplay, tienda de videojuegos y más.

Para acceder a la aplicación debe dirigirse a: https://gvoisier.github.io/DEV004-card-validation/src/

Esta desarrollado para ofrecer artículos de videojuegos, figuras de animé, peluches y productos tecnológicos para todo tipo de usuarios, sin discriminación de edad, que gusten del animé, series, películas y videojuegos.

Es una empresa que brinda calidad y variedad de productos de entretención, con un catálogo actualizado a las tendencias de internet y televisión.

La página web es muy intutiva que permitirá que los usuarios puedan acceder al pago de sus productos con facilidad.

Interfaz de usuario (UI) permitir al usuario:
1. Insertar el número de tarjeta de crédito o débito que queremos validar.
2. Ver el resultado si es válido o no.
3. Oculta todos los dígitos de su número de tarjeta del cliente, menos los últimos 4 caracteres.
4. No se puede ingresar un campo vacío.


Esta página web está desarrollada con HTML, CSS y JavaScript.

El prototipo de baja calidad fue diseñado en Procreate a mano alzada y se encuentra en Trello (https://trello.com/invite/b/NGOUJwG3/ATTIcb04c75bae390b03029309ccfce3ac3e3DEF8B5D/1-proyecto-creditcard )
Este diseño fue una guía para iniciar el diseño, pero no fue la arquitectura final.

En el desarrollo de este código se utilizan variadas funciones, tenemos principalmente: 
- "isValid" para validar el numero de tarjeta de crédito que ingresará el cliente, la cual se valida aplicando el algoritmo de Luhn. 
- Y la función "Maskify", para enmascarar los dígitos de la tarjeta de crédito o débito y así proteger los datos de nuestros clientes.

Para probar nuestro código y ver que funciona correctamente, se realizaron pruebas unitarias y de integración a través de un linter, llamado "eslint", que al finalizar el desarrollo no arrojaron ningún tipo de error.

Cualquier duda o consulta, comunicarse a: profesora.gvoisier@gmail.com