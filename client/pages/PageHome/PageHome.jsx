
import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';

import './_pageHome.scss';


class PageHome extends Component {


    btnHandler() {
        this.props.history.push('/test');
    }

    render() {
        return (
            <div id='pagehome'>
                <section>
                    <h1>天庭公告</h1>
                </section>
                <button className="btn" text="View Demo" onClick={this.btnHandler.bind(this)}>按钮呼叫财神</button>
            </div>
        );
    }
}

export default withRouter(PageHome)
