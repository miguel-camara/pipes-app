import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  // text
  nameLowerCase = signal<string>('miguel');
  nameUpperCase = signal<string>('MIGUEL');
  fulNameCase = signal<string>('mIguEL OrdoÑeZ');
  // date
  customDate = signal<Date>(new Date());

  tickingDateEffect = effect((clear) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)
    console.log('tick');


    clear(() => {
      clearInterval(interval);
    })
  });

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

}
