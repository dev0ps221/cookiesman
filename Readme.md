# CookiesMan
## perform easily actions on cookies from the front side..


### example



*Include the script | Inclure le script*
>...
><script src='/pathtocookiesman'></script>
>...



*Set a value to a cookie | Assigner une valeur a un cookie*
>...
>
>CookiesMan.setCookie("unCookie","saValeur")
>
>
>...



*Delete a cookie | Supprimer un cookie*
>...
>
>CookiesMan.delCookie("unCookie")
>
>
>...



*Get the value of a cookie | Recupèrer la valeur d'un cookie*
>...
>
>let cman = new CookiesMan()
>
>let value = cman.cooks()['cookiename']
>
>console.log(value) //log the value ;)
>
>
>....



*Instantiate and get cookies names|Instancier l'objet et obtenir le nom des cookies*
>...
><script\>
>
>
>
>       const cman = new CookiesMan()
>
>       cman.cookiesNames()//prints the name of the current set cookies
>
>
></script>
>
>...

