function setCookie(
	cookieName: string,
	cookieValue: string,
	cookieExpire?: Date,
	cookiePath?: string,
	cookieDomain?: string,
	cookieSecure?: string
) {
	var cookieText = escape(cookieName) + "=" + escape(cookieValue);
	cookieText += cookieExpire ? "; EXPIRES=" + cookieExpire.toUTCString() : "";
	cookieText += cookiePath ? "; PATH=" + cookiePath : "";
	cookieText += cookieDomain ? "; DOMAIN=" + cookieDomain : "";
	cookieText += cookieSecure ? "; SECURE" : "";
	document.cookie = cookieText;
}

function getCookie(cookieName: string) {
	var cookieValue = null;
	if (document.cookie) {
		var array = document.cookie.split(escape(cookieName) + "=");
		if (array.length >= 2) {
			var arraySub = array[1].split(";");
			cookieValue = unescape(arraySub[0]);
		}
	}
	return cookieValue;
}

function deleteCookie(cookieName: string) {
	var temp = getCookie(cookieName);
	if (temp) {
		setCookie(cookieName, temp, new Date(1));
	}
}

export default {
	getCookie,
	setCookie,
	deleteCookie,
};
