var oficloud = require('./oficloud');



oficloud.login('myuser@myemail.com','MYPASSWORD',function(res){
    console.log("login res: "+res.res);
    
    if(res.e==-1)
        return;
    

	function onmsg(msg)
	{
		//Process received messages here
	}

	oficloud.open_channel('p',onmsg,function(err){

        if(typeof err !="undefined")
        {
            console.log("open channel error: "+err);
            return;
        }

        /*********UNCOMMENT TO WRITE A FIXED MESSAGE TO THE CHANNEL */
        /*
        var temperature=33.0;
        var humidity=0.8;
        var s="{\"type\":\"test\",\"temperature\":"+temperature.toFixed(1)+",\"humidity\":"+humidity.toFixed(1)+"}";
        console.log(s);
        oficloud.send_post('MYCHANNEL',s,function(){
            //DO YOUR STUFF HERE ONCE THE MESSAGE HAS BEEN POST
        });*/

        //Do your stuff here once you are logged in and joined a channel
        //(...)

	})
});

