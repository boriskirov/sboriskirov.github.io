const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="4" ry="4"/><rect x="12" y="9" width="17" height="3" style="fill:#fff431"/><rect x="12" y="36" width="24" height="3" style="fill:#2ecbff"/><rect x="1.5" y="22.5" width="24" height="3" transform="translate(37.5 10.5) rotate(90)" style="fill:#47ff8c"/><rect x="24.5" y="27.5" width="20" height="3" transform="translate(63.5 -5.5) rotate(90)" style="fill:#922cff"/><polygon points="26 19 26 12 26 9 29 9 29 12 33 12 33 16 36 16 36 19 33 19 26 19" style="fill:#fa6a66"/><polygon points="26 9 22.62 12 26 12 26 9" style="fill:#99931f"/><polygon points="33 19 36 19 33 22.82 33 19" style="fill:#581b9f"/></svg>'

miro.onReady(() => {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'GIPHY',
        toolbarSvgIcon: icon,
        librarySvgIcon: icon,
				onClick: function () {
					miro.board.openLibrary('GIPHY', 'https://sboriskirov.github.io/Giphy-test/library.html')
				}
			}
		}
	})
})


