//Creditos https://github.com/BrunoSobrino
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
if (!args[0]) throw `ππͺπ ππͺπ¨ππ? ππ¨ππ§ πͺπ£ ππ£π‘πππ ππ π­π£π­π­\nππππ’π₯π‘π€\n*${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await delay(6000)
await conn.reply(m.chat, 'β€ ππππππ πππ ππΌπππ πΌ πππ ππ πππππ ππ πππΏππ', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply(`πππ, ${lenguajeGB['smsAvisoFG']()}ππ ππππΎππππ, πππ ππ ππππΌπΎπ πΏπ ππππ, ππππππΌ πΌ πππππππΌπ`)
}}
handler.command = /^(xnxxdl)$/i
handler.level = 8
handler.money = 1400
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
