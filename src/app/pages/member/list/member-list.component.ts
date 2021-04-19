import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/shared/model/member';
import { MemberService } from 'src/app/shared/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'socios-list',
  templateUrl: 'member-list.component.html'
})
export class MemberListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  displayedColumns: string[] = ['id', 'name', 'telefono', 'email', 'actions'];

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
          this.dataSource.paginator = this.paginator!;
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

  delete(id: string) {
    this.service.delete(id);
  }

}