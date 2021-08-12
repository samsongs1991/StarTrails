import { connect } from "react-redux";
import Search from "./search";
import { updateFilters } from "../../actions/filter_actions";

const mapStateToProps = ({ entities: { trails }, ui: { filters } }) => ({
    trails: trails, 
    filters: filters
})

const mapDispatchToProps = dispatch => ({
    updateFilters: filters => dispatch(updateFilters(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);