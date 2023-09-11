import './Avatar.css'

function Avatar(){
    return(
        <div className="car">
            <img
                className="avatar"
                src="https://i.imgur.com/DuvJETC.jpeg"
                alt="classic skylark"
                height={300}
                width={300}
            ></img>
        </div>
    );
}

export default Avatar;