import {connect} from 'react-redux';
import Router from './router';

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return {dispatch};
}


export default connect(mapStateToProps, mapDispatchToProps )(Router)