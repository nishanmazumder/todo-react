import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishan",
      count: 0,
      users: [],
      user: { name: "Nishan" },
      currentUser: 0,
      // test: this.state.name,
      // getUser : ()=>{
      //   this.state.users.map((data) => {
      //     // return console.log(data.nmae);
      //     return data.name;
      //   })
      // }
    };

    // let changeName = this.changeName.bind(this)

    // let getIndex = arr.indexOf(i);

    // test.map((data)=>{
    //   if(data.valueOf(Object)){
    //     return console.log(data.valueOf(Object))
    //   }
    //   //return console.log(data)
    // })

    // this.i = 0;
    // this.arr = ["test", 1, 4, true, { office: "work", isAvailable: true }];
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
        // console.log(data)
      });
  }

  changeName = () => {
    this.setState({ name: "Mazumder" });
  };

  plus = () => {
    this.setState((prvCount) => {
      return { count: prvCount.count + 1 };
    });
  };

  minus = () => {
    this.setState((prvCount) => {
      if (prvCount.count <= 0) {
        return;
      } else {
        return { count: prvCount.count - 1 };
      }
    });
  };

  nextUser = () => {
    this.setState((prvUser) => {
      return {
        currentUser: prvUser.currentUser + 1,
        user: prvUser.users[this.state.currentUser],
      };
    });
  };

  prevUser = () => {
    this.setState((prvUser) => {
      if (prvUser.currentUser <= 0) return;
      return {
        currentUser: prvUser.currentUser - 1,
        user: prvUser.users[this.state.currentUser],
      };
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>{this.props.page}</h2>

          {/* name Change */}
          <div>
            <div>this is {this.state.name}</div>
            <button
              className="btn btn-info"
              type="button"
              onClick={this.changeName}
            >
              Change
            </button>
          </div>

          {/* Counter */}
          <div className="container">
            <h1>{this.state.count}</h1>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.minus}
            >
              Minus
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.plus}
            >
              Plus
            </button>
          </div>

          <div className="container">
            <h1>User</h1>
            {/* {console.log(this.state.user)} */}
            {/* { console.log(this.state.currentUser)} */}
            {/* {console.log(this.state.user)} */}
            <h3>{this.state.user.name}</h3>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.prevUser}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.nextUser}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
