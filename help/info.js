// Información del bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const info = (Fg, uptime, process, wa_version, mcc, mnc, os_version, device_manufacturer, device_model) => { 
return `  ≡ *INFORMACION*
 
┌───⊷ *BOT* ⊶
├╼ Nombre : *${Fg.user.name}*
├╼ Version Bot : 3.8.3
├╼ Wha Conexion : *${Fg.browserDescription[0]}*
├╼ Navegador : *${Fg.browserDescription[1]}*
├╼ Versi Navegador: *${Fg.browserDescription[2]}*
├╼ Velocidad : ${process.uptime()}
├╼ Tiempo Ejecucion : *${kyun(uptime)}*
├╼ Grupo del Bot : https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK
└─────────────
┌───⊷ *DISPOSITIVO* ⊶
├╼ Nombre : *${Fg.user.name}*
├╼ Version Bot : 3.0
├╼ Wha Conexion : *${Fg.browserDescription[0]}*
├╼ Navegador : *${Fg.browserDescription[1]}*
├╼ Versi Navegador: *${Fg.browserDescription[2]}*
├╼ Velocidad : ${process.uptime()}
├╼ Tiempo Ejecucion : *${kyun(uptime)}*
├╼ Grupo del Bot : https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK
├╼ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├╼ MCC : ${mcc}
├╼ MNC : ${mnc}
├╼ Version Wa : ${Fg.user.phone.wa_version}
└──────────────


▢ Github :
https://github.com/FG98F/fgbotv3

▢ DEV :
https://github.com/FG98F
`
}
exports.info = info