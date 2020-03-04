const icon = '<img src="giphy-icon.svg"></img>'

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


