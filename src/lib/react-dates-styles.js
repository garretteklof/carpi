import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    border: {
      input: {
        ...DefaultTheme.reactDates.border.input,
        borderBottomFocused: `2px solid #1dd3b0`
      }
    },
    color: {
      ...DefaultTheme.reactDates.color,
      selectedSpan: {
        backgroundColor: '#95F9E3',
        backgroundColor_active: '#1dd3b0',
        backgroundColor_hover: '#1dd3b0',
        borderColor: '#1dd3b0',
        borderColor_active: '#1dd3b0',
        borderColor_hover: '#1dd3b0',
        color: '#fff !important',
        color_active: '#fff !important',
        color_hover: '#fff !important'
      },
      selected: {
        backgroundColor: '#1dd3b0',
        backgroundColor_active: '#1dd3b0',
        backgroundColor_hover: '#1dd3b0',
        borderColor: '#1dd3b0',
        borderColor_active: '#1dd3b0',
        borderColor_hover: '#1dd3b0',
        color: '#fff !important',
        color_active: '#fff !important',
        color_hover: '#fff !important'
      }
    }
  }
});

/*  Override the react-dates template as seen here:

https://github.com/airbnb/react-dates/blob/master/src/theme/DefaultTheme.js

 */
