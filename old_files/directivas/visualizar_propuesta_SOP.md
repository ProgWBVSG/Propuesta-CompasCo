# SOP: Visualizar Propuesta CompasCo

## Objetivo
Configurar y ejecutar la visualización de la propuesta web interactiva para el cliente CompasCo para validar diseño y funcionalidad.

## Entradas
- Archivo base: `propuesta_compasco.html`
- Recursos externos: Google Fonts (Playfair Display, DM Sans)

## Lógica y Pasos
1. **Verificación de Archivos:** Confirmar que `propuesta_compasco.html` existe en la raíz del proyecto.
2. **Apertura de Navegador:** Utilizar el archivo local mediante el protocolo `file://` para abrirlo en el navegador predeterminado.
3. **Validación Visual:**
   - Confirmar que el fondo en color crema (`--cream: #F5F0E8`) y los acentos en dorado (`--gold: #C9A84C`) se apliquen correctamente.
   - Verificar que las animaciones de entrada (fade-up en el cover y reveal en las secciones) funcionen suavemente con el scroll.
4. **Validación de Componentes:**
   - La sección de "Mockup" debe mostrar un navegador ficticio con el formulario integrado.
   - Los botones de acción deben tener los efectos de hover correspondientes.
5. **Responsividad:** Realizar pruebas en anchos de pantalla reducidos para asegurar la legibilidad del texto y la correcta disposición de las tarjetas de entregas y precios.

## Restricciones y Casos Borde
- **Internet:** El diseño depende de fuentes externas de Google. Sin conexión, la tipografía volverá a una sans-serif del sistema.
- **JavaScript:** Los efectos de revelado (scroll reveal) dependen de un script con `IntersectionObserver`. Si falla, un fallback forzará la visualización después de 800ms.
- **Archivos Locales:** Evitar el uso de rutas absolutas incrustadas en el código que no correspondan al entorno de trabajo actual.
