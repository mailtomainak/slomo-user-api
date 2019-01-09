const amqplib = require('amqplib');
const userRegistration = require('./controller');

const saveMessages = msg =>{
    const userData = JSON.parse(msg.content.toString());
    console.log(userData);
    userRegistration.saveUserName(userData)
}
const subscribe = () => {
    amqplib.connect("amqp://imyghfaq:ScuxbYWLFwIZNmEaMrakuGNe6nJTTk4s@shark.rmq.cloudamqp.com/imyghfaq")
        .then(con => {
            channel = con.createChannel()
                .then(channel => {
                    channel.checkExchange('slomo.new.registrations')
                        .then(ok => {
                            channel.assertQueue("",{exclusive: true})
                            .then(ok=>{
                               const queue = ok.queue;
                               channel.bindQueue(queue,'slomo.new.registrations',"")
                               .then(channel.consume(queue,saveMessages,{noAck: true}))
                            })                           
                        })
                        .catch(console.warn)
                        
                })



        })

}

module.exports=subscribe;

