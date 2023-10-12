import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-incorrecta',
  templateUrl: './incorrecta.page.html',
  styleUrls: ['./incorrecta.page.scss'],
})
export class IncorrectaPage implements OnInit {

  @ViewChild('titulo', { read: ElementRef }) itemTitulo!: ElementRef;
    @ViewChild('video')
  private video!: ElementRef;

  constructor(private router: Router, private animationController: AnimationController) { 
  }

  public animateItem(elementRef: any) {
    this.animationController
      .create()
      .addElement(elementRef)
      .iterations(1)
      .duration(600)
      .fromTo('transform', 'translate(100%)', 'translate(0%)')
      .play();
  }


  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    if (this.itemTitulo) {
      const animation = this.animationController
        .create()
        .addElement(this.itemTitulo.nativeElement)
        .iterations(Infinity)
        .duration(3000)
        .fromTo('transform', 'translate(-100%)', 'translate(100%)')
        .fromTo('opacity', 1, 1);

      animation.play();
    }
  }
  public home(){
    this.router.navigate(['/login']);
  }
}
