new Granim({
  element: '#presentation',
  direction: 'top-bottom',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  image : {
    source: 'assets/images/background.jpg',
    blendingMode: 'multiply',
    stretchMode: ['stretch-if-smaller', 'stretch-if-smaller'],
  },
  states : {
    "default-state": {
      gradients: [
        ['#ff6b6b', '#556270'],
        ['#80d3fe', '#7ea0c4'],
        ['#f0ab51', '#eceba3'],
      ],
      transitionSpeed: 7000,
    },
  },
});
