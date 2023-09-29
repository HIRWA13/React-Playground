import { useState } from "react"

export default function Inputs() {
    const [userData, SetUserData] = useState({
        userEmail: "",
        password: "",
        confirmPassword: "",
        willJoin: false
    })
    const dataHandler = (e) => {
        const {name, value, type, checked} = e.target
        SetUserData(prev => {
            return {
                ...prev, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        const user = {
            email: userData.userEmail,
            password: userData.password,
            confirmPassword: userData.confirmPassword,
            subscriber: userData.willJoin,
            id: Math.random()
        }
        if(user.password !== user.confirmPassword) {
            alert("Password must be equal")
        } 
        console.log(user)
        SetUserData(
            {
                userEmail: "",
                password: "",
                confirmPassword: "",
                willJoin: false
            }
        )
    }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <div>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-gray-50 border p-2 rounded-md mt-6 w-full"
                name="userEmail"
                onChange={dataHandler}
                value={userData.userEmail}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="enter your password"
                className="bg-gray-50 border p-2 rounded-md mt-6 w-full"
                name="password"
                onChange={dataHandler}
                value={userData.password}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="confirm your password"
                className="bg-gray-50 border p-2 rounded-md mt-6 w-full"
                name="confirmPassword"
                onChange={dataHandler}
                value={userData.confirmPassword}

              />
            </div>
          </div>
          <div className="mt-3 space-x-3">
            <input 
                id="newsLetter" 
                type="checkbox" 
                name="willJoin" 
                onChange={dataHandler}
                checked={userData.willJoin}
                />
            <label htmlFor="newsletter">I want to Join the Newsletter</label>
          </div>
          <div>
            <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 w-full mt-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
