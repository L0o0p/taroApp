import { View } from '@tarojs/components';
import './index.module.scss';
import { ControlBlock } from './ControlBlock';
import { TitleBlock } from './TitleBlock';
import { ProcessBlock } from './ProcessBlock';

export const ControlPannel = () => {

    return (
        <View className='control'>
            <TitleBlock />
            <ProcessBlock />
            <ControlBlock />
        </View>
    );
}





