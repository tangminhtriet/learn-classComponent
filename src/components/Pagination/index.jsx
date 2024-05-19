import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        const { pagination, onChangePage } = this.props;
        const { _page, _totalRows, _limit } = pagination;
        const maxPage = Math.ceil(_totalRows / _limit);
        return (
            <div>
                <button disabled={_page <= 1} onClick={() => onChangePage(_page - 1)}>Prev</button>
                <button disabled={_page >= maxPage} onClick={() => onChangePage(_page + 1)}>Next</button>
            </div>
        );
    }
}

export default Pagination;