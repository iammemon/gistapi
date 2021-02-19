import React from 'react'
import Gist from './Gist'
import PropTypes from 'prop-types';

const GistList = ({ gists = [] }) => {

    const listItems = gists.map(gist => {
        return (<Gist key={gist.id} gist={gist} />)
    })

    return (
        <div data-testid="gist-list">
            {gists.length ? listItems : <h3>No Result</h3>}
        </div>
    )

}


GistList.propTypes = {
    gists: PropTypes.array
}

export default GistList
