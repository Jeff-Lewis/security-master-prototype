import { Component } from '@angular/core';

export class LogHelper {

  constructor() { }

  static error(message, error): void {
    console.error('An error occurred', error); // for demo purposes only
  }

  static trace(message): void {
    // todo: make emit configurale (turn off in PROD)
    console.log(message);
  }
}
