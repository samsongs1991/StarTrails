import { connect } from "react-redux";
import TrailShow from "./trail_show";
import { fetchTrail } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails } }, ownProps) => ({
    trailId: ownProps.match.params.trailId
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);