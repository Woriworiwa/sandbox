import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {Model} from "../model/repository.model";
import {SharedState, MODES} from './sharedState.model';

@Component({
  selector: 'sandbox-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private state: SharedState = new SharedState();

  constructor(private model: Model) {
  }

  ngOnInit(): void {
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  editProduct(key: number) {
    this.state.id = key;
    this.state.mode = MODES.EDIT;
  }

  createProduct() {
    this.state.id = undefined;
    this.state.mode = MODES.CREATE;
  }
}
