import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝗤𝘂𝗲 𝗯𝘂𝘀𝗰𝗮𝗿❓️\n 𝗨𝘀𝗲𝗿 𝙙𝙚 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼\n*${usedPrefix + command} Loli*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝑬́𝒙𝒊𝒕𝒐* ⊱💚⊱╮`.trim(), m)
  
  await delay(5000) 
  conn.sendHydrated(m.chat, `✨ 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
handler.money = 100
handler.register = true
handler.level = 1
export default handler
const delay = time => new Promise(res => setTimeout(res, time))