import { ChangeDetectorRef, Component, Input, OnInit, Renderer2 } from '@angular/core';
import { bodyParts } from './bodyparts';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {

  parts = bodyParts
  hoverPart = ""
  male = true;
  front = true;
  backgroundImage = `../../assets/bodyparts/${this.male ? 'Male' : 'Female'}/${this.front ? 'Front' : 'Back'}/anatomical.png`
  backgroundAltImage = `${this.male ? 'Male' : 'Female'} ${this.front ? 'Front' : 'Back'}`
  folder = `../../assets/bodyparts/${this.male ? 'Male' : 'Female'}/${this.front ? 'Front' : 'Back'}`
  activeParts: any[] = this.parts.male.front;
  selectedParts: any[] = []

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {
    console.log(this.selectedParts)

  }

  ngOnInit(): void {
  }

  random() {
    const elems = document.body.getElementsByTagName("path")
    const arr = Array.from(elems);
    // var fin: { id: string, path: string }[] = []
    var fin = []
    for (const elem of arr) {
      const transform = elem.getAttribute('transform')
      if (transform) {
        fin.push({ id: elem.id, transform: `${transform}` })
      }
      // fin.push({ id: elem.id, path: elem.getAttribute('d') ?? '' })
    }
    console.log(JSON.stringify(fin))
  }

  clicked(partId: string) {
    if (this.selectedParts.find(x => x === partId)) {
      const ind = this.selectedParts.findIndex(x => x === partId)
      this.selectedParts.splice(ind, 1)
    } else {
      this.selectedParts.push(partId)
    }
    console.log(this.selectedParts)
  }

  isClicked(partId: string) {
    if (this.selectedParts.find(x => x === partId)) {
      return true
    } else {
      return false
    }
  }



  updateImages() {
    this.activeParts = this.parts[this.male ? 'male' : 'female'][this.front ? 'front' : 'back']
    this.backgroundImage = `../../assets/bodyparts/${this.male ? 'Male' : 'Female'}/${this.front ? 'Front' : 'Back'}/anatomical.png`
    this.backgroundAltImage = `${this.male ? 'Male' : 'Female'} ${this.front ? 'Front' : 'Back'}`
  }

  selectPart(event: any) {
    if (!this.selectedParts.includes(event.target.id)) {
      this.selectedParts.push(event.target.id)
    } else {
      this.selectedParts = this.selectedParts.filter(a => a !== event.taget.id)
    }
  }

  isSelected(event: any) {
    const id: string = event.target.id
    return this.selectedParts.includes(id)
  }

  isHovered(event: any) {
    // console.log("LKJLLKJLK: ", event)
    // const id: string = event.id
    return this.hoverPart === event
  }
}
