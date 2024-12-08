import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

const scaleWidth = (value: number) => {
    return Math.round(value * (SCREEN_WIDTH / BASE_WIDTH));
};

const scaleHeight = (value: number) => {
    return Math.round(value * (SCREEN_HEIGHT / BASE_HEIGHT));
};


export { scaleWidth, scaleHeight };
