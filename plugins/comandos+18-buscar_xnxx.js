//Creditos https://github.com/BrunoSobrino
import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsAvisoAG']()}๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐๐ +18 ๐๐๐๐ผ๐ ๐ฟ๐๐๐ผ๐พ๐๐๐๐ผ๐ฟ๐๐ ๐๐๐ #๐ค๐ฃ ๐ข๐ค๐๐ค๐๐ค๐ง๐ฃ๐ฎ ๐๐ผ๐๐ผ ๐ผ๐พ๐๐๐๐ผ๐\n\n+18 ๐พ๐๐๐๐ผ๐๐ฟ๐ ๐ผ๐๐ ๐ฟ๐๐๐ผ๐ฝ๐๐๐ฟ ๐๐๐ #๐ค๐ฃ ๐ข๐ค๐๐ค๐๐ค๐ง๐ฃ๐ฎ ๐๐ ๐๐๐ผ๐ฝ๐๐*`
await delay(5000)
if (!text) throw `*๐๐ช๐ ๐๐ช๐จ๐๐? \n๐๐จ๐๐ง ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐๐ ๐๐จ๐ฉ๐ ๐ข๐๐ฃ๐๐ง๐\n๐๐๐๐ข๐ฅ๐ก๐ค\n${usedPrefix + command} Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `๐ช๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐: ${args.join(" ")}`
const sections = [{
title: `โกโโขโคโโฃโโโโข`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '๐ฌ๐๐๐๐ ๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐',
title: " โค ๐ช๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐",
buttonText: "โค ๐น๐๐๐๐๐๐๐๐๐",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: 'โง ๐บ๐๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐ท๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐ฬ๐๐๐ โง', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*๐ผ๐๐, ๐๐ ๐๐ ๐๐๐๐ฬ ๐๐ ๐๐๐๐๐๐๐๐คก, ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
handler.level = 9
handler.limit = 6
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

