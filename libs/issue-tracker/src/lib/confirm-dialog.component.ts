import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sandbox-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input()
  issueNo: number | null = null;

  @Output()
  confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  agree() {
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  }
}
