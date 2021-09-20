import { Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { DynamicLoader } from './dynamic-loader.service';

@Directive({
  selector: '[appModuleFedLoader]',
})
export class LoaderDirective implements OnChanges {
  @Input() public appModuleFedLoader!: {
    path: string;
    name: string;
    component: string;
  };
  constructor(
    private viewContainerRef: ViewContainerRef,
    private loader: DynamicLoader
  ) {}
  ngOnChanges(): void {
    this.loader.loadComponent(this.viewContainerRef, this.appModuleFedLoader);
  }
}
