import React from 'react'
import Gist from './Gist'

const GistList = ({ gists }) => {

    const listItems = gists.map(gist => {
        return (<Gist key={gist.id} gist={gist} />)
    })

    return (
        <div>
            {gists.length ? listItems : <h3>No Result</h3>}
        </div>
    )

}

export default GistList
