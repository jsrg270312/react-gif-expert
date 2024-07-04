export const GifItem = ({url, title}) => {
    console.log('GifItem')
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}