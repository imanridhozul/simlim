import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login : false
        }
        Router.onRouteChangeStart = (url) => NProgress.start();
        Router.onRouteChangeComplete = () => NProgress.done();
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    componentDidMount()
    {
        var data = this.getCookie("userId")
        if (data === null | data==="") {
            console.log("not yet login")      
            console.log(data);      
        }
        else{
            console.log("login")
            this.setState({
                login : !this.state.login
            })
            console.log(data);
        }
        
        // var data = localStorage.getItem('user');
        // if (data === null) {
        //     console.log("notyet")
        //     // window.location.href = "/";
            
        // }else{
        //     console.log("login")
        //     this.setState({
        //         login : !this.state.login
        //     })
        // }
        
    }
    logout()
    {
        document.cookie = "userId=; path=/;";
        var data = this.getCookie("userId")
        console.log(data);
        window.location.href = "/Crud";
        // console.log(JSON.parse(localStorage.getItem("user")))
        // localStorage.clear();
        // window.location.reload();
        // console.log(JSON.parse(localStorage.getItem("user")))
    }
    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
                    

                   
                    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                   

                    
                    <title>xxx</title>
                </Head>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">                               
                                <Link href='/Crud'><a className="nav-link active">Beranda</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/About'><a className="nav-link active">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/admin/beranda/AdmBeranda'><a className="nav-link active">Admin</a></Link>
                            </li>
                            {
                                    this.state.login ? 
                                    <li className="nav-item">
                                    <a onClick={this.logout.bind(this)} className="nav-link active">Logout</a>
                                    </li>
                                    : 
                                    <div> <li className="nav-item">
                                    <Link href='/Login'><a className="nav-link active">Login</a></Link>
                                    </li></div>
                            }
                           

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default Nav;