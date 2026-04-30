import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/Employee';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Employee[], searchTerm: string): Employee[] {
    if (!searchTerm || searchTerm.trim().length == 0) {
      return value;
    }

    const txt = searchTerm.toLowerCase();
    return value.filter((data) => {
      return data.employee_name.toLowerCase().includes(txt);
    });
  }
}
