const Links = (props) => {
    return(
        <div>
            <h3>Links</h3>
            <a href={ props.github }>{ props.github }</a>
            <a href={ props.linkedIn }>{ props.linkedIn }</a>
        </div>
    )
}

export default Links;