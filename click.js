function oauth2_login() {
        auth_url: 'https://accounts.google.com/o/oauth2/auth', // required
        response_type: 'code',    // required - "code"/"token"
        token_url: 'https://accounts.google.com/o/oauth2/token',// required if response_type = 'code'
        logout_url: 'https://accounts.google.com/logout',         // recommended if available
        client_id: '1030024881954-nto730v1nmhjdouscr90ipnj2dghl4bt.apps.googleusercontent.com',      // required
        client_secret: 'iedaZ21p_3vExrcUEGSHX-74',      // required if response_type = 'code'
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',   // required - some dummy url
        other_params: {scope:'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube'}  
    }, function(token, response){
        // do something with token or response
        $("#logs").append("<p class='success'><b>access_token: </b>"+token+"</p>");
        $("#logs").append("<p class='success'><b>response: </b>"+JSON.stringify(response)+"</p>");
    }, function(error, response){
        // do something with error object
        $("#logs").append("<p class='error'><b>error: </b>"+JSON.stringify(error)+"</p>");
        $("#logs").append("<p class='error'><b>response: </b>"+JSON.stringify(response)+"</p>");
    }); 
}
