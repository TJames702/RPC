const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Moon Bot",
        state: "Bot onwer: Professor",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "RPC",
        buttons : [{label : "Subscribe" , url : "https://youtube.com/channel/UCbF8elQvv8T5a0QDyoP4rDA"},{label : "Discord" , url : "https://discord.gg/eWEQZJ9X"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '782382708193493024'
})
