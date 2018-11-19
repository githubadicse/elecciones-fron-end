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
      //DOCUMENTACION
      {
        path: 'documentacion',
        loadChildren: './documentacion/documentacion.module#DocumentacionModule'
      }
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
