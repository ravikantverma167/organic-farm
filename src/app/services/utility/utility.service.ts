import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(

  ) { }

    /********* Set data in local storage **********/
    setLocalData(key: string, data: any, json?: boolean) {
      localStorage.setItem(key, json ? JSON.stringify(data) : data);
    }
  
    /********* Get data from local storage **********/
    getLocalData(key: string, json?: boolean) {
      let _data: any = null;
      try {
        _data = json
          ? JSON.parse(localStorage.getItem(key) as string)
          : localStorage.getItem(key);
        return _data;
      } catch (error) {
        if (error instanceof SyntaxError) this.clearLocalData(key);
        return null;
      }
    }
  
    /********* Remove data from local storage **********/
    clearLocalData(key: string) {
      localStorage.removeItem(key);
    }

    /********* Share cart data **********/
    private cartSource: BehaviorSubject<any> = new BehaviorSubject(
      this.getLocalData("cart", true)
    );
    getCart: Observable<any> = this.cartSource.asObservable();
    setCart(data: any) {
      this.setLocalData("cart", data, true);
      this.cartSource.next(data);
    }
}
