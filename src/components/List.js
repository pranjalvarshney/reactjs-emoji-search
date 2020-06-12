import React from 'react'

function List(props) {
    
    const allEmojis = props.data
    
    if(!allEmojis) return <div>Loading...</div>

  
    return (
        <div className="container">
            <table className="table table-hover table-responsive">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Name</th>
                <th scope="col">Group</th>
            </tr>
            </thead>
            <tbody>
                {
                    allEmojis.map((emoji,index)=>{
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{emoji.character}</td>
                                <td>{emoji.unicodeName}</td>
                                <td>{emoji.group}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
}

export default List
