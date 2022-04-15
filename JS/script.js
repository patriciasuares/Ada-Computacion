// ********************** ARRAYS  ***********************
const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],
  ventas : [
    {
      id : 1,
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      sucursal: "Centro",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    },
    
    { 
      id: 2, 
      fecha: new Date(2019, 0, 1),
      nombreVendedora:"Ada",
      sucursal: "Centro",
      componentes:["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    },
      
    {
      id: 3,
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      sucursal: "Caballito",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
    },
    
    {
      id: 4,
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      sucursal: "Centro",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
    },
   
    {
      id: 5,
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Grace",
      sucursal: "Caballito",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
    }  
  ],
  precios: [
    {componente:"Motherboard ASUS 1500", precio: 120},
    {componente:"Monitor GPRS 3000", precio: 200},
    {componente:"Monitor ASC 543", precio: 250},
    {componente:"Motherboard ASUS 1200", precio: 100},
    {componente:"Motherboard MZI",precio: 30},
    {componente:"HDD Toyiva",precio: 90} ,
    {componente:"HDD Wezter Dishital",precio: 75} ,
    {componente:"RAM Quinston",precio: 110} ,
    {componente:"RAM Quinston Fury",precio: 230}
  ]
}

// ***************  FIN ARRAYS ****************



const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);

    this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


const formatDate = (date)=>{

let dia = date.getDate();
if(date.getDate()<10) dia = "0" + date.getDate();
let mes = date.getMonth()+1;
if(mes<10) mes = "0" + mes;
  
let formatted_date = dia + "/" + mes + "/" + date.getFullYear()

  return formatted_date;
  }



const cargarVendedoras=()=>{
  var selectVendedora = document.getElementById("opVendedora");
  var selectVendedoraEdit = document.getElementById("opVendedoraEdit");

  for(let i=0; i< local.vendedoras.length; i++){
    let opVendedora = document.createElement("OPTION")
    opVendedora.innerText = `${local.vendedoras[i]}` 
    selectVendedora.appendChild(opVendedora)

    let opVendedoraEdit = document.createElement("OPTION")
    opVendedoraEdit.innerText = `${local.vendedoras[i]}` 
    selectVendedoraEdit.appendChild(opVendedoraEdit)
  }

}
cargarVendedoras();


const CargarComponentes=()=>{
  var selectComponente1 = document.getElementById("opComponente1");
  var selectComponenteEdit1 = document.getElementById("opComponenteEdit1");
  var selectComponente2 = document.getElementById("opComponente2");
  var selectComponenteEdit2 = document.getElementById("opComponenteEdit2");

  for (let i = 0; i <local.precios.length; i++) {
      const opComponente1 = document.createElement("OPTION");
      opComponente1.innerText = `${local.precios[i].componente}`;
      selectComponente1.appendChild(opComponente1);

      const opComponenteEdit1 = document.createElement("OPTION");
      opComponenteEdit1.innerText = `${local.precios[i].componente}`;
      selectComponenteEdit1.appendChild(opComponenteEdit1);

      const opComponente2 = document.createElement("OPTION");
      opComponente2.innerText = `${local.precios[i].componente}`;
      selectComponente2.appendChild(opComponente2);

      const opComponenteEdit2 = document.createElement("OPTION");
      opComponenteEdit2.innerText = `${local.precios[i].componente}`;
      selectComponenteEdit2.appendChild(opComponenteEdit2);
      
  }
}

CargarComponentes();

const cargarSucursales=()=>{
  var selectSucursal = document.getElementById("opSucursal");
  var selectSucursalEdit = document.getElementById("opSucursalEdit");

  for(let i=0; i< local.sucursales.length; i++){
    let opSucursalEdit = document.createElement("OPTION")
    opSucursalEdit.innerText = `${local.sucursales[i]}` 
    selectSucursalEdit.appendChild(opSucursalEdit)

    let opSucursal = document.createElement("OPTION")
    opSucursal.innerText = `${local.sucursales[i]}` 
    selectSucursal.appendChild(opSucursal)
  }

}
cargarSucursales();




const EditarVendedoras = () => {
  for (let i=0; i < vendedoras.length; i++){
      const optionVendedora = document.createElement('option');
      listaVendedorasEdit.appendChild(optionVendedora);
      optionVendedora.innerText = `${vendedoras[i]}`;
  }
}

  
const EditarComponentes = () => {
  for (let i = 0; i < precios.length; i++) {
      const optionComponente = document.createElement('option');
      optionComponente.setAttribute('id', 'seleccion-componente');
      listaComponentesEdit.appendChild(optionComponente);
      optionComponente.innerText = `${precios[i][0]}`;
  }
}


