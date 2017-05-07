import { Injectable } from '@angular/core';
import { MainDialogService } from './../../shared/services/main-dialog';

import { PostEditDialogComponent } from './post-edit-dialog/post-edit-dialog.component';

@Injectable()
export class PostService {

  constructor(
    private mainDialogService: MainDialogService
  ) { }

  openEditDialog = (): void => {
      let dialogRef = this.mainDialogService.open({
        title: 'Perguntar algo',
        subtitle: 'Para enviar uma pergunta é preciso estar logado. Por favor, utilize uma das redes sociais abaixo para se identificar.',
        component: PostEditDialogComponent,
        style: { width: '100vh' },
      });
  };

}
