const express = require("express");
const app = express();

app.listen(3000, () => {
console.log("Project is running!");
})

app.get("/", (req, res) => {
res.send("hi");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
if(message.content === "p^commande") {
message.channel.send("https://Commande-bot-20.bost.repl.co")
}
})
client.on("message", message => {
if(message.content === "p^help bot") {
message.channel.send("je n'ai pas de fonctionalité pour cela demander a piro de faire un fonctionnalité")
}
})
client.on("message", message => {
if(message.content === "p^gif") {
message.channel.send("https://images.wondershare.com/filmora/article-images/what-is-gif.gif            ")
}
})
client.on("message", message => {
if(message.content === "p^add") {
message.channel.send("https://discord.com/api/oauth2/authorize?client_id=984506372089598012&permissions=8&scope=bot")
}
})
client.on("message", message => {
if(message.content === "p^play") {
message.channel.send("il n'y a pas encore de fonctionnalité")
}
})
client.on("message", message => {
if(message.content === "bonjour") {
message.channel.send("salut mec")
}
})
client.on("message", message => {
if(message.content === "p^kill conconcon") {
message.channel.send("vous avez tuer conconcon")
}
})
client.on("message", message => {
if(message.content === "p^kill <user>") {
message.channel.send("vous avez tuer piro")

}
})
client.on("message", message => {
if(message.content === "p^contre uno") {
message.channel.send("https://static.wikia.nocookie.net/jtohs-joke-towers/images/5/52/No_U.gif/revision/latest/top-crop/width/360/height/450?cb=20220105235615")
}
})
client.on("message", message => {
if(message.content === "") {
message.channel.send("allez prendre vos rôles dans le salon #👍self-animals")
}
})
client.on("message", message => {
if(message.content === "p^creator bot") { 
message.channel.send("créé par Ry-~~~0~~~-0#9026")
}
})