const EditarSucursales = () => {
  for (let i=0; i < sucursales.length; i++){
          const optionSucursal = document.createElement('option');
          listaSucursalesEdit.appendChild(optionSucursal);
          optionSucursal.innerText = `${sucursales[i]}`;
  }
}

const precioMaquina = (array) =>{
  let sumaPrecioComponentes = 0; 
  for (let precio of local.precios){
    // CONDICION ? SI SE CUMPLE : SI NO SE CUMPLE
    array.includes(precio.componente) ? sumaPrecioComponentes += precio.precio : 0
  }
  return sumaPrecioComponentes
}
//console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)


//----------------- cantidadVentasComponente --------------------------------
const cantidadVentasComponente = (componente) => {
  let cantidadComponente = 0;
  for (let venta of local.ventas){
      venta.componentes.includes(componente) ? cantidadComponente += 1 : 0
  }
  return cantidadComponente
}


//console.log(cantidadVentasComponente('Monitor ASC 543')); 

//---------------------ventas Del Mes(mes, anio)-------------------------
const ventasDelMes = (mes, anio) => {
  let {ventas}  = local 
  return ventas.filter(function(element){
    return element.fecha.getMonth()=== mes && element.fecha.getFullYear()=== anio;
  });
}
//------------------------- vendedora del mes --------------------------
const vendedoraDelMes = (mes, anio)=>{
  let acc = 0
  let mejorVendedora = "";
  for (const vendedora of local.vendedoras){
    let venCant = contadorDeVentas((ventasDelMes(mes, anio)).filter(venta =>venta.nombreVendedora=== vendedora))
    if (acc < venCant){
      mejorVendedora = vendedora;
      acc=contadorDeVentas((ventasDelMes(mes, anio)).filter(venta =>venta.nombreVendedora=== vendedora))
    }
  }
  return mejorVendedora
}
// ----------- contador de ventas --------------
const contadorDeVentas = (ventas)=>{
  let acc = 0; 
  for (const venta of ventas){
    acc += precioMaquina(venta.componentes)
  } 
  return acc
}


const componenteMasVendido = () =>{
  let masVendido = ""
  let acc = 0

  for (const precio of local.precios){
    if (acc <cantidadVentasComponente(precio.componente)){
      acc = cantidadVentasComponente (precio.componente)
      masVendido = precio.componente
    }
  }
  return masVendido
}
//console.log(componenteMasVendido()); // Monitor GPRS 3000

const LaMejorVendedora = ()=>{
  let acc = 0
  let mejorVendedora = "";
  for (const vendedora of local.vendedoras){
    let venCant = contadorDeVentas(local.ventas.filter(venta =>venta.nombreVendedora=== vendedora))
    if (acc < venCant){
      mejorVendedora = vendedora;
      acc=contadorDeVentas(local.ventas.filter(venta =>venta.nombreVendedora=== vendedora))
    }
  }
  return mejorVendedora
}




//-------------- hubo Ventas -----------------

const huboVentas = (mes, anio) => ventasDelMes (mes, anio).length > 0 
//console.log(huboVentas(3, 2019)); // false


const VentasXSucursal = (sucursal) => {
  let total = 0;
  for (let venta of local.ventas){
      if(venta.sucursal==sucursal)
      {
        total += precioMaquina(venta.componentes);
      }
  }
  return total
}

const sucursalesMasVentas = document.getElementById('table-estadistica');
const estrella = document.getElementById('estrella');
const vendedoraMejor = document.getElementById('vendedoraMejor');

const crearTablaEstdisticas = () => {

  sucursalesMasVentas.innerHTML="<tr><th class=\"celda\" style=\"width:200px;\">Sucursal</th><th class=\"celda\" style=\"width:150px;\">Total Ventas</th></tr>";

    for (let sucursal of local.sucursales) {
        filaEstadisticaSucursal = document.createElement('tr');
        sucursalesMasVentas.appendChild(filaEstadisticaSucursal);
        filaEstadisticaSucursal.innerHTML = `<td>${sucursal}</td> <td>${VentasXSucursal(sucursal)}</td>`;
    }


    
    
}



const tablaVenta =document.getElementById("table-estadisticas");

