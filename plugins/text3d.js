let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${response}`
  conn.sendFile(m.chat, res, 'text3d.jpg', `Nih kak`, m, false)
}
handler.help = ['text3d'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(text3d)$/i

module.exports = handler
