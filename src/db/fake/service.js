const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.initialized = true;
    this.students = new Map();
    const dummyStudents = [
      { matricula: '1', nombre: 'John Doe', calificacion: 70, deuda: 0},
      { matricula: '2', nombre: 'Jane Smith', calificacion: 0, deuda: 0},
      { matricula: '3', nombre: 'Bob Johnson', calificacion: 70, deuda: 100},
      { matricula: '4', nombre: 'Alice Brown', calificacion: 0, deuda: 100},
    ];

    dummyStudents.forEach((student) => {
        this.students.set(student.matricula, student);
    });
  }

  async getAllStudents() {
    const result = []
    this.students.forEach((student, matricula) => {
        result.push({
            matricula: matricula,
            nombre: student.nombre,
            calificacion: student.calificacion,
            deuda: student.deuda
        });
    });

    return result;
  }
}

module.exports = FakeService;
