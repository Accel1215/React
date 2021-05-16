import React, { Component } from 'react'

const LEFT_PAGE = "left"
const RIGHT_PAGE = "right"

const styles= {
    label: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}

export default class Pagination extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.PageNumbers = this.PageNumbers.bind(this);
    }

    PageNumbers(currentPage, pageCount) {
        if(currentPage <= 3)
        {
            return [1, 2, 3, 4, 5, RIGHT_PAGE, pageCount]
        }
        if(currentPage >= pageCount - 2)
        {
            return [1, LEFT_PAGE, pageCount-4, pageCount-3, pageCount-2,pageCount-1,pageCount]
        }
        return [1, LEFT_PAGE, currentPage - 2, currentPage -1,currentPage, currentPage+1, currentPage+2, RIGHT_PAGE, pageCount]
    }

    render() {
        const { onPageChange, currentPage, pageCount } = this.props
        const pages = this.PageNumbers(currentPage, pageCount)
        return (
            <div style={styles.label}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {pages.map((val) => {
                            if(val == currentPage)
                            {
                                return (
                                    <li class="page-item active"><a class="page-link" onClick={() => onPageChange(val)}>{val}</a></li>
                                )
                            }
                            if(val == RIGHT_PAGE)
                            {
                                return (
                                    <li class="page-item">
                                        <a class="page-link" aria-label="Next" onClick={() => onPageChange(currentPage + 1)}>
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                )
                            }
                            if(val == LEFT_PAGE)
                            {
                                return (
                                    <li class="page-item">
                                        <a class="page-link" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                )
                            }
                            return (
                                <li class="page-item"><a class="page-link" onClick={() => onPageChange(val)}>{val}</a></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }

}