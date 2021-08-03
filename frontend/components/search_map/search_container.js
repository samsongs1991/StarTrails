import { connect } from "react-redux";
import Search from "./search";
import { fetchTrails } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails } }, ownProps) => ({
    trails: Object.values(trails)
})

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);