import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuard } from './shared/guard/auth.guard';


export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuard],
      data : {'tituloModulo':'Inicio'}
      },

      //PROCESOS
      {
        path : 'procesos/registrar-votos',
        loadChildren : './modulo-negocio/registro-voto/registro-voto.module#RegistroVotoModule'
      },
      //CONFIGURACION
      {
        path : 'configuracion/menu',
        loadChildren : './modulo-sistema-config/menu/menu.module#MenuModule'
      },
      {
        path : 'configuracion/usuarios',
        loadChildren : './modulo-sistema-config/usuario/usuario.module#UsuarioModule'
      },
      {
        path: 'configuracion/perfiles',
        loadChildren: './modulo-sistema-config/perfil/perfil.module#PerfilModule'

      },
      {
        path: 'configuracion/tipodocumento',
        loadChildren: './modulo-sistema-config/tipodocumento/tipodocumento.module#TipodocumentoModule'

      },
      //  TABLAS
      {
        path: 'tablas/asignacion-mesas',
        loadChildren: './modulo-negocio/asignacion-mesa/asignacion-mesa.module#AsignacionMesaModule'
      }, {
        path: 'tablas/personeros',
        loadChildren: './modulo-negocio/personero/personero.module#PersoneroModule'
      },

    ]
  },


  {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
  }, 
   {
   path: '**',
   redirectTo: 'session/404'
   }
];
