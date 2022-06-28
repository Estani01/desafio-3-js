class paciente{
    constructor (nombre, edad, prepaga){
        this.nombre= nombre;
        this.edad= edad;
        this.prepaga=prepaga;
    }

    
}

const neurologia= [];

neurologia.push(new paciente("mauro", 16, "osde"));
neurologia.push(new paciente("matias", 26, "osde"));
neurologia.push(new paciente("lucas", 19, "sweet medical"));
neurologia.push(new paciente("marcela", 9, "lecheros"));


const odontologia= [];

odontologia.push(new paciente("tobias",20,"osde"));
odontologia.push(new paciente("gisel",60,"osde"));
odontologia.push(new paciente("gerardo",32,"s-m"));
odontologia.push(new paciente("clara",29,"osde"));


const guardia=[];

guardia.push(new paciente("martin",25,"s-m"));
guardia.push(new paciente("lautaro",80,"pami"));
guardia.push(new paciente("federico",60,"pami"));
guardia.push(new paciente("pedro",20,"osde"));



console.log(guardia[2]);
console.log(neurologia[0])
console.log(odontologia.indexOf("gustavo"));