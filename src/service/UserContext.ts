

export  class UserContext{
    
     isAuthenticatedPrivate : boolean=false;

     isAuthenticated():boolean
    {
     
        return this.isAuthenticatedPrivate;
    } 
    
     logOut()
    {
        alert("Logout");
        this.isAuthenticatedPrivate=false;
    }

     LogIn()
    {
        alert("LogIn");
        this.isAuthenticatedPrivate=true;
    }

    

}