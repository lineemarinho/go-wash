import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  user: any;
  constructor(private storage: Storage) {}

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
    });
  }
}
