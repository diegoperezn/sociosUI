import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
      <img src="../../favicon.ico" alt="" width="30" height="24">
       Socios
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </header>
  `,
  styles: [' .navbar { background-color: green; }']
})

// <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
// <div class="container-fluid">
//   <a class="navbar-brand" href="#">
//     <img src="../../favicon.ico" alt="" width="30" height="24">
//   </a>
//   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item ">
//         <a class="nav-link" routerLink="/socios" routerLinkActive="active">Socios</a>
//       </li>
//       <li class="nav-item ">
//         <a class="nav-link" routerLink="/actividades" routerLinkActive="active">Actividades</a>
//       </li>
//       <li class="nav-item ">
//         <a class="nav-link" routerLink="/configuracion" routerLinkActive="active">Configuracion</a>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>
export class NavBar {
  title = 'socios';
}
