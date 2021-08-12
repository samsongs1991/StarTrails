import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchTrails } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails } }, ownProps) => ({
    trails: Object.values(trails)
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailIndex);