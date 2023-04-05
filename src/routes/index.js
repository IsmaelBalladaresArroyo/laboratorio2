import { Router } from 'express'

const router = Router()



router.get('/', (req, res) => res.render('index', {title: 'Laboratorio2'}))

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

router.get('/client', (req, res) => res.render('client'))

export default router