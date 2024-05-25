import { View, Image } from "@tarojs/components"

interface featherButtonProps {
    featherName: string
    buttonIconUrl: string
}

export const featherButton = (props: featherButtonProps) => {
    const { featherName, buttonIconUrl } = props
    const buttonStyle = { width: '24px', height: '24px' }
    const handleClick = () => {
        console.log('点击了:', featherName)
    }
    // const buttonIconUrl = icon[featherName]
    return (
        <View className='' onClick={handleClick}>
            <Image style={buttonStyle} src={buttonIconUrl} />
        </View>
    )
}