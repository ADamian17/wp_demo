/** 
  * formtModalsToObj   
  * @param {Array} modalArr - expected to be an array
  * @return {Object} returns the modals array converted into an object.
*/

export const formtModalsToObj = (modalArr) => {
  return modalArr.reduce((acc, modal) => {
    acc[modal.node.slug] = { show: false };

    return acc;
  }, {});
}
