
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

var main = function(){

	$('#entrada').on('keyup',function(){
		var texto = $(this).val();
		var algoritmo = $('#algoritmo').val();
		var transformada = convert_jshashes(texto,algoritmo);
		$('textarea[name="jshashes"]').val(transformada);
	});

	$('#algoritmo').on('change',function(){
		var texto = $('#entrada').val();
		var algoritmo = $('#algoritmo').val();
		var transformada = convert_jshashes(texto,algoritmo);
		$('textarea[name="jshashes"]').val(transformada);
	});

};

$(document).ready(main)