import React from 'react';
import './searchbar.css';
export default class SearchBar extends React.Component {
    render() {
        return (
            <div id="cover">
                <form method="get" action="">
                    <div className="tb">
                        <div className="td"><input type="text" placeholder="Search" required />
                        </div>
                            <div className="td" id="s-cover">
                                <button type="submit">
                                    <div id="s-circle"></div>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                </form>
            </div>
                )
            }
}
