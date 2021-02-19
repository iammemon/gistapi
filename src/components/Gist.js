import React from 'react';

const Gist = ({ gist }) => {
    return (
        <div>
            {gist.owner.login}
        </div>
    )
}

export default Gist
