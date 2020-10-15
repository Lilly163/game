/**
 * @file router.jsx
 * @desc 路由
 * @author jinjiaxing
 * @data 2017/05/25
 */
/*** library ***/
import 'core-js/es6/map' //支持Map
import 'core-js/es6/set' //支持Set
import 'core-js/es6/string' //支持includes()
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, IndexRedirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import  { CSSTransition } from 'react-transition-group'

/*** common utility js file ***/
import './common/utils/Common.jsx';

/*** common stylesheet file ***/
import './common/style/_reset.scss';
import './common/style/_common.scss';

/*** react router store file ***/
import store from './store/store.jsx';

/*** entry file ***/
import App from './app.jsx';
import './ani.css'

/*** children route component ***/

/*** pages ***/
// 主页面
import Home from './pages/PageHome/PageHome.jsx';
// 组件展示页面
import About from './pages/PageTest/PageTest.jsx';
const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/test', name: 'About', Component: About },
  ]
// 初始化webview高度
common.webViewHeight = window.document.body.offsetHeight;

function Example() {
    return (
    <Router>
         <Router>
         <div style={{width:'100vw'}}>
    
          {routes.map(({ path, Component }) => (
              
            <Route key={path} exact path={path}>
              {({ match }) => (
                // <CSSTransition
                //   in={match != null}
                //   timeout={300}
                //   classNames="page"
              
                //   unmountOnExit
                // >
                  <div className="page">
                    <Component />
                  </div>
                // </CSSTransition>
              )}
            </Route>
          ))}
          </div>
    </Router>
        {/* <Route path="/" component={(props) => (
            <App {...props}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/test' component={About}/>
                </Switch>
            </App>
        )}/> */}
    </Router>
    )

};
ReactDOM.render(<Example/>, document.getElementById('container'));
