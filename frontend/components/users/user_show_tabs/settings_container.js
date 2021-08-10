import { connect } from "react-redux";
import Settings from "./settings";
import { updateUser } from "../../actions/user_detail_api_util";

const mapStateToProps = (state, ownProps ) => ({
    user: 
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);