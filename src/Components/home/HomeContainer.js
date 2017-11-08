import {connect} from 'react-redux';
import {newPage} from '../ducks/reducer'
import Main from './Main';
import { bindActionCreators } from 'redux'

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        newPage:newPage
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps )(Main)