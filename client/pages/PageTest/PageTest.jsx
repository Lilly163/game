/**
 * @file PageTest.jsx
 * @desc 组件展示页面
 * @create 18/11/14.
 * @author jinjiaxing
 */
/** lib **/
import * as React from 'react';
/**resources**/
import './_pageTest.scss';

import caishen from './img/img4.jpg'
/**component**/
import { withRouter } from 'react-router-dom'



class PageTest extends React.Component {

   componentDidMount(){
       document.querySelector('.hulang-container').querySelectorAll('span').forEach(element => {
        element.classList.add('animate')
       })
   }

    render() {
        return (
            <div style={{height:'100%', width:'100%', position:'relative'}}>
                <div className="hulang-container" style={{position:'absolute', width:'100%', height:'100%', background:'lightblue', display:'flex', flexDirection:'column'}}>
                   <span>虎狼之词1</span>
                   <span>虎狼之词2</span>
                   <span>虎狼之词3</span>
                   <span>虎狼之词4</span>
                   <span>虎狼之词5</span>
                   <span>虎狼之词6</span>
                   <span>虎狼之词7</span>
                   <span>虎狼之词8</span>
                   <span>虎狼之词9</span>
                   <span>虎狼之词10</span>
                </div>
                <img onClick={()=>{this.props.history.push('/')}} style={{width:'100%', height:'100%'}} src={caishen} alt=""/>
            </div>
        )
    }
}

export default withRouter(PageTest);


