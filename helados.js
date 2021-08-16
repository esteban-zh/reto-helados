 let opcion = 0;
let vHelados = [];
let vVentas = [];

// console.log(helado);
// console.log(Object.keys(helado).length);


function mostrarMenu() {
const mensaje = `
Escriba el número que corresponda a la acción
que desea realizar en el sistema:
1. Agregar un helado
2. Modificar un helado
3. Eliminar un helado
4. Mostrar inventario
5. Realizar venta
6. Salir del sistema
`;
return parseInt(prompt(mensaje));
}


function redirigir(){
    switch (opcion) {
    case 1:
        agregarHelado();
        break;
    case 2:
        modificarHelado();
        break;
    case 3:
        eliminarHelado();
        break;
    case 4:
        mostrarInventario();
        break;
    case 5:
        realizarVenta();
        break;
    case 6:
        cerrarSesion();
        break;

    default :
        break;
}
}

function agregarHelado(){
    let name = prompt("nombre del helado");
    let flavor = prompt("sabor del helado");
    let quantity = parseInt(prompt("cantidad en inventario"));
    let price = parseInt(prompt("precio del helado"));
    
    vHelados.push({
        codigo: vHelados.length + 1,
        name,
        flavor, 
        quantity,
        price,
    });
    console.log(vHelados);
}

function modificarHelado(){
    let list = parseInt(prompt("ingrese el codigo del helado a modificar"));
    let nameEdit = prompt("edite el nombre");
    vHelados[list-1].name = nameEdit;
    let flavorEdit = prompt("edite el sabor");
     vHelados[list-1].flavor = flavorEdit;
    let quantityEdit = parseInt(prompt("edite la cantidad"));
     vHelados[list-1].quantity = quantityEdit;
    let priceEdit = parseInt(prompt("edite el precio "));
    vHelados[list-1].price = priceEdit;
    console.log(vHelados);
}

function eliminarHelado(){
    let codDelete=parseInt(prompt("ingrese el codigo del helado a eliminar"));
    vHelados.splice(codDelete-1, 1);
}

function mostrarInventario(){
        let mensaje= " INVENTARIO \n\n";
        for (let i = 0; i < vHelados.length; i++) {
        mensaje += `id: ${i+1} nombre: ${vHelados[i].name} sabor: ${vHelados[i].flavor} cantidad: ${vHelados[i].quantity} precio: ${vHelados[i].price} \n`;
    }
    alert(mensaje);
}

realizarVenta(){

}

function cerrarSesion() {
    let result = window.confirm(`desea cerrar la sesion?`);
    if (result) {
        alert("ha cerrado la sesion");
    }
    else{ 
        mostrarMenu();
    }
}

while (opcion !== 6) {
opcion = mostrarMenu();
redirigir(opcion);
}
