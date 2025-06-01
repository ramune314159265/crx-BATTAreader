const observer = new MutationObserver((list) => {
	list.forEach(mutation => {
		mutation.addedNodes.forEach(node => {
			const author = node.querySelector('#author-name')
			if (!author || author.innerText !== '【NANO】Hakase_AU_BATTA') {
				return
			}
			const messageElement = node.querySelector('#message')
			if (!messageElement) {
				return
			}
			const message = messageElement.innerText
			const ssu = new SpeechSynthesisUtterance(message)
			speechSynthesis.speak(ssu)
		})
	})
})

const subscribe = () => {
	const chatFrame = document.querySelector("#chatframe")
	if (!chatFrame) {
		console.log('チャットフレームの取得に失敗しました')
		return
	}
	const chatElement = chatFrame.contentDocument.querySelector("#items")
	if (!chatElement) {
		console.log('チャットの取得に失敗しました')
		return
	}

	observer.observe(chatElement, { childList: true })
}

chrome.runtime.onMessage.addListener(request => {
	switch (true) {
		case (request.message === 'start_reading'):
			subscribe()
			break
		default:
			break
	}
})
