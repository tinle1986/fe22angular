import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHighLight]"
})
export class HighLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "green";
    this.render2.setStyle(this.ele.nativeElement, "background-color", "green");
  }

  @HostBinding("style.backgroundColor") bgColor:string = "red";

  @HostListener("mouseenter") suKienHover(eventData: Event) {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "yellow");
  }

  @HostListener("mouseleave") suKienExit(eventData: Event) {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "green");
  }
}
