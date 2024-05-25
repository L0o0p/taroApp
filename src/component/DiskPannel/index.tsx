import { useAtom } from "jotai";
import { View, Image } from "@tarojs/components";
import './index.module.scss';
import { footage, diskRotationAtom } from '../../store/index';

export const DiskPannel = () => {
    const [diskRotation] = useAtom(diskRotationAtom);
    const diskImage = { diskImage: 'https://telegraph-image-3k8.pages.dev/file/d03ab5e77f91cf312aa73.png' };
    return (
        <View className='disk' >
            <Image className={diskRotation ? 'diskImg' : ''} style={{ height: '217px', width: '217px' }} src={diskImage.diskImage} />
        </View>
    );
}