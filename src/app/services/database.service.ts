import { Injectable } from '@angular/core';

export class DatabaseService {

  nameArray: string[] = [];

  data;

  constructor() { }

  isDataAvailable(): boolean {
    if (this.data === null) {
      return false;
    } else {
      return true;
    }
  }

  setData(data) {
    this.data = data;
    for(const key in data) {
      this.nameArray.push(key);
    }
  }

  getData() {
    return this.data;
  }

  getNameArray() {
    return this.nameArray;
  }

  getDataOfPerson(name: string) {
    return this.data[name];
  }
}
