function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = document.getElementById("host").value;   
    port = document.getElementById("port").value;  
    userId  = document.getElementById("username").value;  
    passwordId = document.getElementById("password").value;  

    document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " +port+"</span><br>";
    document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID +" </span><br>";

    // client = new Paho.MQTT.Client(host,Number(port),clientID);
    client = new Paho.MQTT.Client("wss://mqtt-dashboard.com:8884/mqtt" ,clientID);
    // client = new Paho.MQTT.Client("ws://broker.emqx.io:8083/mqtt" ,clientID);
    // console.log(client);


    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({
        onSuccess: onConnect
//        userName: userId,
 //       passwordId: passwordId
        // useSSL: true
    });


}


function onConnect(){
    // topic =  document.getElementById("topic_s").value;
    topic =  "testtopic/userpw";
    

    document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";

    // console.log(topic)
    client.subscribe(topic);

}



function onConnectionLost(responseObject){
    document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("messages").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
}

function onMessageArrived(message){
    // console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("messages").innerHTML += "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";
}

function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";




}

function publishMessage(){
username = document.getElementById("username").value;
password = document.getElementById("password").value;
    msg = username.concat(password);
// topic = document.getElementById("topic_p").value;
    topic =  "testtopic/userpw";

Message = new Paho.MQTT.Message(msg);
Message.destinationName = topic;

client.send(Message);
document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";


}
