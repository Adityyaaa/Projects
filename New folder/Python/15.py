cond1=1
while cond1<=3:
    print(cond1, "Outer loop executed")
    cond2=1

    while cond2<=3:
        print(cond2, "Inner loop")
        cond2+=1

    cond1+=1;    