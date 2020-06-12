import React, { Component } from 'react'
import axios from 'axios'
import List from './components/List'
import SearchList from './components/SearchList'


const key = "Enter your access_key here" 
const uri = `https://emoji-api.com/emojis?access_key=${key}`


class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
            filteredEmogi : ""
        }
    }
 
    fetchApi = async () => {
        const response = await axios.get(uri)
        this.setState({
            data: response.data
        })
        return response
    }

    componentDidMount(){
        this.fetchApi()
    }

    handleQuery = (event) => {
        this.setState({
            filteredEmogi: event.target.value
        })
    }


    render() {

        let filteredData = this.state.data.filter(fdata => {
            return fdata.unicodeName.indexOf(this.state.filteredEmogi) !== -1
        })

        

        return (
            <div className="container my-3 text-center">
                <h2>Emojicons</h2>
                <SearchList handleQuery={this.handleQuery} />
                <List data= {filteredData} />
            </div>
        )
    }
}

export default App