import {Router} from 'express'
import AppController from '../controller/AppController.js'

const router = Router()

router.get('/auth', AppController.auth)
router.get('/leads', AppController.createLead)
router.get('/contacts', AppController.createContact)
router.get('/companies', AppController.createCompany)

export default router
