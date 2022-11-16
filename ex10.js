let token=window.localStorage.getItem('blast');
if(token!==null){
    console.log("token avan : "+token);
    token=token.split(';').pop();
    console.log("token apre : "+token);
}else{
    console.log('pa gen pyes token ki anrejistre nan navigate a ak kle sa');
}
