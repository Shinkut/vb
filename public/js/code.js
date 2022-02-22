const modalcli = new bootstrap.Modal(document.getElementById('modalcli'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_updt.value = fila.children[0].innerHTML
    nombre_updt.value = fila.children[1].innerHTML
    fecha_updt.value = fila.children[2].innerHTML
    ciudad_updt.value = fila.children[3].innerHTML
    sexo_updt.value = fila.children[4].innerHTML
    modalcli.show()
})