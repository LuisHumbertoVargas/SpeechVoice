// Configurar jsPDF y agregar evento de click al botón
window.addEventListener('load', function () {
    const generarPDF = () => {
        this.alert('Próximamente...');
        // // Crear un nuevo objeto jsPDF
        // const doc = new jsPDF();

        // try {
        //     // Obtener el texto generado y dividirlo en líneas
        //     const textoGenerado = document.getElementById('output').innerText;
        //     const lineas = doc.splitTextToSize(
        //         'hola',
        //         doc.internal.pageSize.width - 20
        //     );

        //     // Agregar las líneas al PDF
        //     doc.text(10, 10, lineas);

        //     // Descargar el PDF
        //     doc.save('texto_generado.pdf');
        //     // Error
        // } catch (error) {
        //     console.log(error);
        // }
    };

    // Agregar un evento al botón "Generar PDF"
    document.getElementById('generarPDF').addEventListener('click', generarPDF);
});
