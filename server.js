require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { read_file, write_file } = require('./fs/fs')

const bot = new TelegramBot(process.env.BOT_API_KEY, { polling: true })

let menu = 0;



// Kirish

bot.onText(/start/, msg => {
    bot.sendMessage(msg.chat.id, '<b>Assalomu alaykum botimizga xush kelibsiz 😀</b>', {
        parse_mode: "HTML",
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "Operatsion Sistemalar(OS)"
                    }
                ],
                [
                    {
                        text: "Arxivlar paroli"
                    }
                ],
                [
                    {
                        text: "Arxivdan chiqarish qo'llanma"
                    },
                    {
                        text: "📊Statistika"
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
    let user = {}
    try {
        let users = read_file("user.json");
        let foundedUser = users.find(s => s.id == msg.from.id);
        if (foundedUser){
            console.log("Bu user ro'yxatdan o'tgan!");
            return 0;
        }
        else {
            user = {
                id: msg.from.id,
                first_name: msg.from.first_name,
                username: msg.from.username
            }
            users.push(user);
        }
        write_file("user.json", users);
    }
    catch {err} {
        console.error(err)
    }
})


// Asosiy Menyu

bot.on("message", async msg => {
    if (msg.text == 'Operatsion Sistemalar(OS)') {
        menu = 1
        bot.sendMessage(msg.chat.id, 'Operatsion Sistemalardan birini tanlang☺️', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Windows"
                        },
                        {
                            text: "Linux"
                        }
                    ],
                    [
                        {
                            text: "MacOS"
                        }
                    ],
                    [
                        {
                            text: "Android OS"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        });
    }

    else if (msg.text == 'Arxivlar paroli') {
        bot.sendPhoto(msg.chat.id, './document/parol.jpg', {
            caption: "Arxiv paroli rasmda ko'rsatilgan 😊"
        });
    }

    else if (msg.text == "Arxivdan chiqarish qo'llanma") {
        bot.sendPhoto(msg.chat.id, './document/qollanma.jpg', {
            caption: "Ko`p faylli arxivlarni arxivdan xalos qilish uchun qo`llanma !!!"
        });
    }

    else if (msg.text == "📊Statistika") {
        let users = read_file('user.json');
        bot.sendMessage(msg.chat.id, `👥 Botdagi obunachilar:  ${users.length} \n\n 🔜 Oxirgi 24 soatda: Hali tayor emas! \n 🔝 Oxirgi 1 oyda: Hali tayor emas! \n 📆 Bot ishga tushganiga: Hali ishga tushmadi! \n\n 📊  @imtihon_ucun_bot statistikasi`)
    }


    // Operatsion Sistemalar(OS) ----> Menyusi

    else if (msg.text == "Windows") {
        menu = 2
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "x32"
                        },
                        {
                            text: "x64"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Linux") {
        menu = 2
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Ubuntu"
                        },
                        {
                            text: "Kali"
                        }
                    ],
                    [
                        {
                            text: "PureOS"
                        },
                        {
                            text: "Debian"
                        }
                    ],
                    [
                        {
                            text: "CentOS"
                        },
                        {
                            text: "Puppy"
                        },
                        {
                            text: "BlackLab"
                        }
                    ],
                    [
                        {
                            text: "BunsenLabs"
                        }
                    ],
                    [
                        {
                            text: "Arch Linux"
                        },
                        {
                            text: "Slackware"
                        },
                        {
                            text: "Solus"
                        }
                    ],
                    [
                        {
                            text: "Bodhi Linux"
                        },
                        {
                            text: "Xubuntu"
                        }
                    ],
                    [
                        {
                            text: "Fedora"
                        }
                    ],
                    [
                        {
                            text: "Zorin Linux"
                        },
                        {
                            text: "PCLinuxOS"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "MacOS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/mac/macOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/mac/macOS-1.txt');
        await bot.sendDocument(msg.chat.id, './document/mac/macOS-2.txt');
        await bot.sendDocument(msg.chat.id, './document/mac/macOS-3.txt');
    }

    else if (msg.text == "Android OS") {
        menu = 2
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Android 9.0"
                        }
                    ],
                    [
                        {
                            text: "Prime OS"
                        }
                    ],
                    [
                        {
                            text: "Bliss OS"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    // Windows -----> Menyusi

    else if (msg.text == "x32") {
        menu = 3
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Windows 10 | x32"
                        }
                    ],
                    [
                        {
                            text: "Windows 8 | x32"
                        },
                        {
                            text: "Windows 7 | x32"
                        }
                    ],
                    [
                        {
                            text: "Windows Vista | x32"
                        }
                    ],
                    [
                        {
                            text: "Windows XP | x32"
                        },
                        {
                            text: "Windows 98 | x32"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "x64") {
        menu = 3
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Windows 11"
                        },
                        {
                            text: "Windows 10"
                        },
                        {
                            text: "Windows 8"
                        }
                    ],
                    [
                        {
                            text: "Windows 7"
                        },
                        {
                            text: "Windows Vista"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    // Windows -----> x32 -----> Menyusi

    else if (msg.text == "Windows 10 | x32") {
        menu = 4
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "1507"
                        },
                        {
                            text: "1511"
                        }
                    ],
                    [
                        {
                            text: "1607"
                        },
                        {
                            text: "1703"
                        },
                        {
                            text: "1709"
                        }
                    ],
                    [
                        {
                            text: "1803"
                        },
                        {
                            text: "1809"
                        }
                    ],
                    [
                        {
                            text: "1903"
                        }
                    ],
                    [
                        {
                            text: "1909"
                        },
                        {
                            text: "2004"
                        },
                        {
                            text: "20H2"
                        },
                        {
                            text: "21H1"
                        }
                    ],
                    [
                        {
                            text: "21H2"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 8 | x32") {
        menu = 4
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Professional | x32"
                        }
                    ],
                    [
                        {
                            text: "Enterprice | x32"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 7 | x32") {
        menu = 4
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Ultimate"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows Vista | x32") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-vista-x32/windows-vista-x32.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-vista-x32/windows-vista-x32-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-vista-x32/windows-vista-x32-2.txt');
    }

    else if (msg.text == "Windows XP | x32") {
        menu = 4
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Professional"
                        }
                    ],
                    [
                        {
                            text: "Chip"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 98 | x32") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-98-x32/windows-98-x32.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-98-x32/windows-98-x32.txt');
    }


    // Windows -----> x32 and x64 -----> Windows 10 | x32 and Windows 10 -----> Menyusi

    else if (msg.text == "1507" || msg.text == "1507 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1507.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1507-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1507-2.txt');
    }

    else if (msg.text == "1511" || msg.text == "1511 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1511.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1511-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1511-2.txt');
    }

    else if (msg.text == "1607" || msg.text == "1607 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1607.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1607-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1607-2.txt');
    }

    else if (msg.text == "1703" || msg.text == "1703 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1703.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1703-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1703-2.txt');
    }

    else if (msg.text == "1709" || msg.text == "1709 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1709.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1709-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1709-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1709-3.txt');
    }

    else if (msg.text == "1803" || msg.text == "1803 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1803.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1803-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1803-2.txt');
    }

    else if (msg.text == "1809" || msg.text == "1809 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1809.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1809-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1809-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1809-3.txt');
    }

    else if (msg.text == "1903" || msg.text == "1903 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1903.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1903-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1903-2.txt');
    }

    else if (msg.text == "1909" || msg.text == "1909 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/1909.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1909-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/1909-2.txt');
    }

    else if (msg.text == "2004" || msg.text == "2004 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/2004.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/2004-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/2004-2.txt');
    }

    else if (msg.text == "20H2" || msg.text == "20H2 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/20H2.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/20H2-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/20H2-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/20H2-3.txt');
    }

    else if (msg.text == "21H1" || msg.text == "21H1 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/21H1.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/21H1-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/21H1-2.txt');
    }

    else if (msg.text == "21H2" || msg.text == "21H2 | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-10-x32/21H2.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/21H2-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-10-x32/21H2-2.txt');
    }


    // Windows -----> x32 -----> Windows 8 | x32 and Windows 7 | x32 -----> Menyusi

    else if (msg.text == "Professional | x32") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-8-x32/professional-x32.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x32/professional-x32-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x32/professional-x32-2.txt');
    }

    else if (msg.text == "Enterprice | x32") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-8-x32/enterprice-x32.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x32/enterprice-x32-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x32/enterprice-x32-2.txt');
    }

    else if (msg.text == "Ultimate") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-7-x32/ultimate.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-7-x32/ultimate-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-7-x32/ultimate-2.txt');
    }


    // Windows -----> x32 -----> Windows XP | x32 -----> Menyusi

    else if (msg.text == "Professional") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-xp-x32/professional.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-xp-x32/professional-1.txt');
    }

    else if (msg.text == "Chip") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-xp-x32/chip.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-xp-x32/chip-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-xp-x32/chip-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-xp-x32/chip-3.txt');
    }



    // Windows -----> x64 -----> Menyusi

    else if (msg.text == "Windows 11") {
        menu = 5
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Orginal obraz"
                        },
                    ],
                    [
                        {
                            text: "Windows 11 by SmokieBlahBlah"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 21H2 by Tatata"
                        },
                    ],
                    [
                        {
                            text: "Windows 11 21H2 by OneSmile"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 Compact&Full by flibustier"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 21H2 Pro Insider"
                        },
                        {
                            text: "Windows 11 21H2 rus gx"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 21H2 by Ovgorskiy"
                        },
                    ],
                    [
                        {
                            text: "Windows 11 21H2 Enterprice by Zosma"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 loT Enterprice by Xalex"
                        },
                    ],
                    [
                        {
                            text: "Windows 11 Pro 21H2 by OneSmile"
                        }
                    ],
                    [
                        {
                            text: "Windows 11 IP LTSC by Djannet"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 10") {
        menu = 5
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "1507 | x64"
                        },
                        {
                            text: "1511 | x64"
                        }
                    ],
                    [
                        {
                            text: "1607 | x64"
                        },
                        {
                            text: "1703 | x64"
                        },
                        {
                            text: "1709 | x64"
                        }
                    ],
                    [
                        {
                            text: "1803 | x64"
                        },
                        {
                            text: "1809 | x64"
                        }
                    ],
                    [
                        {
                            text: "1903 | x64"
                        }
                    ],
                    [
                        {
                            text: "1909 | x64"
                        },
                        {
                            text: "2004 | x64"
                        },
                    ],
                    [
                        {
                            text: "20H2 | x64"
                        },
                        {
                            text: "21H1 | x64"
                        }
                    ],
                    [
                        {
                            text: "21H2 | x64"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 8") {
        menu = 5
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Professional | x64"
                        }
                    ],
                    [
                        {
                            text: "Enterprice | x64"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 7") {
        menu = 5
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Ultimate | x64"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows Vista") {
        bot.sendMessage(msg.chat.id, `${msg.text}`);
        bot.sendPhoto(msg.chat.id, './document/windows/windows-vista-x64/windows-vista-x64.jpg');
        bot.sendDocument(msg.chat.id, './document/windows/windows-vista-x64/windows-vista-x64-1.txt');
        bot.sendDocument(msg.chat.id, './document/windows/windows-vista-x64/windows-vista-x64-2.txt');
    }


    // Windows -----> x64 -----> Windows 11 -----> Menyusi

    else if (msg.text == "Orginal obraz") {
        menu = 6
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Windows 11 Russian Pro 21H2"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    else if (msg.text == "Windows 11 Russian Pro 21H2") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-russian-pro.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-russian-pro-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-russian-pro-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-russian-pro-3.txt');
    }

    else if (msg.text == "Windows 11 by SmokieBlahBlah") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-blah.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-blah-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-blah-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-blah-3.txt');
    }

    else if (msg.text == "Windows 11 21H2 by Tatata") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-tatata.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-tatata-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-tatata-2.txt');
    }

    else if (msg.text == "Windows 11 21H2 by OneSmile") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-smile.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-smile-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-smile-2.txt');
    }

    else if (msg.text == "Windows 11 Compact&Full by flibustier") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-full.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-full-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-full-2.txt');
    }

    else if (msg.text == "Windows 11 Compact&Full by flibustier") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-full.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-full-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-full-2.txt');
    }

    else if (msg.text == "Windows 11 21H2 Pro Insider") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-insider.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-insider-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-insider-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-insider-3.txt');
    }

    else if (msg.text == "Windows 11 21H2 rus gx") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-gx.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-gx-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-gx-2.txt');
    }

    else if (msg.text == "Windows 11 21H2 by Ovgorskiy") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-ovgor.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-ovgor-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-ovgor-2.txt');
    }

    else if (msg.text == "Windows 11 21H2 Enterprice by Zosma") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-zosma.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-zosma-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-zosma-2.txt');
    }

    else if (msg.text == "Windows 11 loT Enterprice by Xalex") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-xalex.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-xalex-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-xalex-2.txt');
    }

    else if (msg.text == "Windows 11 Pro 21H2 by OneSmile") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-prosmile.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-prosmile-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-prosmile-2.txt');
    }

    else if (msg.text == "Windows 11 IP LTSC by Djannet") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-11/windows-11-by-prosmile.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-ltsc-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-11/windows-11-by-ltsc-2.txt');
    }


    // Windows -----> x64 -----> Windows 8 and Windows 7 -----> Menyusi

    else if (msg.text == "Professional | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-8-x64/professional-x64.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x64/professional-x64-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x64/professional-x64-2.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x64/professional-x64-3.txt');
    }

    else if (msg.text == "Enterprice | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-8-x64/enterprice-x64.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x64/enterprice-x64-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-8-x64/enterprice-x64-2.txt');
    }

    else if (msg.text == "Ultimate | x64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/windows/windows-7-x32/ultimate.jpg');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-7-x32/ultimate-1.txt');
        await bot.sendDocument(msg.chat.id, './document/windows/windows-7-x32/ultimate-2.txt');
    }



    // Linux -----> Menyusi

    else if (msg.text == "Ubuntu") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/ubuntu/ubuntu.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/ubuntu/ubuntu-1.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/ubuntu/ubuntu-2.txt');
    }

    else if (msg.text == "Kali") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/kali/kali.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/kali/kali-1.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/kali/kali-2.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/kali/kali-3.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/kali/kali-4.txt');
    }

    else if (msg.text == "PureOS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/PureOS/pureOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/PureOS/pureOS-1.txt');
    }

    else if (msg.text == "Debian") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Debian/debian.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Debian/debian-1.txt');
    }

    else if (msg.text == "CentOS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/CentOS/centOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/CentOS/centOS-1.txt');
    }

    else if (msg.text == "Puppy") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Puppy/puppy.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Puppy/puppy-1.txt');
    }

    else if (msg.text == "BlackLab") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/BlackLab/BlackLab.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/BlackLab/BlackLab-1.txt');
    }

    else if (msg.text == "BunsenLabs") {
        menu = 7
        await bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "x86"
                        },
                        {
                            text: "amd64"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        });
    }

    else if (msg.text == "x86") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/BunsenLabs/x86.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/BunsenLabs/x86-1.txt');
    }

    else if (msg.text == "amd64") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/BunsenLabs/amd64.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/BunsenLabs/amd64-1.txt');
    }

    else if (msg.text == "Arch Linux") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/ArchLinux/ArchLinux.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/ArchLinux/ArchLinux-1.txt');
    }

    else if (msg.text == "Slackware") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Slackware/Slackware.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Slackware/Slackware-1.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/Slackware/Slackware-2.txt');
    }

    else if (msg.text == "Solus") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Solus/Solus.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Solus/Solus-1.txt');
    }

    else if (msg.text == "Bodhi Linux") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/BodhiLinux/BodhiLinux.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/BodhiLinux/BodhiLinux-1.txt');
    }

    else if (msg.text == "Xubuntu") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Xubuntu/Xubuntu.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Xubuntu/Xubuntu-1.txt');
    }

    else if (msg.text == "Fedora") {
        menu = 8
        await bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "loT"
                        },
                        {
                            text: "Workstation"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        });
    }

    else if (msg.text == "loT") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Fedora/loT.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Fedora/loT-1.txt');
    }

    else if (msg.text == "Workstation") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/Fedora/Workstation.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/Fedora/Workstation-1.txt');
    }

    else if (msg.text == "Zorin Linux") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/ZorinLinux/ZorinLinux.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/ZorinLinux/ZorinLinux-1.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/ZorinLinux/ZorinLinux-2.txt');
    }

    else if (msg.text == "PCLinuxOS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/linux/PCLinuxOS/PCLinuxOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/linux/PCLinuxOS/PCLinuxOS-1.txt');
        await bot.sendDocument(msg.chat.id, './document/linux/PCLinuxOS/PCLinuxOS-2.txt');
    }



    // Android OS -----> Menyusi

    else if (msg.text == "Android 9.0") {
        menu = 9
        bot.sendMessage(msg.chat.id, `${msg.text}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "32 bit"
                        }
                    ],
                    [
                        {
                            text: "64 bit"
                        }
                    ],
                    [
                        {
                            text: "🔙 Orqaga"
                        },
                        {
                            text: "🔝 Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        });
    }

    else if (msg.text == "32 bit") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/android/android-9/32bit.jpg');
        await bot.sendDocument(msg.chat.id, './document/android/android-9/32bit-1.txt');
    }

    else if (msg.text == "64 bit") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/android/android-9/64bit.jpg');
        await bot.sendDocument(msg.chat.id, './document/android/android-9/64bit-1.txt');
    }

    else if (msg.text == "Prime OS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/android/PrimeOS/primeOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/android/PrimeOS/primeOS-1.txt');
    }

    else if (msg.text == "Bliss OS") {
        await bot.sendMessage(msg.chat.id, `${msg.text}`);
        await bot.sendPhoto(msg.chat.id, './document/android/BlissOS/blissOS.jpg');
        await bot.sendDocument(msg.chat.id, './document/android/BlissOS/blissOS-1.txt');
    }




    // Orqaga Tugmasi

    else if (msg.text == "🔙 Orqaga") {
        if (menu == 1) {
            menu -= 1
            bot.sendMessage(msg.chat.id, '<b>Assalomu alaykum botimizga xush kelibsiz 😀</b>', {
                parse_mode: "HTML",
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Operatsion Sistemalar(OS)"
                            }
                        ],
                        [
                            {
                                text: "Arxivlar paroli"
                            }
                        ],
                        [
                            {
                                text: "Arxivdan chiqarish qo'llanma"
                            },
                            {
                                text: "📊Statistika"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 2) {
            menu -= 1
            bot.sendMessage(msg.chat.id, 'Operatsion Sistemalardan birini tanlang☺️', {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Windows"
                            },
                            {
                                text: "Linux"
                            }
                        ],
                        [
                            {
                                text: "MacOS"
                            }
                        ],
                        [
                            {
                                text: "Android OS"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            });
        }

        else if (menu == 3) {
            menu -= 1
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "x32"
                            },
                            {
                                text: "x64"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 4) {
            menu -= 1
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Windows 10 | x32"
                            }
                        ],
                        [
                            {
                                text: "Windows 8 | x32"
                            },
                            {
                                text: "Windows 7 | x32"
                            }
                        ],
                        [
                            {
                                text: "Windows Vista | x32"
                            }
                        ],
                        [
                            {
                                text: "Windows XP | x32"
                            },
                            {
                                text: "Windows 98 | x32"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 5) {
            menu -= 2
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Windows 11"
                            },
                            {
                                text: "Windows 10"
                            },
                            {
                                text: "Windows 8"
                            }
                        ],
                        [
                            {
                                text: "Windows 7"
                            },
                            {
                                text: "Windows Vista"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 6) {
            menu -= 1
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Orginal obraz"
                            },
                        ],
                        [
                            {
                                text: "Windows 11 by SmokieBlahBlah"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 21H2 by Tatata"
                            },
                        ],
                        [
                            {
                                text: "Windows 11 21H2 by OneSmile"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 Compact&Full by flibustier"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 21H2 Pro Insider"
                            },
                            {
                                text: "Windows 11 21H2 rus gx"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 21H2 by Ovgorskiy"
                            },
                        ],
                        [
                            {
                                text: "Windows 11 21H2 Enterprice by Zosma"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 loT Enterprice by Xalex"
                            },
                        ],
                        [
                            {
                                text: "Windows 11 Pro 21H2 by OneSmile"
                            }
                        ],
                        [
                            {
                                text: "Windows 11 IP LTSC by Djannet"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 7 || menu == 8) {
            menu = 2
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Ubuntu"
                            },
                            {
                                text: "Kali"
                            }
                        ],
                        [
                            {
                                text: "PureOS"
                            },
                            {
                                text: "Debian"
                            }
                        ],
                        [
                            {
                                text: "CentOS"
                            },
                            {
                                text: "Puppy"
                            },
                            {
                                text: "BlackLab"
                            }
                        ],
                        [
                            {
                                text: "BunsenLabs"
                            }
                        ],
                        [
                            {
                                text: "Arch Linux"
                            },
                            {
                                text: "Slackware"
                            },
                            {
                                text: "Solus"
                            }
                        ],
                        [
                            {
                                text: "Bodhi Linux"
                            },
                            {
                                text: "Xubuntu"
                            }
                        ],
                        [
                            {
                                text: "Fedora"
                            }
                        ],
                        [
                            {
                                text: "Zorin Linux"
                            },
                            {
                                text: "PCLinuxOS"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }

        else if (menu == 9) {
            menu = 2
            bot.sendMessage(msg.chat.id, `${msg.text}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Android 9.0"
                            }
                        ],
                        [
                            {
                                text: "Prime OS"
                            }
                        ],
                        [
                            {
                                text: "Bliss OS"
                            }
                        ],
                        [
                            {
                                text: "🔙 Orqaga"
                            },
                            {
                                text: "🔝 Asosiy Menyu"
                            }
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
    }


    // Asosiy Menyu Tugmasi

    else if (msg.text == "🔝 Asosiy Menyu") {
        bot.sendMessage(msg.chat.id, '<b>Assalomu alaykum botimizga xush kelibsiz 😀</b>', {
            parse_mode: "HTML",
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Operatsion Sistemalar(OS)"
                        }
                    ],
                    [
                        {
                            text: "Arxivlar paroli"
                        }
                    ],
                    [
                        {
                            text: "Arxivdan chiqarish qo'llanma"
                        },
                        {
                            text: "📊Statistika"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    // Noma'lum buyruq!

    else if (msg.text != '/start') {
        bot.sendMessage(msg.chat.id, "❌ Noma'lum buyruq! \n\n <i>Siz to'g'ridan-to'g'ri bot chatiga xabar yubordingiz, yoki bot tuzilishi yaratuvchisi tomonidan o'zgartirilgan boʻlishi mumkin.</i> \n\n ℹ️ Xabarlarni to'g'ridan-to'g'ri botga yubormang yoki /start orqali bot menyusini yangilang", {
            parse_mode: 'HTML'
        })
    }
})

