export default class UserContext{
    
    private _isAuthenticated : boolean=false;

    public isAuthenticated():boolean
    {
        return this._isAuthenticated;
    } 
    
    public logOut()
    {
        this._isAuthenticated=false;
    }

    public LogIn()
    {
        this._isAuthenticated=true;
    }

    

}