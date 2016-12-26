import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component( {
    selector: 'registration-page',
    templateUrl: 'registration.component.html'
})
export class RegistrationPage {
    server:string = 'https://quiz-server.byethost3.com/';
    headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'})
    options = new RequestOptions({headers : this.headers});
    constructor( private http: Http ){}

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
}


  http_build_query (formdata, numericPrefix='', argSeparator='') {
    var urlencode = this.urlencode;
    var value
    var key
    var tmp = []
    var _httpBuildQueryHelper = function (key, val, argSeparator) {
      var k
      var tmp = []
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


  urlencode (str) {
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