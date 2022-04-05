import { ProjectsInfoService } from './../../services/projects-info.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  description = ''
  @Input() id = ''
  @Input() title = ''
  @Input() descriptionHidden = ''
  @Input() linkRepositorio = ''
  @Input() linkPagina = ''
  @Input() image = ''

  constructor() { }

  ngOnInit(): void {
  }

  showDescription(){
    if(this.description == ''){
      this.description = this.descriptionHidden
    } else {
      this.description = ''
    }
  }
}
