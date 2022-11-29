import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-data-example.component.html',
})
export class DialogDataExampleComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data-example-dialog.component.html',
})
export class DialogDataExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}



