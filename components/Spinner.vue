<template lang="pug" functional>
svg.spinner(height='254', viewBox='0 0 64 64')
  g(fill='#886aea')
    circle(cx='16', cy='32', stroke-width='0', r='3.34734')
      animate(attributeName='fill-opacity', dur='750ms', values='.5;.6;.8;1;.8;.6;.5;.5', repeatCount='indefinite')
      animate(attributeName='r', dur='750ms', values='3;3;4;5;6;5;4;3', repeatCount='indefinite')
    circle(cx='32', cy='32', stroke-width='0', r='3')
      animate(attributeName='fill-opacity', dur='750ms', values='.5;.5;.6;.8;1;.8;.6;.5', repeatCount='indefinite')
      animate(attributeName='r', dur='750ms', values='4;3;3;4;5;6;5;4', repeatCount='indefinite')
    circle(cx='48', cy='32', stroke-width='0', r='3.65266')
      animate(attributeName='fill-opacity', dur='750ms', values='.6;.5;.5;.6;.8;1;.8;.6', repeatCount='indefinite')
      animate(attributeName='r', dur='750ms', values='5;4;3;3;4;5;6;5', repeatCount='indefinite')
</template>