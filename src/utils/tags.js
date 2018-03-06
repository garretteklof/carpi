export const setColor = (category) => {
  switch (category) {
    case 'Contributor':
      return 'tag is-canary';
    case 'Inhibitor':
      return 'tag is-orange-soda';
    case 'Basic Necessity':
      return 'tag is-cerulean';
    default:
      return '';
  }
};
export const injectBlurb = (category) => {
  switch (category) {
    case 'Contributor': {
      return 'For activities that contribute to goals';
    }
    case 'Inhibitor': {
      return 'For activities that inhibit goals';
    }
    case 'Basic Necessity': {
      return 'For everyday, essential activities';
    }
    default:
      return '';
  }
};
