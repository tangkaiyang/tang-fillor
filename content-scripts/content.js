chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //维护title列表:税号 客户名称 etc
  const inputTypes = ["客户名称", "联系人", "税号", "联系电话"];
  // 根据title获取dom中相应的输入框;todo:单选,多选等
  const inputs = [];
  for (let index = 0; index < inputTypes.length; index++) {
    const element = queryInputDom(inputTypes[index]);
    if (element) {
      element.value = inputTypes[index] + Math.random();
    }
  }
  // 填充随机数,根据字段格式填充
  // const taxnum = queryInputDom("税号");
  // taxnum.value = "1232142132";
  sendResponse({ fromcontent: "This message is from content.js" });
});

function queryInputDom(title) {
  const formItem = document.querySelector(
    `.ant-modal-body .ant-form-item-label>label[title="${title}"]`
  )?.parentNode.parentNode;
  const input =
    formItem &&
    formItem.querySelector(".ant-form-item-control-wrapper .ant-input");
  return input;
}
