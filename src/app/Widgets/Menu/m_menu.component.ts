import { Component,OnInit } from "@angular/core";
declare var $:any;

@Component({
    selector:'m_menu',
    templateUrl:'./m_menu.component.html'
})

export class MENU implements OnInit{

    constructor()
    {
        
    }
    ngOnInit() {
        $(document).ready(function() {
            $("#myBtn").click(function() {
                $("#myModal").modal();
            });
        });
    }

}