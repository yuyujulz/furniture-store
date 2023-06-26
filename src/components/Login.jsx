import "../index.scss"

export default function LogIn(){
    return(
        <div >
        

            <form action="submit" className="loginForm">
                    <label>EMAIL</label>
                        <input
                        className="email"
                        type="email"
                        name="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        />

                    <label>PASSWORD</label>
                        <input
                        className="password"
                        type="password"
                        name="password"
                        // onChange={(e) => setPassword(e.target.value)}
                        // value={password}
                        />
                    <button type="submit" className="btn">LOGIN</button>
                </form>
            
            


            

        </div>
    )
}