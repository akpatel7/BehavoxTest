import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightFilter'
})
export class HighlightFilterPipe implements PipeTransform {

  transform(text: string, search: string): string {
    if (!!search && search.length) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t: string) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');

      return search ? text.replace(regex, (match) => `<mark>${match}</mark>`) : text;
    }
    return text;
  }

  /* Usage:
  * <input type="text" [(ngModel)]="filter">
  * <div [innerHTML]="myAwesomeText  | highlightFilter : filter"></div>
  *
  */

}
