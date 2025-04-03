import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
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

}
