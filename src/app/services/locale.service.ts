import { Injectable, signal } from '@angular/core';

export type CustomLocale = 'en'|'fr'|'es'

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<CustomLocale>('en')


  constructor() { 
    this.currentLocale.set(
      localStorage.getItem('locale') as CustomLocale ?? 'es'
    )
  }

  get getLocale(){
    return this.currentLocale()
  }

  changeLocale(locale:CustomLocale) {
    localStorage.setItem('locale', locale)
    this.currentLocale.set(locale)
    window.location.reload()
  }
}
