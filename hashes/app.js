
function convert_jshashes(texto,algoritmo){
	var hasher=null;
	var time = new Date().getTime();
	switch(algoritmo){
		case "MD5":
			hasher = new Hashes.MD5;
		break;
		case "SHA1":
			hasher = new Hashes.SHA1;
		break;
		case "SHA256":
			hasher = new Hashes.SHA256;
		break;
		case "SHA512":
			hasher = new Hashes.SHA512;
		break;
		case "RMD160":
			hasher = new Hashes.RMD160;
		break;
		default:
			hasher = new Hashes.MD5;
		break;
	}
	return algoritmo+": "+hasher.hex(texto)+" ( "+Math.round( new Date().getTime() - time )+" ms )";
}

function conver_cryptojs(text,algoritmo){
	var hash=null;
	var time = new Date().getTime();
	switch(algoritmo){
		case "MD5":
			hash = CryptoJS.MD5(text);
		break;
		case "SHA1":
			hash = CryptoJS.SHA1(text);
		break;
		case "SHA256":
			hash = CryptoJS.SHA256(text);
		break;
		case "SHA512":
			hash = CryptoJS.SHA512(text);
		break;
		case "RMD160":
			hash = CryptoJS.RIPEMD160(text);
		break;
		default:
			hash =  CryptoJS.MD5(text);
		break;
	}
	return algoritmo+": "+hash+" ( "+Math.round( new Date().getTime() - time )+" ms )";
}

var main = function(){

	$('#entrada').on('keyup',function(){
		var texto = $(this).val();
		var algoritmo = $('#algoritmo').val();
		var transformada1 = convert_jshashes(texto,algoritmo);
		var transformada2 = conver_cryptojs(texto,algoritmo);
		$('textarea[name="jshashes"]').val(transformada1);
		$('textarea[name="crypto-js"]').val(transformada2);
	});

	$('#algoritmo').on('change',function(){
		var texto = $('#entrada').val();
		var algoritmo = $('#algoritmo').val();
		var transformada1 = convert_jshashes(texto,algoritmo);
		var transformada2 = conver_cryptojs(texto,algoritmo);
		$('textarea[name="jshashes"]').val(transformada1);
		$('textarea[name="crypto-js"]').val(transformada2);
	});

};

$(document).ready(main)