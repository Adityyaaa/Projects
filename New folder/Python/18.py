# a = 425
# print(type(a))


# a=32
# print(id(a))


# x=2
# print(dir(x))


# a=8
# b=9
# x=a/b
# print(complex(x))


# a=float(input("Enter the value: "))
# print(a)
# print(type(a))


# a=str(input( ))
# b=str(input( ))
# c=str(input( ))
# print(a,b,c,sep='..')


# a=int(input("a= "))
# b=int(input("b= "))
# c=a//b
# print(c)


# a=int(input("a= "))
# b=int(input("b= "))
# c=a**b
# print(c)


# a=10
# b=20
# print(a<b)
# print('hello'=='hello')
# print(not a)


# a=int(input("Enter marks: "))
# if a>50:
#     print("Excellent")
# elif a>40:
#     print("Bad")


# cond1=1
# while cond1<=3:
#     print(cond1,"Outer loop executed")
#     cond2=1
#     while(cond2<=3):
#         print(cond2,"Inner loop executed")
#         cond2+=1
#     cond1+=1


# num1=16
# num2=6
# while(num1>=2):
#     if(num1>num2):
#         num1=num1/2
#     else:
#         print(num1)
#         break


# a=list(range(0,10,2))
# print(a)


# a=5
# for i in range(1,11):
#     print(i, "* 5=",i*5)


# for i in range(2) :
#     for j in range(3) :
#         print( 'Value of i=',i, 'Value of j=',j)


# str='Technology'
# for i in range(len(str)):
#     str[i].upper()
# print(str[4])


# i=1
# while i<5:
#     if i==3:
#         i+=1
#         continue
#     print(i)
#     i+=1
# print("All done!")


# for i in range(11):
#     if(i==5):
#         i+=1
#     print(i)
# else:
#     print("Loop executed!")


color_name=['Blue','Black','Red','Green']
name= input("Enter color to be searched ")
for c in color_name:
    if name==c:
        print(c,"color found in list ")
        break
    else:
        print("Color name is not found in list")