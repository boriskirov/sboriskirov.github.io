const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.a{fill:#fff431;}.b{fill:#2ecbff;}.c{fill:#47ff8c;}.d{fill:#922cff;}.e{fill:#fa6a66;}.f{fill:#99931f;}.g{fill:#581b9f;}</style></defs><title>giphy-icon</title><rect width="48" height="48" rx="4" ry="4"/><rect class="a" x="12" y="9" width="17" height="3"/><rect class="b" x="12" y="36" width="24" height="3"/><rect class="c" x="1.5" y="22.5" width="24" height="3" transform="translate(37.5 10.5) rotate(90)"/><rect class="d" x="25" y="27" width="19" height="3" transform="translate(63 -6) rotate(90)"/><polygon class="e" points="26 19 26 12 26 9 29 9 29 12 33 12 33 16 36 16 36 19 33 19 26 19"/><polygon class="f" points="26 9 22.62 12 26 12 26 9"/><polygon class="g" points="33 19 36 19 33 22.82 33 19"/></svg>'

miro.onReady(() => {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'GIPHY',
        toolbarSvgIcon: icon,
        librarySvgIcon: icon,
				onClick: function () {
					miro.board.openLibrary('GIPHY', 'library.html')
				}
			}
		}
	})
})


