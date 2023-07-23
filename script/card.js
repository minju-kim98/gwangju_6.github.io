export const Card = ({ name, picture, insta }) => {
    return (
        <div style={{ width: 100, height: 100, border: "1px solid black", margin: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
            <div>
                {name}
            </div>
            <div>
                {picture}
            </div>
            <div>
                {insta}
            </div>
        </div>
    )
}