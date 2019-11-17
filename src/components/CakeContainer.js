import React from 'react';
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const CakeContainer = (props)=>{
    return(
        <div>
            <h2>This is Cake App {props.numOfCakes}</h2>
            <button type="submit" onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps= (state)=>{
    return {
        numOfCakes: state.numOfCake
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);