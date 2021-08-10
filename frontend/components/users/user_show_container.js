import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps ) => ({
    userId: ownProps.match.params.userId
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);