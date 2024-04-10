import '../App.css'



export default function User({user}){
    const {avatar_url, followers, following, public_repos,name, login, created_at} = user;

    const createdDate = new Date(created_at)

    return (<div className="user">
           <div>
            <img src={avatar_url} alt="avatar" className="avatar" />
           </div>
           <div className='name-container'>
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>User Join on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                month: 'short'
            })} ${createdDate.getFullYear()}`}</p>
           </div>
           <div className='profile-info'>
            <div>
                <p className='wght'>Public Repos</p>
                <p>{public_repos}</p>
            </div>
            <div>
                <p className='wght'>Followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p className='wght'>Following</p>
                <p>{following}</p>
            </div>
           </div>
    </div>);
}