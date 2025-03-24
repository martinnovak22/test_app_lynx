type SceneSVGProps = {
    type: string;
};

export const SceneSVG = ({type}: SceneSVGProps) => {
    const getImageSource = () => {
        switch (type) {
            case 'fog':
                return require('./assets/fog.png');
            case 'figure':
                return require('./assets/figure.png');
            case 'sleep':
                return require('./assets/sleep.png');
            case 'mystic-path':
                return require('./assets/mystic-path.png');
            case 'portal':
                return require('./assets/portal.png');
            case 'mirror':
                return require('./assets/mirror.png');
            case 'owl':
                return require('./assets/owl.png');
            default:
                return null;
        }
    };

    const src = getImageSource();
    console.log("xd")
    console.log(src)
    if (!src) return null;

    return (
        <view style={{width: "100px", height: "100px"}}>

            <image
                className="scene-img"
                src={src}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '5%',
                }}
            />
        </view>
    );
};
