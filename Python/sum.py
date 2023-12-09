def solve():
    n=int(input())
    lst=[]
    for i in range(0,n):
        x=int(input())
        lst.append(x)
    print(lst)
    
t=int(input())
while t:
    solve()
    t=t-1