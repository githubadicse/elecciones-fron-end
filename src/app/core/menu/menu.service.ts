import { Injectable } from '@angular/core';
// desde controles 2
export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  idmenu:string;
  
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
  idmenu:string;
}

const MenuUsuario = [];

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore',
    idmenu : '01'
  },

  {
    state: 'qaliwarma',
    name: 'QALIWARMA',
    type: 'sub',
    icon: 'apps',
    idmenu : '02',
    badge: [
      {type: 'red', value: '9'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos', idmenu : '0201'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega',idmenu:'0202'},
      {state: 'centros-educativos', name: 'Centros Educativos',idmenu:'0203'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion',idmenu:'0204'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia',idmenu:'0205'},
      {state: 'guia/main', name: 'Impresion de Guias',idmenu:'0206'},
      {state: 'consultas', name: 'Consultas',idmenu:'0207'},
      {state: 'procesos', name: 'Procesos',idmenu:'0208'},
      {state: 'parametros', name: 'Parametros',idmenu:'0209'}
  
    ]
  },
  {
    state: 'almacen',
    name: 'ALMACEN',
    type: 'sub',
    icon: 'business',
    idmenu : '03',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'nota-ingreso', name: 'Nota de Ingreso',idmenu:'0301'},
      {state: 'nota-salida', name: 'Nota de Salida',idmenu:'0302'},
      {state: 'intercambio-presentacion', name: 'Intercambio de presentacion',idmenu:'0303'},
      {state: 'Traslado', name: 'Traslado',idmenu:'0304'},
      {state: 'Guia de Remision' , name: 'Guia de Remision',idmenu:'0305'},
      {state: 'consultas', name: 'Consultas',idmenu:'0307'},
      //apertura, cierre de periodos.
      {state: 'procesos', name: 'Procesos',idmenu:'0308'},

  
    ]
  },
  
  {
    state: 'compras',
    name: 'COMPRAS',
    type: 'sub',
    icon: 'store_mall_directory',
    idmenu : '04',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'registro', name: 'Registrar Compra',idmenu:'0401'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega',idmenu:'0402'},
      {state: 'centros-educativos', name: 'Centros Educativos',idmenu:'0403'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion',idmenu:'0404'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia',idmenu:'0405'},
      {state: 'guia/main', name: 'Impresion de Guias',idmenu:'0406'},
      {state: 'consultas', name: 'Consultas',idmenu:'0407'},
      {state: 'procesos', name: 'Procesos',idmenu:'0409'}
  
    ]
  },

  {
    state: 'ventas',
    name: 'VENTAS',
    type: 'sub',
    icon: 'local_grocery_store',
    idmenu : '05',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos',idmenu:'0501' },
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega',idmenu:'0502' },
      {state: 'centros-educativos', name: 'Centros Educativos',idmenu:'0503' },
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion',idmenu:'0504' },
      {state: 'guia/actualiza' , name: 'Registro Nro Guia',idmenu:'0505' },
      {state: 'guia/main', name: 'Impresion de Guias',idmenu:'0506' },
      {state: 'consultas', name: 'Consultas',idmenu:'0507' },
      {state: 'procesos', name: 'Procesos',idmenu:'0508' },
      {state: 'parametros', name: 'Parametros',idmenu:'0509' }
  
    ]
  },
  {
    state: 'configuracion',
    name: 'CONFIGURACION',
    type: 'sub',
    icon: 'local_grocery_store',
    idmenu : '06',
    badge: [
      {type: 'red', value: '1'}
    ],
    children: [
      {state: 'menu', name: 'Menus',idmenu:'0601'},
      {state: 'perfiles', name: 'Perfiles',idmenu:'0602' },
      {state: 'usuarios', name: 'Usuarios',idmenu:'0603' },
      {state: 'tipodocumento', name: 'Tipo documento',idmenu:'0604' },      
    ]
  }
  ,

  {
    state: 'tablas',
    name: 'TABLAS',
    type: 'sub',
    icon: 'apps',
    idmenu : '07',
    badge: [
      {type: 'red', value: '4'}
    ],
    children: [
      {state: 'empleado', name: 'Empleados', idmenu : '0701'},
      {state: 'producto', name: 'Productos', idmenu : '0702'},
      {state: 'almacene', name: 'Almacenes', idmenu : '0703'},
      {state: 'filial', name: 'Filial', idmenu : '0704'},
      {state: 'proveedorcliente', name: 'Proveedor Cliente', idmenu : '0705'}
  
    ]
  }  
,

{
    // state: 'http://primer.nyasha.me/docs',
    // type: 'extTabLink',
    state: 'documentacion',
    name: 'DOCUMENTACION',
    type: 'link',
    icon: 'local_library',
    idmenu : '08'
  },
  {
    // state: 'http://primer.nyasha.me/docs',
    // type: 'extTabLink',
    state: 'cable',
    name: 'CABLE',
    type: 'link',
    icon: 'local_library',
    idmenu : '09'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }

  getAllMenuUsuario(){
    return MenuUsuario;
  }
  
  addMenuUsuario(menu){
  
    MenuUsuario.push(menu);
  }

  resetMenuUsuario(){
    MenuUsuario.length = 0
  }
}
