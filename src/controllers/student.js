class StudentController {
    constructor(service) {
      this.service = service;
    }
  
    async getAll() {
      const students = await this.service.getAllStudents();
      return students.map(student => {
        let estatus;
        
        if (student.calificacion >= 70) {
            if (student.deuda <= 0) {
                estatus = "Aprobado";
            } else {
                estatus = "Reestructura";
            }
        } else {
            if (student.deuda <= 0) {
                estatus = "Pendiente";
            } else {
                estatus = "Expulsado";
            }
        }
        
        return {
          matricula: student.matricula,
          nombre: student.nombre,
          estatus: estatus
        };
      });
    }
}
  
module.exports = StudentController;
  