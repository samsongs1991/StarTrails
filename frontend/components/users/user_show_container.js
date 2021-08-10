import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = ({entities: { users }}, ownProps ) => ({
    user: users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);