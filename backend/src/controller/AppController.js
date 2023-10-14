import AmoCrmService from "../service/AmoCrmService.js"

class AppController{
  async auth(req, res){
    try {
      await AmoCrmService.fetchToken(req.query)
      res.status(201).json('success')
    } catch (e){
      res.status(500).json(e)
    }
  }

  async createLead(req, res){
    try {
      const params = await AmoCrmService.createLead()
      res.status(201).json(params)
    } catch (e){
      res.status(500).json(e)
    }
  }

  async createContact(req, res){
    try {
      const params = await AmoCrmService.createContact()
      res.status(201).json(params)
    } catch (e){
      res.status(500).json(e)
    }
  }

  async createCompany(req, res){
    try {
      const params = await AmoCrmService.createCompany()
      res.status(201).json(params)
    } catch (e){
      res.status(500).json(e)
    }
  }
}

export default new AppController()
