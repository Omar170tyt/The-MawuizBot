//este antiprivado 2 todavΓ­a estΓ‘ el desarrollo.

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0 
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('bots') || m.text.includes('deletebot') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antipv && !isOwner && !isROwner) {
await m.reply(`ππ€π‘π *@${m.sender.split`@`[0]}*, ππ¨π©π π₯π§π€ππππππ€ πͺπ¨ππ§ ππ‘ ππ€π© ππ‘ π₯π§ππ«πππ€\n π¨π€π‘π€ π¨π π¦πͺπππ§π πππππ§π©π πͺπ£ ππ€π©\n π’ππ£ππ ππ‘ ππ€π’ππ£ππ€ .serbot\nππ πππΌπ πππ πΎπππΌππΏπ ππ ππ\nπππ§π πͺπ¨ππ§ ππ‘ ππ€π© πͺπ£ππ§π©π ππ‘ ππ§πͺπ₯π€ π€ππππππ‘ πππ‘ ππ€π©\n${nn}`, false, { mentions: [m.sender] })
handler.group = true
return !1
}}
