import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `ππͺπ ππ¨π©πΜ ππͺπ¨πππ£ππ€?π€\nππ¨ππ§πππ π‘π€ π¦πͺπ π¦πͺπππ§π ππͺπ¨πππ§\nππππ’π₯π‘π€\n*${usedPrefix + command} loli*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_\nβββββββββββββββββ`
}).join('\n\n')

/* let info = `π π°ππππππππ πππππ πππ π΅ππππππππ π ππππππππ πππππ ππ ππππππ πππππππ..
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,) 
*/
try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.exp = 10
handler.limit = 1
export default handler
