$('.gallery-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.burger-wrap').click(function () {
	$('.header__navigation').toggleClass('header__navigation--open');
	$('.burger').toggleClass('burger--close');
});

const toggleClass = (id, className) => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.toggle(className);
	} else {
		console.error('Element with ID ' + id + ' not found.');
	}
};

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};

const sidebar = {};
document.addEventListener('DOMContentLoaded', function () {
	/* ACCARDION CODE */
	const accordionButtons = document.querySelectorAll('.accordion-button');

	accordionButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const content = this.nextElementSibling;
			const activeContent = document.querySelector(
				'.accordion-content[style]'
			);

			if (activeContent && activeContent !== content) {
				activeContent.style.maxHeight = null;
				activeContent.previousElementSibling.classList.remove('active');
			}

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				this.classList.remove('active');
			} else {
				content.style.maxHeight = content.scrollHeight + 'px';
				this.classList.add('active');
			}
		});
	});

	/* Sidebar active menu, hide menu items */
	const items = document.querySelectorAll('.main-content__nav-item');
	const _subitem = {};
	for (const item of items) {
		if (item.getAttribute('item-url') === location.pathname) {
			item.classList.add('main-content__nav-item--active');

			sidebar.item = item;

			if (item.children.length > 1 && item.children[1].children.length) {
				item.children[1].children[0].classList.add(
					'main-content__nav-in-item--active'
				);

				for (const subitem of item.children[1].children) {
					if (
						subitem.children.length &&
						subitem.children[0].href &&
						subitem.children[0].href.split('#').length > 1
					) {
						_subitem[subitem.children[0].href.split('#')[1]] =
							subitem;
					}
				}
			}
		}
	}

	const itemBlocks = document.querySelectorAll('.item-block');

	if (!itemBlocks.length) {
		return;
	}

	itemBlocks[0].focused = true;

	const start = itemBlocks[0].offsetTop;

	const setItemBlock = (itemBlock) => {
		for (const _itemBlock of itemBlocks) {
			_itemBlock.focused = false;
		}

		for (const subitem in _subitem) {
			_subitem[subitem].classList.remove(
				'main-content__nav-in-item--active'
			);
		}

		itemBlock.focused = true;

		if (_subitem[itemBlock.id]) {
			_subitem[itemBlock.id].classList.add(
				'main-content__nav-in-item--active'
			);
		}
	};

	window.onscroll = function () {
		for (const itemBlock of itemBlocks) {
			const startPoint = itemBlock.offsetTop - start;
			const endPoint = startPoint + itemBlock.offsetHeight;

			if (window.scrollY >= startPoint && window.scrollY < endPoint) {
				if (!itemBlock.focused) {
					setItemBlock(itemBlock);
				}

				break;
			}
		}
	};
});
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (window.scrollY > 50) {
		// или любое другое значение, которое подходит для твоей страницы
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

/*---------store-product---------- */
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.product__thumbs img');

if (thumbs.length > 0) thumbs[0].classList.add('active');

thumbs.forEach((thumb) => {
	thumb.addEventListener('click', () => {
		mainImage.src = thumb.src;

		thumbs.forEach((t) => t.classList.remove('active'));
		thumb.classList.add('active');
	});
});
