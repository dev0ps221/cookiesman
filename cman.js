class CookiesMan{
	static _cookies = [] 
	cookies = []
	Cookie = {}
	static _setCooks(cooks){
		this._cookies = cooks
	}
	_getCooks(){
		return this._cookies
	}
	static setCook(name,val){
		document.cookie = `${name}=${val}`
	}
	static delCook(name,val=''){
		document.cookie= `${name}=${val}; expires = Thu, 01 Jan 1970 00:00:00 GMT`
	}
	setCookie(name,val){
		CoookiesMan.setCook(name,val)
	}
	delCookie(name){
		CookiesMan.delCook(name)
	}
	retrieveCookies(){
		return this.objectifyCookies(this.getCookiesArray())
	}
	getCookiesArray(){
		this.cookies = document.cookie.split(";").map(cookie=>{return cookie.split("=")})
		CookiesMan._setCooks(this.cookies)
		return this.cookies
	}
	objectifyCookies(arrs=[]){
		arrs.forEach(
			cookie=>{
				this.Cookie[cookie[0]] = cookie[1]
			}
		)
		return this.Cookie
	}
	cookiesNames(){
		return Object.keys(this.Cookie)
	}

	cooks(){
		return this.Cookie
	}


	constructor(cb){
		let cooks = this.retrieveCookies()
		if(cb)cb(this.cooks())
	}


}



