const http = require('http')
const fs = require('fs')
const qs = require('qs')
const url = require('url')
let handle ={}
const server = http.createServer((req,res)=>{
    let urlPath = url.parse(req.url).pathname
    let trimPath = urlPath.replace(/^\/+|\/+$/, "")
    let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handle.notFound;
    chosenHandler(req, res);
})
server.listen(4000 , 'localhost',()=>{
    console.log("http://localhost:4000/home")
})
handle.notFound = function (req,res){
    fs.readFile("./public/notfound.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{'content-Type':"text/html"})
        res.write(data)
        return res.end();
    })
}
handle.home = function (req,res){
    fs.readFile('./public/index.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                console.log(dataJs)
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })

        })

    })
}
handle.about = function (req , res){
    fs.readFile('./public/about.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}
handle.course = function (req , res){
    fs.readFile('./public/course.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}
handle.add = function (req , res){
    fs.readFile('./public/add.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}
handle.edit = function (req , res){
    fs.readFile('./public/edit.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}
handle.delete = function (req , res){
    fs.readFile('./public/delete.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}
handle.contact = function (req , res){
    fs.readFile('./public/contact.html', 'utf8', (err, dataHtml)=>{
        if(err){
            console.log(err.message)
        }
        fs.readFile("./public/css/style.css",'utf-8',(err, dataCss)=>{
            fs.readFile('./public/js/main.js', 'utf8', (err, dataJs)=>{
                if(err){
                    console.log(err.message)
                }
                let data = `<html><head><style>${dataCss}</style></head><body>${dataHtml}<script>${dataJs}</script></body></html>`;
                console.log()
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                return res.end();
            })
        })

    })
}

let router ={
    'home': handle.home,
    'about': handle.about,
    'course': handle.course,
    'add': handle.add,
    'edit': handle.edit,
    'delete': handle.delete,
    'contact': handle.contact,
}