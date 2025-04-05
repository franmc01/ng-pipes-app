import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import { CustomLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
  localService = inject(LocaleService)

  nameLower = signal("francisco")
  nameUpper = signal("Francisco")
  fullName = signal("FrAnCiSCo")

  customDate = signal(new Date())

  tick = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)

    onCleanup(() => clearInterval(interval))
  })

  changeLocale(locale: CustomLocale){
    this.localService.changeLocale(locale)
  }

}
