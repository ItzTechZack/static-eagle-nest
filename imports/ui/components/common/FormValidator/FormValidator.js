import React from 'react';

import FieldValidator from './FieldValidator';

import uuidv5 from 'uuid/v5';

const FormValidator = ({ state, rules, onValidate }) => 
  Object.keys(rules).map(key => 
    <FieldValidator 
      rules={rules[key]} 
      validationState={state}
      name={key}
      key={uuidv5(key, uuidv5.URL)} 
      onValidate={onValidate}  
    />
  );

export default FormValidator

