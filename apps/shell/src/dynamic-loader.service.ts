import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicLoader {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public loadComponent(
    viewContainerRef: ViewContainerRef,
    appDetail: {
      path: string;
      name: string;
      component: string;
    }
  ) {
    const cdnUrl = 'http://localhost:3000';
    if (!appDetail) return;
    loadRemoteModule({
      remoteEntry: `${cdnUrl}${appDetail.path}`,
      remoteName: appDetail.name,
      exposedModule: `./${appDetail.component}`,
    }).then((m) => {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          m[appDetail.component]
        );
      viewContainerRef.clear();
      viewContainerRef.createComponent(componentFactory);
    });
  }
}
