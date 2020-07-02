def solution(number):
    three_five_list = []
    three_list = []
    five_list = []
    
    for num in range(0, number):
        if num % 3 == 0 and num % 5 == 0:
            three_five_list.append(num)
        if num % 5 == 0:
            five_list.append(num)
        if num % 3 == 0:
            three_list.append(num)
    new_list = three_five_list + five_list + three_list
    no_dups = list(dict.fromkeys(new_list))
    all = sum(no_dups)
    return all 