import { Pipe, PipeTransform } from '@angular/core';
import { Datas } from '../model/Datas';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Datas[], searchTerm: string): Datas[] {
    if(!searchTerm || searchTerm.trim().length==0)
    {
      return value;
    }
  
    const txt=searchTerm.toLowerCase();
return value.filter((data)=>{
  return data.name.toLowerCase().includes(txt);
})

  }
}
