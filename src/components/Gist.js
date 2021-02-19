import React from 'react';
import Octicon from 'react-octicon'
import styled from 'styled-components'


const Gist = ({ gist }) => {

    const files = Object.keys(gist.files).map(key => {
        const file = gist.files[key]
        return <File key={file.filename}>
            <Octicon name="file" />
            <span>
                <a target="_blank" rel="noopener noreferrer" href={file.raw_url}>{file.filename}</a>
            </span>
        </File>
    })

    return (
        <Wrapper>
            <Header>
                <Avatar>
                    <img src={gist.owner.avatar_url} />
                    <span>
                        <a target="_blank" rel="noopener noreferrer" href={gist.owner.html_url}>{gist.owner.login}</a>
                    </span>
                </Avatar>
                <MetaSection>
                    <Meta>
                        <Octicon name="code" />
                        <span>{Object.keys(gist.files).length} Files</span>
                    </Meta>
                    <Meta>
                        <Octicon name="repo-forked" />
                        <span>
                            <a target="_blank" rel="noopener noreferrer" href={gist.forks_url}>Forks</a>
                        </span>
                    </Meta>
                    <Meta>
                        <Octicon name="comment" />
                        <span>
                            <a target="_blank" rel="noopener noreferrer" href={gist.comments_url}>Comment</a>
                        </span>
                    </Meta>
                    <Meta>
                        <Octicon name="star" />
                        <span>Stars</span>
                    </Meta>
                </MetaSection>
            </Header>
            <div>
                <TimeStamp>Created at {new Date(gist.created_at).toLocaleDateString()}</TimeStamp>
                <TimeStamp>Last updated {new Date(gist.updated_at).toLocaleDateString()}</TimeStamp>
            </div>
            <Description>
                {gist.description}
            </Description>
            <FileSection>
                {files}
            </FileSection>
            <Separator />
        </Wrapper>
    )
}



const Wrapper = styled.div`
    display: grid;
    color: #0165D6;
    gap: 10px;
    margin: 10px;

    & a {
        text-decoration: none;
        color: #0165D6;
    }

    @media (min-width: 1200px) {
        width: 650px;
    }
`

const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    grid-gap: 10px;
`

const Description = styled.div`
    width: fit-content;
    color: gray;
    font-weight: bold;
    font-size: medium;
    margin-top: 8px;
`

const TimeStamp = styled.span`
    color: gray;
    padding-right: 8px;
    margin: 8px 0;
`

const FileSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;    
`

const File = styled.div`
    margin-left: 8px;
    & > span {
        padding-left: 8px;
    }
`

const MetaSection = styled.div`
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 6px;
`

const Meta = styled.div`
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 2fr;

    & > span{
        padding-left: 5px;
    }
`

const Avatar = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    grid-column-gap: 8px;

    & > img {
        border-radius: 50%;
        height: 40px;
        width: 40px
    }

    & > span {
        font-weight: bold;
    }
`
const Separator = styled.hr`
    border-top: 1px solid lightgray;
    width: 100%;
`



export default Gist


