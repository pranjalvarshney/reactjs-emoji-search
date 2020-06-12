import React, { Component } from 'react'

class SearchList extends Component {
    
   
    
    handleInput = (event) => {
       this.props.handleQuery(event)
    }
    
    render() {
       
        return (
            <div>
                <form>
                    <input type="text"  onChange={ this.handleInput}/>
                </form>                
            </div>
        )
    }
}

export default SearchList
