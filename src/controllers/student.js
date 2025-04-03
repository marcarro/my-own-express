class CustomerController {
    constructor(service) {
      this.service = service;
    }
  
    async getAll() {
      return this.service.getAllStudents();
    }
}
  
module.exports = CustomerController;
  