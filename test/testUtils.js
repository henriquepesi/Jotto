import checkProprTypes from "check-prop-types";

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - value pf data-test for searching
 * @returns {shallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkProprTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
