
function CSCO_Format(fmt) {
var i;
	for(i=1; i < arguments.length; i++) {
		var r = new RegExp("\\%("+i+"\\$)?.", "i");
		fmt=fmt.replace(r, arguments[i])
	}
	return fmt;
}

    document.cookie="webvpnlogin=1; path=/; secure";

function disableButton(){
        try{
                obj=document.getElementById("submit_button");
                if(obj){
                        obj.disabled=true;
                }
        }
        catch (e) {

        }

}

function validate_username(username)
{
    var reg = /[&'"<>]/;
    var ret = false;

    if (username && username.value && !username.value.match(reg)) {
        ret = true;
    }
    return ret;
}

