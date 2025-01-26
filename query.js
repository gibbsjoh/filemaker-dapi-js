// set up all the values for the query/server
        var myServer = 'https://fmserver.smthng.pw/fmi/data';
        var myDatabase = 'HomeList';
        var loginName = 'admin';
        var thePasswordEnc = 'AESEncodedPassword';
        var queryField = 'ChannelName';
        var queryValue = '*';
        var theLayout = 'TVCHANNELS';

        // decrypt the passsword
        var thePassword = decryptCreds(thePasswordEnc);
        //console.log(thePassword);
        // build array for connecting to the FM server
        let options = {
            'apiUrl': myServer,
            'databaseName': myDatabase,
            'login': loginName,
            'password': thePassword
        }

        //log into the server
        let api = new DataApi(options);
        // log in
        let theLogin = api.login();
        //console.log(theLogin);
        //build the query
        let query = [{'fields' : [ {'fieldname' : queryField, 'fieldvalue' : queryValue}],'options':{'omit': false}}]
        // run the query
        let findResult = api.findRecords(theLayout, query);
        // parse out the result as needed
        // in this case we're just getting a single field (ChannelName) from the first returned record
        exampleResult = findResult[0].fieldData['ChannelName'];
        document.getElementById("result").innerHTML = exampleResult;