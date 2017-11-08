import Page from './Page';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

function mapStateToProps(state){
    return {name: state.ducks.reducer.data.name};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({dispatch});
}


export default connect(mapStateToProps, mapDispatchToProps )(Page)