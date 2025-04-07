class StudentHttpHandler {
    constructor(studentController) {
      this.studentController = studentController;
    }
  
    async getAllStudents(req, res) {
      try {
        const customers = await this.studentController.getAll();
        res.json(customers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}
  
  // Export the class directly
module.exports = StudentHttpHandler;
  