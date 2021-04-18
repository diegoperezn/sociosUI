import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/model/member';
import { MemberService } from 'src/app/shared/services/member.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'socios-list',
  template: `

    <mat-form-field>
      <mat-label>Busqueda</mat-label>
      <input matInput (keyup)="applyFilter($event)" placeholder=".." #input>
    </mat-form-field>

    
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <!-- Position Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> Id </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Nombre </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="telefono">
        <th mat-header-cell *matHeaderCellDef> Telefono </th>
        <td mat-cell *matCellDef="let element"> {{element.telefono}} </td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef> Email </th>
        <td mat-cell *matCellDef="let element"> {{element.email}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

        <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <mat-spinner></mat-spinner>
      </tr>

      <tr>
        
      </tr>
    </table>
  `,
  styles: [`
    /* Structure */
    table {
      width: 100%;
    }

    .mat-form-field {
      font-size: 14px;
      width: 100%;
    }
  `]
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'telefono', 'email'];

  dataSource: MatTableDataSource<Member> = new MatTableDataSource(undefined);

  title = 'socios';

  constructor(private service: MemberService) {

  }

  ngOnInit(): void {
    // for (var i = 0; i < 100; i++) {
    //   this.service.save({
    //     id: i.toString(),
    //     name: "nombre " + i.toString(),
    //     telefono: "5555-5555",
    //     email: "email@dominio.com.ar"
    //   });
    // }
    this.service.list().subscribe(
      {
        next: (value: any[]) => {
          console.log(value);
          this.dataSource = new MatTableDataSource(value);
        },
        error: (err: any) => { },
        complete: () => { },
      }
    );


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}