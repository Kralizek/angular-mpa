import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  getCurrent() : PageData{
    return pageData;
  }
}

declare var pageData : any;

export interface PageData {
  routeValues : any,
  pageType : string
}