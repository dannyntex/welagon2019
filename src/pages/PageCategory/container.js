import { connect } from 'src/drivers';
import Category from './category'
import { setCurrentPage, setPrevPageTotal,setItemsCategory } from 'src/actions/catalog';

const mapStateToProps = ({ catalog }) => {
    return {
        currentPage: catalog.currentPage,
        pageSize: catalog.pageSize,
        prevPageTotal: catalog.prevPageTotal,
        items:catalog.items,
    };
};
const mapDispatchToProps = { setCurrentPage, setPrevPageTotal, setItemsCategory };

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Category)
