import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      marginTop :hp('1.2%'),
      width : wp('9.945%'),
      height : hp('2.58%'),
      borderRadius : hp('0.645%'),
      borderWidth : hp('0.129%'),
      borderColor: '#004CA1',
      alignItems: 'center'
    },
    text: {
      marginTop: Platform.OS === 'android' ? 1 : 3,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      ...appStyle.textDayStyle
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    todayselectedtext: {
     color : '#ffffff'
    },
    todayselected: {
      backgroundColor: '#E60A0A',
      width : wp('9.945%'),
      height : hp('2.58%'),
      borderRadius : hp('0.645%'),
      borderWidth : hp('0.129%'),
      borderColor: '#E60A0A',
      alignItems: 'center'
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      width : wp('9.945%'),
      height : hp('2.58%'),
      borderRadius : hp('0.645%'),
      borderWidth : hp('0.129%'),
      borderColor: '#004CA1',
      alignItems: 'center'
    },
    today: {
      color : '#E60A0A',
      backgroundColor: appStyle.todayBackgroundColor,
      width : wp('9.945%'),
      height : hp('2.58%'),
      borderRadius : hp('0.645%'),
      borderWidth : hp('0.129%'),
      borderColor: '#E60A0A',
      alignItems: 'center'
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
