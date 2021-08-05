import { connect } from "react-redux";
import Search from "./search";
// import { fetchTrails } from "../../actions/trail_actions";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = ({ entities: { trails }, filters }) => ({
    // trails: Object.values(trails)
    trails: trails, 
    filters: filters
})

const mapDispatchToProps = dispatch => ({
    // fetchTrails: filters => dispatch(fetchTrails(filters)),
    updateFilter: filter => dispatch(updateFilter(filter))
    // updateFilter will dispatch fetchTrails for us
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);