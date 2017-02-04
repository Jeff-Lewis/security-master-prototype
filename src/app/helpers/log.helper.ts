import { Component } from '@angular/core';

export class LogHelper {

  constructor() { }

  static trace(message): void {
    // todo: make emit configurale (turn off in PROD)
    console.log(message);
  }
}
