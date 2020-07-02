# Very simple, given a number, find its opposite.

# Examples:

# 1: -1
# 14: -14
# -34: 34

def opposite(number):
  print(number)
  if number < 0:
      return (number * -1)
  else:
      return (number - (number * 2))