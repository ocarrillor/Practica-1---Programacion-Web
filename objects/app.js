let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getDom: function () {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp},${this.municipio}`
        }
    }
}
console.log(persona.domicilio.getDom());