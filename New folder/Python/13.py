"""i=1
while(i<5):
    print(i)
    i=i+1 """



"""num1=16
num2=6
while(num1>=2):
    if(num1>num2):
        num1=num1/2
    else:
        print(num1)
        break"""



"print (list(range(1,5)))"



"""for i in range (10):
    print(i)"""



"""for i in range(2):
    for j in range(3):
        print('value of i-', i, 'value of j-', j)"""



"""i=1
while i<5:

    if i==3:
        i+=1
        continue

    print (i)
    i+=1

print("All done")"""



"""i=1
while i<5:

    if i==3:
        break

    print (i)
    i+=1

print("All done")"""



"""cond=1
while(cond<5):

    print(cond)

    cond+=1
else:

    print("Else part is executed")"""



"""cond=1
while(cond<5):

    print(cond)

    cond+=1

    if(cond==3):
         break

else:

    print("Else part is executed")"""



"""for i in range(5):
    print(i)
else:
    print("Loop finished, i am in else")1.py"""



"""Nestedlist=[[1,2],[3,4],[5,6]]
print(Nestedlist[2][1])"""



"""listexample=[1,2,3,4,"Hello"]
length=len(listexample)
i=0
while(i<length):
    print(listexample[i])
    i+=1"""



"""listexample=[1,2,3,4,"Hello"]
for i in listexample:
    print(i)"""



"""inputlist=input("Please enter list element of type integer\n").split()
for i in inputlist:
    if(int(i)>0):
        print(i)"""



"""pow2=[]
for x in range(10):
    pow2.append(3**x)
print(pow2)"""



"""pow2=[3**x for x in range(10)]
print(pow2)"""



"""list1=[x for x in range(20) if x%2==0]
print(list1)"""



"""t=[p**+1 for p in range(6)]
print(t)"""



"""b=[[3,4,5],[6,7,8],[9,10,11]]
[print(b[i][len(b)-1-i]) for i in range(len(b))]"""



inputlist=input("please enter list element").split()
a=int(input("enter 1st element index to swap"))
b=int(input("enter 2nd element index to swap"))
length=len(inputlist)
if(a>=length or b>=length):
    print("Indexes are out of boundry of input list")
else:
    print("Original List: ",inputlist)
    temp= inputlist[a]
    inputlist[a]=inputlist[b]
    inputlist[b]=temp
    print("List after swapping: ",inputlist)