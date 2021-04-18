import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/shared/services/member.service';
import { Member } from 'src/app/shared/model/member';

@Component({
    selector: 'socio-edit',
    template: `
        Edit {{ member.id }} <br>
        Edit {{ member.name }} <br>
        Edit {{ member.telefono }} <br>
        Edit {{ member.email }} <br>
    `
})

export class SocioEditComponent implements OnInit {

    member!: Member;
    
    constructor(private route: ActivatedRoute, private service: MemberService) { }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;

        this.service.get(routeParams.get('id')!).subscribe(
            {
                next: (value: any) => {
                  console.log(value);
                  this.member = value;
                },
                error: (err: any) => { },
                complete: () => { },
              }
        );
    }
}