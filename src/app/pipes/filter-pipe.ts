import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee/employee';
import { Datas } from '../model/Datas';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Datas[], searchTerm: string): Datas[] {
    if(!searchTerm)
    {
      return value;
    }

    const txt=searchTerm.toLowerCase();
return value.filter((data)=>{
  return data.name.toLowerCase().includes(txt);
})

  }
}
