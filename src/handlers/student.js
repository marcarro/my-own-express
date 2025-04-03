class StudentHttpHandler {
    constructor(customerController) {
      this.customerController = customerController;
    }
  
    async getAllStudents(req, res) {
      try {
        const customers = await this.customerController.getAll();
        res.json(customers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}
  
  // Export the class directly
module.exports = StudentHttpHandler;
  