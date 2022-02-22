const controller ={}


controller.read = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT * from clientes', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientes',{
                data: cliente
            })
            
        })
    })
}

controller.insert = (req, res) => {
    const cliente = req.body
    req.getConnection((e,con)=>{
        if(e){
            res.json(e)
        }
        con.query('Insert into clientes set ?', [cliente],(e,cliente) =>{
            if(e){
                res.json(e)
            }
            res.redirect('back')
        }
        )
    }    
    )
}


controller.update = (req, res) => {
    const id  = req.body.id_updt
    const nombre  = req.body.nombre_updt
    const fecha_nac  = req.body.fecha_updt
    const ciudad  = req.body.ciudad_updt
    const sexo  = req.body.sexo_updt
    const cliente = req.body
    req.getConnection((e,con) =>{
        if(e){
            res.json(e)
            console.log('no conecta')
        }
        console.log(cliente)
        con.query("UPDATE clientes SET nombre='"+nombre+"', fecha_nac='"+fecha_nac+"', ciudad='"+ciudad+"', sexo='"+sexo+"' WHERE clientes.id= "+id, [cliente],(e, rows) => {
            if(e){
                res.json(e)
                console.log('error en query')
            }
            res.redirect('back')
    }
    )
  }
  )
}

controller.delete =(req, res) =>{
  const { id } = req.params
   req.getConnection((e,con)=>{
       if(e){
           res.json(e)
       }
       con.query('delete from clientes where id= ?',[id],(e, rows) =>{
           if(e){
               res.json(e)
           }
           res.redirect('back')

       })
   })
}

controller.readreg = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT * from clientes order by reg', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientesreg',{
                data: cliente
            })
            
        })
    })
}
controller.readnom = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT * from clientes order by nombre', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientesnom',{
                data: cliente
            })
            
        })
    })
}
controller.readfec = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT * from clientes order by fecha_nac', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientesfec',{
                data: cliente
            })
            
        })
    })
}
controller.reads = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT * from clientes order by sexo', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientesx',{
                data: cliente
            })
            
        })
    })
}

module.exports = controller