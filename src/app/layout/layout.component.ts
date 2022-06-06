import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  male = true;
  front = true;
  backgroundImage = `../../assets/bodyparts/${this.male ? 'Male' : 'Female'}/${this.front ? 'Front' : 'Back'}/anatomical.png`
  backgroundAltImage = `${this.male ? 'Male' : 'Female'} ${this.front ? 'Front' : 'Back'}`
  hoverFolder = ``
  activeFolder = ``
  focusFolder = ``

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  setMale(sex: boolean) {
    this.male = sex;
    this.updateImages()
  }

  updateImages() {
    this.backgroundImage = `../../assets/bodyparts/${this.male ? 'Male' : 'Female'}/${this.front ? 'Front' : 'Back'}/anatomical.png`
    this.backgroundAltImage = `${this.male ? 'Male' : 'Female'} ${this.front ? 'Front' : 'Back'}`
  }
}
