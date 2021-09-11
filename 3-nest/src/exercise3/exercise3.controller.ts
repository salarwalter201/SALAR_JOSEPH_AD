import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){}

    @Get('/loopsTriangle/:length')  
    LoopsTriangle(@Param('length')length: string){
        var parsedLength:number = parseInt(length);
        return this.e3.LoopsTriangle(parsedLength);
    }

    @Get('/HelloWorld/:')
    HelloWorld(@Param('')string)
    {
        return this.e3.HelloWorld();
    }

    @Get('/PrimeNumber/: n')
    PrimeNumber(@Param('n')n: string){
        var parsedN:number = parseInt(n);
        return this.e3.PrimeNumber(parsedN);
    }

}
