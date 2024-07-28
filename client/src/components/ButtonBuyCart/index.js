import Button from "../Button"

function BuyProductSubmit({ width, value, justifyContent, onClick, height, backgroundColor }) {
    return (
        <Button width={width}
        height={height}
        value={value}
        backgroundColor='none'
        justifyContent='center'
        onClick={onClick}
        ></Button>
)
}

export default BuyProductSubmit