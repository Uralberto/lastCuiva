

	const callback = (entries) =>  {
		entries.forEach((entry) => {
			const nodoVideo = entry.target
			const url = nodoVideo.dataset.src
			nodoVideo.src = url
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		})
	}

	const observer = new IntersectionObserver(callback, {threshold: 1});

	const observarVideo = (videos) => {
	videos.forEach((video) => observer.observe(video))
	}


	export {observarVideo}
