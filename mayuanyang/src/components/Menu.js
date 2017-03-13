import React, { Component } from 'react';
import './AboutMe.css';


class Menu extends Component {
    
    render() {
        var menu = [
            {key: 1, name:'My Projects'}, 
            {key: 2, name:'My Blog'}, 
            {key: 3, name:'About Me'}
            ];
        
        this.menuItems = menu.map((item) =>{
            return <li key={item.key}><a href="#">{item.name}</a></li>
        });
        
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Eddy Ma</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {this.menuItems}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Right 1</a></li>
                            <li><a href="#">Right 2</a></li>
                            <li><a href="#">Right 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Menu;
