/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝙐𝙉𝘽𝘼𝙉 😌\n𝙉𝙊𝙒 𝙄 𝘼𝙈 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀.`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`𝙀𝙨𝙩𝙚 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 🤑\n 𝙣𝙤 𝙚𝙨𝙩𝙖𝙧𝙚 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 𝙝𝙖𝙨𝙩𝙖 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙙𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙙𝙖.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
export default handler