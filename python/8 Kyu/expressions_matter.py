def expression_matter(a, b, c):
    ans1 = a * (b + c)
    ans2 = a * b * c
    ans3 = a + b * c
    ans4 = (a + b) * c
    ans5 = a + b + c
    sort_list = sorted([ans1, ans2, ans3, ans4, ans5])
    return sort_list[4]