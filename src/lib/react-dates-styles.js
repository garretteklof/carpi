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
        borderBottom: 0,
        borderBottomFocused: 0
      }
    },
    color: {
      ...DefaultTheme.reactDates.color,
      placeholderText: '#03312e',
      selectedSpan: {
        backgroundColor: '#1dd3b0',
        backgroundColor_active: '#03312e',
        backgroundColor_hover: '#03312e',
        borderColor: '#03312e',
        borderColor_active: '#03312e',
        borderColor_hover: '#03312e',
        color: '#fff !important',
        color_active: '#fff !important',
        color_hover: '#fff !important'
      },
      hoveredSpan: {
        backgroundColor: '#1dd3b0',
        backgroundColor_active: '#03312e',
        backgroundColor_hover: '#03312e',
        borderColor: '#03312e',
        borderColor_active: '#03312e',
        borderColor_hover: '#03312e',
        color: '#fff !important',
        color_active: '#fff !important',
        color_hover: '#fff !important'
      },
      selected: {
        backgroundColor: '#03312e',
        backgroundColor_active: '#03312e',
        backgroundColor_hover: '#03312e',
        borderColor: '#03312e',
        borderColor_active: '#03312e',
        borderColor_hover: '#03312e',
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
