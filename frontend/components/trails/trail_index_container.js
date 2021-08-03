import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchTrails } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails } }, ownProps) => ({
    trails: trails
})

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailIndex);