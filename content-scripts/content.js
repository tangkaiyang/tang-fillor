// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   $("head").prepend(
//     `<style>
//        .slide-image {
//           height: auto;
//           width: 100vw;
//         }
//       </style> `
//   );
//   $("body").prepend(
//     `<img  src="${request.url}" id="${request.imageDivId}" 
//            class="slide-image" /> `
//   );
//   $(`#${request.imageDivId}`).click(function () {
//     $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
//   });
//   sendResponse({ fromcontent: "This message is from content.js" });
// });

// function queryInputDom(title) {
//   const formItem = document.querySelector(
//     `.ant-modal-body .ant-form-item-label>label[title="${title}"]`
//   )?.parentNode.parentNode;
//   const input =
//     formItem &&
//     formItem.querySelector(".ant-form-item-control-wrapper .ant-input");
//   return input;
// }
