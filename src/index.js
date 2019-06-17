import React from 'react'
import ReactDOM from 'react-dom'
import Gerenciador from './components/Gerenciador'
import Gerente from './components/Gerenciador/Gerente'
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
<div>
    <Route path='/' component={Gerenciador}/>
    </div>
 </Router>, document.getElementById('root'))