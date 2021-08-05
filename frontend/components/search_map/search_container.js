import { connect } from "react-redux";
import Search from "./search";
import { fetchTrails } from "../../actions/trail_actions";

const mapStateToProps = ({ entities: { trails } }) => ({
    trails: Object.values(trails)
})

const mapDispatchToProps = dispatch => ({
    fetchTrails: filters => dispatch(fetchTrails(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);