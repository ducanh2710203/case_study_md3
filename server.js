const http = require('http')
const fs = require('fs')
const qs = require('qs')
const url = require('url')
let handle ={}
const server = http.createServer((req,res)=>{
    let mimeTypes={
        'jpg' : 'images/jpg',
        'png' : 'images/png',
        'js' :'text/javascript',
        'css' : 'text/css',
        'svg':'image/svg+xml',
        'ttf':'font/ttf',
        'woff':'font/woff',
        'woff2':'font/woff2',
        'eot':'application/vnd.ms-fontobject'
    }
    let urlPath = url.parse(req.url).pathname
    let trimPath = urlPath.replace(/^\/+|\/+$/g, "")
    const filesDefences = urlPath.match(/\.js|\.css|\.png|\.svg|\.jpg|\.ttf|\.woff|\.woff2|\.eot/);
    if (filesDefences) {
        const extension = mimeTypes[filesDefences[0].toString().split('.')[1]];
        res.writeHead(200, {'Content-Type': extension});
        fs.createReadStream(__dirname  + req.url).pipe(res)
    } else{
        let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handle.notFound;
        chosenHandler(req, res);
    }
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
    fs.readFile("./public/index.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.about = function (req , res){

    fs.readFile("./public/about.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.course = function (req , res){
    fs.readFile("./public/course.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.add = function (req , res){
    fs.readFile("./public/add.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.edit = function (req , res){
    fs.readFile("./public/edit.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.delete = function (req , res){
    fs.readFile("./public/delete.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.contact = function (req , res){
    fs.readFile("./public/contact.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
    })
}
handle.login = function (req , res){
    fs.readFile("./public/login.html",'utf-8',(err, data)=>{
        if(err){
            console.log(err.message)
        }
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        return res.end();
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
    'login': handle.login,
}