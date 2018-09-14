import React, {Component} from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                authorization: token
            }
        };

        axios
        .get('http://localhost:3300/api/jokes', requestOptions)
        .then(res => {
            this.setState({ jokes: res.data });
        })
        .catch(err => {
            console.error(err)
            window.alert('Please login or create an account.');
            this.props.history.push('/');
        });
    }

    logoutHandler = e => {
        localStorage.removeItem('token');
        this.props.history.push('/');
      };
    

    render() {
        return (
            <div>
                <div className="logout-button">
                    {localStorage.getItem('token') && (
                    <button onClick={this.logoutHandler}>Logout</button>
                    )}
                </div>
                <div className="Jokes">
                    {this.state.jokes.map((joke, index) => 
                        <div className="joke-card" key={index}>
                            <p>type:<br></br>{joke.type}</p>
                            <p>setup:<br></br>{joke.setup}</p>
                            <p>punchline:<br></br>{joke.punchline}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    };

}

export default Jokes;