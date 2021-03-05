import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHeightlight]'
})
export class HeightlightDirective {
  el:ElementRef;
  @Input() color: string;
  constructor(el:ElementRef) {  // ElementRef is DOM CLass which helps to perfor or manupluate the DOM Element

    this.el=el;
    this.color="";
    // el.nativeElement.style.backgroundColor = 'yellow';

  }

  // define Angular Life Cycle method for Comp. 

  // One more method to implement the code 

// Life Cycle Hook 
ngOnInit() {
  console.log("directive : ", +this.color);
  this.el.nativeElement.style.backgroundColor =this.color;
}  


}
