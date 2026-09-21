import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.html',
    styleUrl: './contador.scss'
})
export class Contador{
    protected contador = signal<number>(0);

    sumar(): void {
        this.contador.update((v)=> v+1);
    }
    restar(): void {
        this.contador.update((v)=> v-1);

    }
    
}


