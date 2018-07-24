import _ from 'lodash';

export default toBoolean => {
    if (!toBoolean) {
      return false;
    }
    if (typeof toBoolean == 'number' || typeof toBoolean == 'boolean') {
      return !!value;
    }

    return _.replace(_.trim(toBoolean.toLowerCase()), /[""'']/ig, '') === 'true' ? true : false;
}