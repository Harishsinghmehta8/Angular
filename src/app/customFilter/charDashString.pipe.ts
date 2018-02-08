import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'charDash'
})

export class charDashString implements PipeTransform {
  transform(value:string):string{
   let result:string[]=[];
   if(value && value.length)
   {
       for(let chr of value)
       {
           result.push(chr.toUpperCase());
       }
       
   }
    return result.join('-');
   }

}