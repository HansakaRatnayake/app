import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading:BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor() { }
}
