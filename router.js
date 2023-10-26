const express = require('express')
const router = express.Router()


const conexion = require('./database/db')


//mostrar los registros en el index
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM users', (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results})
        }
    })
})
//Ruta para crear registros
router.get('/create', (req,res)=>{
    res.render('create.ejs')
})

const crud = require('./controllers/crud.js')

router.post('/save', crud.save)
router.post('/update', crud.update)

//Ruta para eliminar registros
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/')
        }
    })
})


//Ruta para editar registros

router.get('/edit/:id', (req,res)=>{
    const id = req.params.id
    conexion.query("SELECT * FROM users WHERE id=?",[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit.ejs', {user:results[0]})
        }
    })
})


module.exports = router