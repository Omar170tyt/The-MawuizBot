import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}ððĻðð§ððð ððĄ ðĢðĪðĒðð§ð ðð ðŠðĢ ððĢððĒð`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`ððĖðĐðŠðĄðĪ
âĢ ${title}
âââââââââââââââââ
ððĨððĻðĪðððĪðĻ
âĢ ${episodes}
âââââââââââââââââ
ðð§ððĢðĻðĒððĐðððĪ ðĨðĪð§:
âĢ ${type}
âââââââââââââââââ
ðūðĄððĻððððððððĪĖðĢ
âĢ ${rated}
âââââââââââââââââ
ððŠðĢðĐððð
âĢ ${score}
âââââââââââââââââ
ððððĒðð§ðĪðĻ
âĢ ${members}
âââââââââââââââââ
ðððĢðĪðĨðĻððĻ
âĢ ${synopsis}
âââââââââââââââââ
ððĢðĄððð
âĢ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `ð *ððĢððĪð§ðĒðð§ðĐð ðĻðĪðð§ð ðĄððĻ ðĢðĪðŦððððððĻ ðŪ ð§ðððŠðð§ðð ðĐððĢðð§ ðĄð ðŠĖðĄðĐððĒð ðŦðð§ðĻððĪĖðĢ.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['ðððĢðŠ ð―ðŠðĻðĶðŠððððĻ ð', '#buscarmenu'],
['ðððĢðŠ ðūðĪðĒðĨðĄððĐðĪ âĻ', '.allmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢ âïļ', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 4 
handler.money = 20
export default handler
