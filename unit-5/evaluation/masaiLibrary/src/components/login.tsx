const useAuth = () => {
    const [user,setUser] = useState<User | null>(null);
    const login = async (email:string,password:string) =>{
        setUser(user);
    };
    const logout = () => {
        firebase.auth().signOut();
        setUser(null);
    };

    return {user,login,logout};
}