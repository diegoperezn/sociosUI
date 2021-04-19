import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-sidenav',
    template: `
        <mat-sidenav-container class="sidenav-container">
            <mat-sidenav #drawer class="sidenav" fixedInViewport
                [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
                [mode]="(isHandset$ | async) ? 'over' : 'side'"
                [opened]="(isHandset$ | async) === false">
                <mat-toolbar>Menu</mat-toolbar>
                <mat-nav-list>
                <a mat-list-item routerLink="/actividades" routerLinkActive="activities">Actividades</a>
                <a mat-list-item routerLink="/socios" routerLinkActive="activities">Socios</a>
                <a mat-list-item routerLink="/configuracion" routerLinkActive="configuracion">configuracion</a>
                </mat-nav-list>
            </mat-sidenav>
            <mat-sidenav-content>
                <mat-toolbar color="primary">
                <button
                    type="button"
                    aria-label="Toggle sidenav"
                    mat-icon-button
                    (click)="drawer.toggle()"
                    *ngIf="isHandset$ | async">
                    <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
                </button>
                <span>socios</span>
                </mat-toolbar>
                <div class="container-page">
                    <ng-content></ng-content>
                </div>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [`


        .sidenav-container {
            height: 100%;
        }
        
        .sidenav {
            width: 200px;
        }
        
        .sidenav .mat-toolbar {
            background: inherit;
        }
        
        .mat-toolbar.mat-primary {
            position: sticky;
            top: 0;
            z-index: 1;
        }

        /* .mat-drawer-content {
           
            padding: 12px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        } */
    `]
})

export class SidenavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  constructor(private breakpointObserver: BreakpointObserver) {}
}