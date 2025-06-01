document.querySelector('#main_form').addEventListener('submit', async e => {
	e.preventDefault()
	const senderName = document.querySelector('#sender_name').value
	const volume = Number(document.querySelector('#volume').value)
	const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
	chrome.tabs.sendMessage(tabs[0].id, {
		message: "start_reading",
		senderName,
		volume
	})
})
