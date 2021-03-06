import React, { Component } from 'react';
const s1 = {
    marginbottom: 0
}
class MenuNav extends Component {
    constructor(props) {
        super(props);
        this.state={
            nama : ''
        }
    }
    
    componentDidMount(){
        var data = this.getCookie("adminLogin")
        this.setState({
            nama : data
        })
    }
    logout() {
        var data = this.getCookie("adminLogin")
        console.log(data);
        document.cookie = "adminLogin=; path=/;";
        var data = this.getCookie("adminLogin")
        console.log(data);
        window.location.href = "/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
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
    render() {
        return (
            <div>
                 <div className="row border-bottom">
                        <nav className="navbar navbar-static-top" role="navigation" style={s1}>
                            <div className="navbar-header">
                                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                                <form role="search" className="navbar-form-custom" action="http://webapplayers.com/inspinia_admin-v2.3/search_results.html">
                                    <div className="form-group">
                                        <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                                    </div>
                                </form>
                            </div>
                            <ul className="nav navbar-top-links navbar-right">
                                <li>
                                    <span className="m-r-sm text-muted welcome-message">Selamat Datang {this.state.nama}</span>
                                </li>
                                <li>
                                    <a onClick={this.logout.bind(this)} href="#">
                                        <i className="fa fa-sign-out"></i> Log out
                                    </a>
                                </li>
                                <li>
                                    <a className="right-sidebar-toggle">
                                        <i className="fa fa-tasks"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>
        );
    }
}

export default MenuNav;