const crearTablaVenta = () =>{
 
  tablaVenta.innerHTML="<tr><th class=\"celda\" style=\"width:80px;\">Fecha</th><th class=\"celda\" >Vendedora</th>   <th class=\"celda\" >Sucursal</th><th class=\"celda\" style=\"width:200px;\">Componentes</th> <th class=\"celda\" >Precios</th><th class=\"celda\" >Acciones</th></tr>"; 



  
  for (let venta of local.ventas){
    //alert(venta.nombreVendedora);
    if(venta==null) continue;

    var crearFilasVentas =document.createElement("tr");
    tablaVenta.appendChild(crearFilasVentas);

     
    crearFilasVentas.innerHTML= `
    <td> ${formatDate(venta.fecha)}</td>
    <td> ${venta.nombreVendedora}</td>
    <td> ${venta.sucursal}</td>
    <td> ${venta.componentes[0]} - ${venta.componentes[1]}</td>
    <td> ${precioMaquina(venta.componentes)}</td>
    
    
    <td> <img src="imagenes/edit_pencil_write_1574.png" width=15px; height=15px;  data-open="modal2" onclick="editar(${venta.id});"></td>
    <td> <img src="imagenes/delete_garbage_icon-icons.com_49916.png" width=15px; height=15px; data-open="modal3"onclick="eliminar(${venta.id});"></td>`
    
    
  }

  crearTablaEstdisticas();
  estrella.innerHTML=componenteMasVendido();
  vendedoraMejor.innerHTML=LaMejorVendedora();


}


crearTablaVenta();


let IdentityVentas=5;

function guardar()
{
if(document.getElementById("fecha").value=="")
{
  alert("Ingrese la fecha.");
  return;
}

  let fecha = new Date(document.getElementById("fecha").value);
      
  let selecVen = document.getElementById("opVendedora");

  let selecComp1= document.getElementById("opComponente1");
  let selecComp2= document.getElementById("opComponente2");

  let selecSucu= document.getElementById("opSucursal");

  fecha.setDate(fecha.getDate() + 1);

  

    IdentityVentas++;
    local.ventas[IdentityVentas-1] = 
    {
      id : IdentityVentas,
      fecha: fecha,
      nombreVendedora: selecVen.value,
      sucursal: selecSucu.value,
      componentes: [selecComp1.value, selecComp2.value],
    };
    
    crearTablaVenta();

    document.querySelector(".modal.is-visible").classList.remove(isVisible);

  }

  function guardarEditar()
{
  if(document.getElementById("fechaEdit").value=="")
  {
    alert("Ingrese la fecha.");
    return;
  }

  let fecha = new Date(document.getElementById("fechaEdit").value);
  
  let idVenta = document.getElementById("idVenta").innerHTML;

  let selecVen = document.getElementById("opVendedoraEdit");

  let selecComp1= document.getElementById("opComponenteEdit1");
  let selecComp2= document.getElementById("opComponenteEdit2");

  let selecSucu= document.getElementById("opSucursalEdit");

  fecha.setDate(fecha.getDate() + 1);

  let index=0;
  for (let venta of local.ventas){
    if(""+venta.id==""+idVenta) break;
    index++;
  }

    local.ventas[index] = 
    {
      id : idVenta,
      fecha: fecha,
      nombreVendedora: selecVen.value,
      sucursal: selecSucu.value,
      componentes: [selecComp1.value, selecComp2.value],
    };
    
    crearTablaVenta();

    document.querySelector(".modal.is-visible").classList.remove(isVisible);

  }

function eliminar(id)
{
  BorrarId=id;
  document.getElementById("modalConfirmar").classList.add(isVisible);
}

let BorrarId=0;

function eliminarConfirmado()
{
  let index=0;
  for (let venta of local.ventas){
    if(venta.id==BorrarId) break;
    index++;
  }
  local.ventas.splice(index,1);
  BorrarId=0;
  crearTablaVenta();
  document.querySelector(".modal.is-visible").classList.remove(isVisible);
}

function editar(id)
{
  let idVenta =document.getElementById("idVenta");
  idVenta.innerHTML=id;

  let opVendedoraEdit =document.getElementById("opVendedoraEdit");
  let opComponenteEdit1 =document.getElementById("opComponenteEdit1");
  let opComponenteEdit2 =document.getElementById("opComponenteEdit2");
  let opSucursalEdit =document.getElementById("opSucursalEdit");
  let fechaEdit =document.getElementById("fechaEdit");

  for (let venta of local.ventas){
    if(venta.id==id) 
    {
      opVendedoraEdit.value = venta.nombreVendedora;
      opComponenteEdit1.value=venta.componentes[0];
      opComponenteEdit2.value=venta.componentes[1];
      opSucursalEdit.value=venta.sucursal;
      var currentDate = venta.fecha.toISOString().substring(0,10);
      fechaEdit.value=currentDate;
    }
  }


  document.getElementById("modalEdit").classList.add(isVisible);

}

