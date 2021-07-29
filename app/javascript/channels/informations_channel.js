import consumer from "./consumer"

consumer.subscriptions.create("InformationsChannel", {
  connected() {
    console.log('connected!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log('received!  ' + data.mycontent+ '  !!!')
    const storeElement = document.querySelector(".test")
    if (storeElement) {
      storeElement.innerHTML = data.mycontent
    }
  }
});
