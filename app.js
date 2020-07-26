class NumerosAmigos {
    constructor() {
        this.save =  [
            {
                position: 0,
                suma: 0,
            }
        ];
    }

    calcular(num) {
        for (let r = 1; r <= num; r++) {
            let suma = 0;
            for (let i = 1; i < r; i++) {
                if (r % i == 0) {
                    suma += i;

                }
            }
            var posicion = r;
            var valor = suma;
            this.save.push({
                position: posicion,
                suma: valor
            });
        }
    }

    empatar() {
        let print = ""
        for (let i = 1; i < this.save.length; i++) {
            for (let i2 = 0; i2 < this.save.length; i2++) {
               if(this.save[i].suma == this.save[i2].position && this.save[i2].suma == this.save[i].position && this.save[i].suma != this.save[i].position) {
                console.log(this.save[i2].suma);
                print +=  ` Número amigo: ${this.save[i2].suma}`;
               }
               
            }
        }
        document.write(print)
    }

   
}

let numAmigos = new NumerosAmigos();
numAmigos.calcular(5000);
numAmigos.empatar()
