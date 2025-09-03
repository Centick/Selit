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
                html: `
                    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                    <html>
                    <head>
                    \t<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                    \t<meta name="x-apple-disable-message-reformatting">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1">
                    \t<title>Спасибо, что выбрали нас</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400&display=swap" em-class="em-font-Montserrat-Regular">
                    \t<style type="text/css">
                    \t\thtml {
                    \t\t\t-webkit-text-size-adjust: none;
                    \t\t\t-ms-text-size-adjust: none;
                    \t\t}
                    \t</style>
                    \t<style em="styles">
                    .em-font-Montserrat-Regular {
                        font-family: "Montserrat",sans-serif!important;
                        font-weight: 400!important;
                    }
                    @media only screen and (max-device-width:660px),only screen and (max-width:660px) {
                        .em-narrow-table {
                            width: 100%!important;
                            max-width: 660px!important;
                            min-width: 320px!important;
                        }
                        .em-mob-wrap {
                            display: block!important;
                        }
                        .em-mob-padding_right-20 {
                            padding-right: 20px!important;
                        }
                        .em-mob-padding_left-20 {
                            padding-left: 20px!important;
                        }
                        .em-mob-width-100perc {
                            width: 100%!important;
                            max-width: 100%!important;
                        }
                    }
                    </style>
                    \t<!--[if gte mso 9]>
                    \t<xml>
                    \t\t<o:OfficeDocumentSettings>
                    \t\t<o:AllowPNG></o:AllowPNG>
                    \t\t<o:PixelsPerInch>96</o:PixelsPerInch>
                    \t\t</o:OfficeDocumentSettings>
                    \t</xml>
                    \t<![endif]-->
                    </head>
                    <body style="margin: 0; padding: 0; background-color: #F8F8F8;">
                    \t<span class="preheader" style="display: none !important; visibility: hidden; opacity: 0; color: #F8F8F8; height: 0; width: 0; font-size: 1px;">&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;</span>
                    \t<!--[if !mso]><!-->
                    \t<div style="font-size:0px;color:transparent;opacity:0;">
                    \t\t⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    \t</div>
                    \t<!--<![endif]-->
                    \t<table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 1px; line-height: normal;" bgcolor="#F8F8F8">
                    \t\t<tr em="group">
                    \t\t\t<td align="center">
                    \t\t\t\t<!--[if (gte mso 9)|(IE)]>
                    \t\t\t\t<table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                    \t\t\t\t<![endif]-->
                    \t\t\t\t<table cellpadding="0" cellspacing="0" width="100%" border="0" style="max-width: 660px; min-width: 660px; width: 660px;" class="em-narrow-table"><tr em="block" class="em-structure">
                                                            <td align="center" style="padding: 30px 40px;" class="em-mob-padding_left-20 em-mob-padding_right-20">
                                                                <table align="center" border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                                                    <tr>
                                                                        <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc">
                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="em-mob-width-100perc" em="atom"><tr><td align="center">
                      <img src="https://emcdn.ru/1393224/250903_15069_K1BW2BB.png" width="63" border="0" alt="" style="display: block; width: 100%; max-width: 63px;">
                    </td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" class="em-mob-width-100perc" em="atom"><tr><td style="padding: 20px 0px 10px;">
                      <div style="font-family: Helvetica, Arial, sans-serif; font-size: 24px; line-height: 32px; color: #333333;" align="center" class="em-font-Montserrat-Regular"><strong>Ваше обращение будет рассмотрено в ближайшее время!</strong></div>
                    </td></tr></table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="em-mob-width-100perc" em="atom"><tr><td style="padding-bottom: 10px;">
                      <div style="font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; font-size: 16px; line-height: 21px; color: #5a5a5a;" align="center">Ответ вышлем на эту почту</div>
                    </td></tr></table>
                    
                    
                    
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                        </tr></table>
                    \t\t\t\t<!--[if (gte mso 9)|(IE)]>
                    \t\t\t\t</td></tr></table>
                    \t\t\t\t<![endif]-->
                    \t\t\t</td>
                    \t\t</tr>
                    \t</table>
                    </body>
                    </html>`,
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
