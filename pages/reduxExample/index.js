import Component from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions } from './slice'

const mapStateToProps = (state) => {
  return state.tutorial;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch) //biar lgsg panggil lewat props
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Component);
