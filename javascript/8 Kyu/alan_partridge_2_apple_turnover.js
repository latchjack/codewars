// Alan Partridge II - Apple Turnover

// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be either a number or a string. Both are valid.

function apple(x){
  const temp = 1000
  const bramley = parseInt(Math.pow(x, 2))
  if (bramley > temp) {
    return 'It\'s hotter than the sun!!'
  } else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
} 