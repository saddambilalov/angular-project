import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `
    Selected user's detail: <p class="selected-user">{{selectedUserDetail | json}}</p>

    <a [routerLink] = "['/index']"><<Go back</a>
   `,
    styles: [`
    p.selected-user {
        color:red;
        margin: 20px 0px 20px 0px;
    }
    `]
})
export class UserDetails implements OnInit {
    userDetails: any;
    selectedUserDetail: any;
    constructor(private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.userDetails = this.userService.getUsers();
        this.selectedUserDetail = this.userService.getUserById(this.route.snapshot.params['id']);
    }
}