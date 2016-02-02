# Zenefits q1 SellTicket

# Read and save Input
first_line = (input())
first_line_arg = first_line.split(' ')
second_line = (input())
second_line_arg = second_line.split(' ')

n = int(first_line_arg[0])
m = int(first_line_arg[1])
a = []
for arg in second_line_arg:
    a.append(int(arg))

# Variables
remaining_tickets = m
max_profit = 0
index_max_window = 0

while remaining_tickets > 0:
    current_max = max(a)
    index_max = a.index(current_max)
    max_profit += current_max
    a[index_max] = a[index_max] - 1
    remaining_tickets-=1

print(max_profit)