import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface Link {
  path: string;
  icon?: string;
  title: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  routes: Link[] = routes.map((route) => ({
    title: route.title?.toString() ?? '', path: route.path ?? ''
  }));

}
