
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'FILTER_DONE':
        return action.type;
    case 'FILTER_TO_DO':
        return action.type;
    case 'FILTER_IS_PROPGRESS':
        return action.type;
    case 'IMPORTANT_TASKS':
        return action.type;
    case 'SORT_ALPHABET':
        return action.type;
    case 'RESET_FILTERS':
        return action.type;
    default:
        return state;
    }
}
export default visibilityFilter;
