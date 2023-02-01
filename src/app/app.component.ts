import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  show = true;

  friends = ["Ankita","Aishwarya","Amruta","Aarti","Shilpa","Prajakta","Smita","Pooja"]

  choice = 0;



  students =[
    {
      rollNo:1,
      name:"Ankita",
      Surname:"Suryavanshi"
    },
    {
      rollNo:2,
      name:"Amruta",
      Surname:"Yadav"
    },
    {
      rollNo:3,
      name:"Aishwarya",
      Surname:"Kumbhar"
    },
    {
      rollNo:4,
      name:"Shilpa",
      Surname:"Ashtage"
    },
    {
      rollNo:5,
      name:"Prajakata",
      Surname:"Chavan"
    },

  ]



  showdiv(){
    // alert("ganpati bappa morya")

    this.show = !this.show
  }
}

