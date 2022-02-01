export default function(node) {
	const setHeight = (detail, open = false) => {
		detail.open = open;
		const rect = detail.getBoundingClientRect();
		detail.dataset.width = rect.width;
		detail.style.setProperty(open ? `--expanded` : `--collapsed`,`${rect.height}px`);
	}
	const RO = new ResizeObserver(entries => {
		return entries.forEach(entry => {
			const detail = entry.target;
			const width = parseInt(detail.dataset.width, 10);
			if (width !== parseInt(entry.contentRect.width, 10)) {
				detail.removeAttribute('style');
				setHeight(detail);
				setHeight(detail, true);
				detail.open = false;
			}
		})
	});
	RO.observe(node);
	
	return {
		destroy() {
			RO.unobserve(node)
		}
	}
}