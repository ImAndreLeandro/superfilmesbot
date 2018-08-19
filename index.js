const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.prefix = config.prefix;
client.login(config.token);

client.on("ready", () => {
console.log("Bot iniciado! \n Dê sf!ajuda para ter nossa ajuda. :)");
client.user.setActivity("Dê sf!ajuda para ser ajudado por mim", {type: ""});


});
//ajuda//
client.on("message", message => {
    if(message.content.startsWith("sf!ajuda")){
      message.channel.send("Seja Bem Vindo ao Super Filmes!"
      + "\n\nEspero que curta nossos filmes e o nosso Servidor."
      +"\n\nINFO :arrow_down: :arrow_down:"
      + "\n\nNOSSO SITE: http://www.superfilmesonlinehd5.tk/"
       +"\n\n- Nós temos filmes novos no nosso site e no discord todos os dias."
       +"\n\n- Suporte ótimo."
       +"\n\nEspero que goste e se Divirta!"
       + "\n\nDiscord Developer: @ʂʀ†3y(Kaka)#0039 "
        +"\n\nBOT Developer: @whoami#4097");
    }

});
//super filmes//
 client.on("message", message => {
   if(message.content.startsWith("super filmes")){
    message.channel.send("`Simplesmente o melhor site de filmes do nosso querido Discord`");
   }

 });
 //recomendados//
 client.on("message", message => {
   if(message.content.startsWith("sf!recomendado")){
    message.channel.send("Filmes recomendados pela minha experiência CINEMATOGRÁFICA:"
    +"\n\n `DeadPool 2 e Jogador N1`"
    + "\n\nAssisti esses dois filmes e"
     +"vi algo especial mas você pode sugerir filmes");
   }
   });


 //ping command//
 client.on("message", message => {

   if(message.content.startsWith("sf!ping")){
    message.channel.send(":ping_pong: Pong! \n\n" +Math.round(client.ping)+"`ms`");
   }

 });

//list of commands//
 client.on("message", message => {
   if(message.content.startsWith("sf!comandos")){
    message.channel.send("Nossos comandos são: \n\n` sf!ping - mostra seu ping \n\n sf!recomendado - filmes recomendados \n\n sf!ajuda - te ajuda` \n\n ***É só isso,*** *curtam os recomendados ein.*");
   }

 });



 client.on("message", message => {

   if(message.channel.type === 'dm'){
     message.author.send("Não adianta! \nNão vou te responder nada\n***Só digo...***\n\nEntre no nosso site e assista `DeadPool 2`");
   }



 });
