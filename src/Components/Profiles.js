// import React from 'react'

// function Profiles(props) {
//     if(props.data){
//       let data = props.data;

// if (data.message === 'Not Found')
//         return (
//            <div className="notfound">
//               <h2>Oops !!!</h2>
//               <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
//            </div>
//         );
//         else{
//           // map the users into JSX elements
//           let userList = data.items.map((name) => {
//             return (
//                 <a key={name.id} href={name.html_url} target="blank">
//                 <div className="bs-callout bs-callout-info">
//                   <img className="user" src={name.avatar_url} alt={`${name.login}`}/>
//                   <h4>Username : {name.login}</h4>
//                   <p> Url : {name.html_url}</p>
//                   <p> Score : {name.score} </p>
//                 </div>
//                 </a>
//             );
//           })
//           // then render it
//           return (
//             <div>{userList}</div>
//           );
//         }
//     }
//     else {
//       return <div>Fetching data . . .</div>
//     }
// }
// export default Profiles

import React from 'react'

function Profiles(props) {
    if(props.data){
        let data= props.data
        if(data.message==='Not found'){
            return(
                <div className="notfound">
                <h2>Oops!! Not found</h2></div>
            )
        }
        else{
            let userList= data.items.map((name)=>{
                return(
                    <a key={name.id}>
                    <div className="bs-callout bs-callout-info">
                    <img className="user"/> 
                    <h4>Username: {name.login}</h4></div></a>
                )
            })
            return(
                <div>{userList}</div>
            );
        }
    }
    else{
    return <div>Fetching....</div>
    }
}

export default Profiles
