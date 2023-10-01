import users from "../../assets/users";
import User from "./User";

export default function Users() {

    const getUsers = users.map(user => {
        return <User 
                key={user.id}
                user={user}
                />
    })
    
    return (
        <>
            <section className="w-3/4  mx-auto mt-10 grid grid-cols-4 gap-10">
                {getUsers}
            </section>
        </>
    );
}