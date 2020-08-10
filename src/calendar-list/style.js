import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const STYLESHEET_ID = 'stylesheet.calendar-list.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground
    },
    placeholder: {
      backgroundColor: appStyle.calendarBackground,
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeholderText: {
      fontSize: hp('1.548%'),
      fontWeight: '200',
      color: appStyle.dayTextColor
    },
    calendar: {
   
    },
    staticHeader: {
      position: 'absolute', 
      left: 0, 
      right: 0, 
      top: 0, 
      backgroundColor: appStyle.calendarBackground,
      paddingLeft: 15,
      paddingRight: 15
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
