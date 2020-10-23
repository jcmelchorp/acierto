import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavItem } from '../../models/nav-items';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MenuComponent {
  @Input() items: NavItem[];


}
