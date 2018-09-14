import React from 'react';
import ReactDOM from 'react-dom';

const USER = {
    name: "Michael Salvati",
    luckyNumber: LuckyNumber(),
    }

<<<<<<< HEAD
=======
  Greeting.propTypes = {
    name: React.PropTypes.string.isRequired,
    luckyNumber: React.PropTypes.number.isRequired,
  };

>>>>>>> 9d93f7333690680f75d9eb609b7c554c63385469
function LuckyNumber() {
    let luckyNumber = 0;
    luckyNumber = Math.floor((Math.random() * 1000) + 1);
    return luckyNumber;
}

function Greeting(props) {
    return (
        <div className="container">
            <h1>{props.name}</h1>
            <h2 className="text-muted">This is your lucky number: {props.luckyNumber}</h2>
        </div>
    );
}

<<<<<<< HEAD
const user = {
    firstName: 'Mike',
    lastName: 'Salvati'
};

function fullName(user){
    return `${user.firstName} ${user.lastName}`;
}

const greeting = <h1>Hello {fullName(user)}</h1>;

ReactDOM.render(
    // <App />,
=======
//Alaways keep the ReactDOM.render at the bottom so it loads all the items...
ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
>>>>>>> 9d93f7333690680f75d9eb609b7c554c63385469
    Greeting(USER),
    document.getElementById('root')
);