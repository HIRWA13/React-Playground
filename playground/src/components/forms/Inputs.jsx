import { useState } from "react";

export default function Inputs() {
    const [formData, setFormData] = useState(
        {
            firstname: "", 
            lastname:"", 
            email:"", 
            comments:"",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    const formHandler = (e) => {
        const {name, value, type, checked} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        setFormData({
            firstname: "", 
            lastname:"", 
            email:"", 
            comments:"",
            isFriendly: false,
            employment: "",
            favColor: ""
        })
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
             <div>
                {/* text-inputs */}
                <div className="mt-5">
                <label>
                    first name: 
                    <input 
                        type="text" 
                        name="firstname" 
                        onChange={formHandler} 
                        value={formData.firstname} 
                        className="bg-gray-50 border"
                        />
                </label>
                </div>
               <div className="mt-5">
               <label>
                    last name: 
                        <input 
                        type="text" 
                        name="lastname" 
                        onChange={formHandler}  
                        value={formData.lastname} 
                        className="bg-gray-50 border"
                        />
                </label>
               </div>
              <div className="mt-5">
              <label>
                    email: 
                        <input 
                            type="text" 
                            name="email" 
                            onChange={formHandler} 
                            value={formData.email} 
                            className="bg-gray-50 border"
                            />
                </label>
              </div>
              {/* textarea */}
              <div className="mt-5">
                <label>
                Comments: 
                    <textarea 
                        name="comments" 
                        onChange={formHandler}  
                        value={formData.comments} 
                        className="max-h-10  font-medium text-sm  px-5 py-2.5 bg-gray-50 border"
                        />  
                </label>
             </div>
             {/* checkbox */}
             <div className="mt-5">
                 <input 
                    type="checkbox" 
                    onChange={formHandler}
                    checked={formData.isFriendly}
                    id="isFriendly"
                    name="isFriendly"
                    />
                <label htmlFor="isFriendly" className="text-xl font-semibold ml-2">Are you friendly</label>
             </div>
             {/* radio buttons */}
             <div >
                <div>
                <input 
                    type="radio" 
                    name="employment" 
                    id="unEmployed"
                    value="Unemployed"
                    checked={formData.employment === "Unemployed"}
                    onChange={formHandler}
                    />
                <label htmlFor="unEmployed" className="ml-2">Unemployed</label>
                </div>
                  <div>
                  <input 
                    type="radio" 
                    name="employment" 
                    id="partTime" 
                    value="Part-Time"
                    checked={formData.employment === "Part-Time"}
                    onChange={formHandler}
                    />
                <label htmlFor="partTime" className="ml-2">Part-Time</label>
                  </div>
                <div>
                <input 
                    type="radio" 
                    name="employment" 
                    id="fullTime"
                    value="Full-Time" 
                    checked={formData.employment === "Full-Time"}
                    onChange={formHandler}
                    />
                <label htmlFor="fullTime" className="ml-2">Full-Time</label>
                </div>
             </div>
             <div>
             <label htmlFor="favColor">What is your favorite color?</label>
                <select
                    id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={formHandler}
                >
                    <option value="">Choose your color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                </select>
             </div>
             </div>
            {/* submit button */}
             <div className="mt-5">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
             </div>
             
           </form>
        </>
    );
}