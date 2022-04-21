import { Pipe, PipeTransform } from '@angular/core';
import { scores } from './high-scores.service';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(data: Array<scores>, sortBy: string, order:number): Array<any> {
    if (sortBy === 'asc') {
      data.sort((a, b) => {
        return a.score - b.score;
      })
      return data;
    }
    if (sortBy === 'desc') {
      data.sort((a, b) => {
        return b.score - a.score;
      })
    }
    return data;
  }

}