import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidenav',
    template: `
        <!-- <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item ">
                    <a class="nav-link" routerLink="/socios" routerLinkActive="active">Socios</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link" routerLink="/actividades" routerLinkActive="active">Actividades</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link" routerLink="/configuracion" routerLinkActive="active">Configuracion</a>
                    </li>
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a class="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Last quartersdfa sd 
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Social engagement
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Year-end sale
                    </a>
                    </li>
                </ul>
            </div>
        </nav> -->
        <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
        `
})

export class SideNavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}