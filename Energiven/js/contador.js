addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 6000

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizarContador = () => {
                let cantidadMaxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidadMaxima / velocidad

                if(valor_actual < cantidadMaxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizarContador, 50)
                }else {
                    contador.innerText = cantidadMaxima
                }
            }
            actualizarContador()
        }
    }

    //intersectionObserver

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting) {
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores, 600)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.70 // valor de 0 a 1
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementosHTML => {
        observer.observe(elementosHTML)
    })

})