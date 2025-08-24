const express = require("express");
const bodyParser = require('body-parser');
// const sql = require('./database.cjs');
const session = require('express-session');
const cors = require('cors');
const {request} = require("express");
const MySQLStore = require('express-mysql-session')(session);
const fs = require('fs');
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require('path');

// Mail Sender Init
const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: "filan333@yandex.ru",
        pass: "viumelzuqmvoxquf",
    },
});

const upload = multer({
    dest: path.join(__dirname, "../dist/files")
});

// const sessionStore = new MySQLStore({}, sql);

const corsOption = {
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

// App Init
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'cookie_secret',
        resave: false,
        saveUninitialized: false
    })
);
app.use(cors(corsOption));

// function sql_query(query, options, cb){
//     sql.query(query, options, (err, res)=>{
//         if(err){
//             console.log("error: ", err);
//             return;
//         }
//         cb(res);
//     });
// }

// Routes Init
app.post("/api/send/", upload.single("file"), function(req, res){
    let name = req.body.name.trim();
    let phone = req.body.phone.trim();
    let email = req.body.email.trim();
    let text = req.body.text.trim();

    let filename = 'Отсутствует';
    if(req.file){
        const tempPath = req.file.path;
        filename = String(Math.round(Math.random() * 9999999)) + path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.join(__dirname, "../dist/files/" + filename);
        fs.rename(tempPath, targetPath, err => {
            console.log(err);
            fs.copyFile(targetPath, path.join(__dirname, "../public/files/" + filename), (err) => {
                console.log(err);
            });
        });
    }

    try{
        (async () => {
            const user = await transporter.sendMail({
                from: '"Selit" <filan333@yandex.ru>',
                to: email,
                subject: "Спасибо, что выбрали нас!",
                html: "<b>Ваше обращение будет рассмотрено в ближайшее время!</b><br>Ответ вышлем на эту почту",
            });
            const us = await transporter.sendMail({
                from: '"Selit" <filan333@yandex.ru>',
                to: 'filan333@yandex.ru',
                subject: "Поступило обращение",
                html: `<b>Поступило новое обращение от пользователя: ${name}, ${phone}, ${email}</b><br>Текст: ${text}<br> Файл ТЗ: ${filename}`,
            });

            console.log("Message sent:", user.messageId);
            console.log("Message sent:", us.messageId);

            res.json({"status": 'ok'});
        })();
    }
    catch(e){
        res.json({"status": 'error'});
    }
});

app.get(/(.*)/, (req, res) => {
    fs.exists(__dirname + '/../dist' + req.url, (e) => {
        if(e){
            res.sendFile(req.url, {root: __dirname + '/../dist'});
        }
        else{
            res.sendFile('index.html', {root: __dirname + '/../dist'});
        }
    });
});


// Listen App
app.listen(80);
