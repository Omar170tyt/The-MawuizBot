let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
await m.reply(`â°â±ð°â± *ð°ðððððððððð* â±ð°â±â®`)
let instalar = `*ââ¢âÍÍ¡ââ¬â¯àº· âºà®Û©ð¥Û©à®â â¯àº·â­âÍÍ¡ââ§âº*

ð¥ ðð¼ ðððð¿ð ððððð¼ðð¼ð ð¼ ððð-ðð¤ð¡ðð½ð¤ð©-ðð¿ â

*ððð¿ðð ð¿ð ððððð¼ðð¼ð¾ððð*
*https://youtu.be/gh5NajZOTA8*

â¨ *Si necesitas ayuda entra al grupo del bot*
ð *${global.nna}*

ð *Si tienes dudas o necesitas ayuda en el proceso de la instalaciÃ³n puede escribir me a este nÃºmero (No es Bot el nÃºmero)*

ð² *Wa.me/56964787183*

â *_Solo para temas de instalaciÃ³n_*

ââââââââ¢â¢â¢âââââââ`

conn.sendButton(m.chat, instalar, `â¨ ðððððððððð ðð¼ðð¼ ðð¼ ððððð¼ðð¼ð¾ððð â¨

â _1 GB de almacenamiento_
â _AplicaciÃ³n Termux (actualizada)_
â _Un WhatsApp recomiendo el WhatsApp normal_
â _Un nÃºmero virtual (si es ofc mejor)_
â _2 dispositivos o una PC para escanear_

ââââââââ¢â¢â¢âââââââ

â¨ ðððððð½ > ððððððððððð
*_Visita mÃ­ repositorio ð¸ para mÃ¡s informaciÃ³n, si te agrada el Bot apoya me con una â­ï¸ Â¡Gracias!_*

${md}

ââââââââ¢â¢â¢âââââââ

ð *ðð¼ðð ðð¼ðð¼ ððððð¼ðð¼ð ðð ð½ðð ðð ðððððð*
ð *ððð¾ððð: 1 ðððððð½*

ð¸ termux-setup-storage
ð¸ apt update
ð¸ pkg upgrade
ð¸ pkg install git -y
ð¸ pkg install nodejs -y
ð¸ pkg install ffmpeg -y
ð¸ pkg install imagemagick -y
ð¸ git clone https://github.com/elrebelde21/The-LoliBot-MD-V2
ð¸ cd The-LoliBot-MD-V2 
ð¸ npm install
ð¸ ls
ð¸ npm start

ð *ððð¾ððð: 2 ð¼ðð¾ðððð*
*https://youtu.be/i1xjB4bmYCc*

ð¸ termux-setup-storage
ð¸ apt update 
ð¸ pkg upgrade 
ð¸ pkg install git -y
ð¸ pkg install nodejs -y
ð¸ pkg install ffmpeg -y
ð¸ pkg install imagemagick -y
ð¸ pkg install yarn
ð¸ cd storage/downloads/Lolibot
ð¸ ls
ð¸ npm start

ââââââââ¢â¢â¢âââââââ

ð ðð¡ð¦ð§ðððð¥ ðð¡ ðð¢ð«ð ðð¡ð

*ððð-ðð¤ð¡ðð½ð¤ð©-ðð¿ : ð½ð¤ð­ððð£ð*
*_https://youtu.be/wWyBHtKzx9Q_*

_Pagina Oficial_ 
_https://boxmineworld.com_

_Panel_
_https://panel.boxmineworld.com_

ââââââââ¢â¢â¢âââââââ

ð ðð¡ð¦ð§ðððð¥ ðð¡ ðððððð 

*ððð-ðð¤ð¡ðð½ð¤ð©-ðð¿ : ðððððð*
https://youtu.be/SMjCcfuyWQE

_Pagina Oficial_ 
https://replit.com/

ââââââââ¢â¢â¢âââââââ


*ââ¢âÍÍ¡ââ¬â¯àº· âºà®Û©ð¥Û©à®â â¯àº·â­âÍÍ¡ââ§âº*\n\nð¥ INFO EXTRA ð¥\nâ¤ Se sugiere leer el archivo README.md \nâ¤ Bot compartible con WhatsApp multi device \nâ¤ Para habilitar el /aÃ±adir y el /sacar usa /enable restrict \n- Puede ocasionar que el numero se vaya a soporte \nâ¤ Cualquier cosa hablame solo por tema del botð°ð¤\nSaludos ð°ð¤\n\n${wm}`, picture, [
['ð¾ðªðð£ð©ðð¨ ððððððð¡ðð¨  â', '.cuentasgb']], fkontak, m)}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
