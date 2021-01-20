import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PuremoneywalletService } from '../puremoneywallet';
import { providers } from 'ethers';

@Component({
  selector: 'puremoneywallet-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public address: string;
  public network: providers.Network;
  public balance: string;
  public txForm: FormGroup;

  constructor(
    private service: PuremoneywalletService,
    private fb: FormBuilder
  ) { }

  
  async ngOnInit() {
    this.txForm = this.fb.group({
      'to': ['', Validators.required],
      'value': [0, Validators.required]
    });
    this.address = this.service.wallet.address;
    this.network = this.service.provider.network;
    this.balance = await this.service.getBalance();
  }

  public async sendTx() {
    if (!this.txForm.valid) { return; }
    try {
      const response = await this.service.sendTx(this.txForm.value);
      console.log({response});
    } catch (e) {
      console.error('Cannot send Transaction', e);
    }
  }
}
