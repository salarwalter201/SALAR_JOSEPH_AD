import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    LoopsTriangle(length:number){

        for (var result = "*"; result.length <=7; result = result + "*")
        console.log(result);
    }

    HelloWorld(){
        console.log("Hello World!");
    }

    PrimeNumber(n){
        {
           
            if (n===1)
            {
              return false;
            }
            else if(n === 2)
            {
              return true;
            }else
            {
              for(var x = 2; x < n; x++)
              {
                if(n % x === 0)
                {
                  return false;
                }
              }
              return true;  
            }
          }
          
          console.log("6 is a prime number? " + n);
    }

}
