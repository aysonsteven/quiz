import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

interface form{
    userid:string,
    password:string,
    email:string
}
@Component( {
    selector: 'registration-page',
    templateUrl: 'registration.component.html'
})
export class RegistrationPage {
    registration_form:form = <form>{};
    server:string = 'http://work.org/server/index.php';
    constructor( private http: Http ){}

    get requestOptions() : RequestOptions {
            let headers  = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let options  = new RequestOptions({ headers: headers });   
            return options;
        }

  onClickRegister(){
// //   if ( this.validateForm() == false ) return;
// //   this.errorChk = { progress: 'Registration on progress: please wait..' };
//   this.http.get( this.server + '?mc=user.register&id=' + this.userData.id + '&email=' + this.userData.email+ '&password='+ this.userData.password ).subscribe( re=>{
//     console.log('ok : ' + re )
//     // this.onClickReset();
//     // this.errorChk = { success: 'Registration success.' };
//   }, e=>{
//     console.log('error' + e)
//   })

    this.user_register( this.registration_form, res=>{
        console.log('successfull registered')
    }, err=> alert('error ' + err ))
}




    /**
     * Returns the body of POST method.
     * 
     * 
     * @param params must be an object.
     */


    buildQuery( params : any ) {
        return this.http_build_query( params );
    }

    query( data : any, successCallback : any, errorCallback  : any ) {
        let body = this.buildQuery( data );
        console.log("debug url: ", this.server  + '?' + body );
        this.http.post( this.server, body, this.requestOptions )
            .subscribe( data => {
                try {
                    let re = JSON.parse( data['_body'] );
                    if ( re['code'] ) return errorCallback( re['message'] );
                    //console.log('query::sucess: ', data);
                    successCallback( re['data'] );
                }
                catch( e ) {
                    //console.log(data);
                    errorCallback(data['_body']);
                }
            });
    }



    user_search( options : any, successCallback: (re:any) => void, errorCallback: (error:string) => void ) {
        let data = {};
        data['mc'] = 'user.search';
        data['options'] = options;
        this.query( data, successCallback, errorCallback );
    }

    user_get( id : any, successCallback: (re:any) => void, errorCallback: (error:string) => void ) {
        let data = { mc: 'user.get', id: id};
        this.query( data, successCallback, errorCallback );
    }


    
    /**
     * @attention it saves user's session id in storage.
     *      the key is 'xbase-session-id'.
     * 
     */
    user_register( data : any, successCallback: (session_id:string) => void, errorCallback: (error:string) => void ) {
        data['mc'] = 'user.register';
        this.query( data, (session_id : any)  => {
        //     localStorage.setItem( XBASE_SESSION_ID, session_id );
        //   console.log('session Id',  localStorage.getItem( XBASE_SESSION_ID ));
            successCallback( session_id );
        }, errorCallback );
    }
    /**
     * Login and save login session id
     */
    user_login( data : any, successCallback: (session_id:string) => void, errorCallback: (error:string) => void ) {
        data['mc'] = 'user.login';
        this.query( data, (session_id : any )=> {
            // localStorage.setItem( XBASE_SESSION_ID, session_id );
            successCallback( session_id );
        }, errorCallback );
    }


    /**
     * Check if the user logged in xbase
     */
    logged( yesCallback: ( session_id: string ) => void, noCallback?: () => void ) {
        // let session_id = localStorage.getItem( XBASE_SESSION_ID );
        // if ( session_id ) yesCallback( session_id );
        // else noCallback();
    }


    

    http_build_query (formdata : any, numericPrefix='', argSeparator='') { 
            var urlencode = this.urlencode;
            var value : any
            var key : any
            var tmp : any = []
            var _httpBuildQueryHelper = function (key : any, val : any, argSeparator : any) {
                var k : any
                var tmp : any = []
                if (val === true) {
                val = '1'
                } else if (val === false) {
                val = '0'
                }
                if (val !== null) {
                if (typeof val === 'object') {
                    for (k in val) {
                    if (val[k] !== null) {
                        tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator))
                    }
                    }
                    return tmp.join(argSeparator)
                } else if (typeof val !== 'function') {
                    return urlencode(key) + '=' + urlencode(val)
                } else {
                    throw new Error('There was an error processing for http_build_query().')
                }
                } else {
                return ''
                }
            }

            if (!argSeparator) {
                argSeparator = '&'
            }
            for (key in formdata) {
                value = formdata[key]
                if (numericPrefix && !isNaN(key)) {
                key = String(numericPrefix) + key
                }
                var query = _httpBuildQueryHelper(key, value, argSeparator)
                if (query !== '') {
                tmp.push(query)
                }
            }

            return tmp.join(argSeparator)
        }


        urlencode (str : any) {
            str = (str + '')
            return encodeURIComponent(str)
                .replace(/!/g, '%21')
                .replace(/'/g, '%27')
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29')
                .replace(/\*/g, '%2A')
                .replace(/%20/g, '+')
        }







}