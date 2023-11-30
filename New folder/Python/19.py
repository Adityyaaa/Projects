
# st=''
# print (st)


# st=""
# print (st)


# st=str()


# st="abes"
# print (st)


# st='I LIKE PYTHON'
# print(st[2:6])
# print(st[0:6:2])
# print(st[12:6:-1])


# st='I Like Python'
# print(st[:6])
# print(st[-11:-7])
# print(st[7:])
# print(st[::-1])


# message="Welcome to Mysore"
# word=message[-7:]
# if(word=="mysore"):
#     print("Got it")
# else:
#     message=message[3:14]
#     print(message)


# example="ABES Engineering College"
# print("%s"%example[2:7])


# st='I like what you like'
# n=st.count('i')
# print(n)


# st='I like pythoN'
# stnew= st.casefold()
# print(stnew)


# st= 'i like python'
# stnew= st.capitalize()
# print(stnew)


# st='I Like Python'
# stnew= st.swapcase()
# print(stnew)


# st= 'i like python'
# stnew= st.upper()
# print(stnew)


# st='I LIKE PYTHON'
# stnew= st.lower()
# print(stnew)


# st= 'I like python'
# stnew= st.replace('python', 'java')
# print(stnew)


# st= 'I like python'
# stnew= st.title()
# print(stnew)


# st='I Like Python'
# stnew= st.split()
# print(stnew)


# st= 'Python'
# stnew= '-'.join(st)
# print(stnew)


# st= '   I Like Python    '
# stnew= st.strip()
# print(stnew)


# st= 'Python3'
# print(st.isalnum())


# st= 'Python-3'
# print(st.isalnum())


# st= 'Python'
# print(st.isalpha())


# st= '123'
# print(st.isdecimal())


# st= 'Python34'
# print(st.isdecimal())

# st= 'python'
# print(st.islower())


# st= 'Python'
# print(st.islower())


# st1='Go'
# st2='ing'
# print(st1 + st2)


# st='Python'
# print(st*3)


# st='I Like Python'
# print('Python' in st)


# st='I Like Python'
# print('Java' in st)


# tuple_days= ('Monday','Tues','Wed','Thurs','Fri')

# for i in tuple_days:
#     if len(i)>3:
#         print(i)


# tup1= tuple(input("Enter first tuple\n").split())
# tup2= tuple(input("Enter second tuple\n").split())

# if(tup1[0]== tup2[0]):
#     print(tup1+ tup2)
# else:
#     print("First element not same")



# #empty dictionary
# d= dict()
# print(d)
# type(d)


# d={'name':'Harsh', 'empcode':1219, 'subject':'Python'}
# print(d)
# print(d['name'])
# print(d['subject'])


# dict1={'opt1':'python','opt2':'Java','opt3':'C','opt4':"C++"}
# print(dict1['opt1'])


# dict1={1:2, 2:4, 4:8, 8:16, 16:32}
# print(len(dict1))


# d={'name':'Harsh', 'empcode':1219, 'subject':'Python'}
# print(d['name'])
# d['name']='Harsh Khatter'
# print(d['name'])


# room={1:'Store', 2:'Kitchen'}
# temp=room[1]
# room[1]=room[2]
# room[2]=temp
# print(room)


# d={'name':'Harsh', 'subject':'Python'}
# print(d['name'])
# d['firstname']='Harsh'
# print(d)


# s1='hellohow'
# for i in range(len(s1)):
#     print(s1,end="")
#     s1='a'


# #Creating a Nested Dictionary
# dt={1:'HELLO', 2:'to', 3:{'A':'Welcome','B':'To','C':2021}}
# print(dt)


# floor1={1:'Store', 2:'Kitchen'}
# floor2=floor1
# floor3=floor1.copy()
# print(floor1)
# print(floor2)
# print(floor3)
# print(id(floor1)==id(floor2))
# print(id(floor1)==id(floor3))


# key=(1,2,3,4)
# value='xyz'
# sqr={}
# print(sqr.fromkeys(key,value))


# std= {'name':'Bob', 'age':24, 'phone':[12345, 23456]}
# print(std.get('name'))
# print(std.get('gender'))
# print(std.get('gender','M'))


# std= {'name':'Bob', 'age':24, 'phone':[12345, 23456]}
# print(std.keys())
# print(std.values())
# print(std.items())


# A= {1:1, 2:4, 4:8, 6:36}
# B= {3:9, 5:25}
# A.update(B)
# print(A)
# print(B)


# A= {1:1, 2:4, 4:8, 6:36}
# A.pop(6)
# print(A)


# A= {1:1, 2:4, 4:8, 6:36}
# A.popitem()
# print(A)


# dict1= {1:1, 2:4, 4:8, 6:36}
# for key in dict1.keys():
#     print(key)


# dict1= {1:1, 2:4, 4:8, 6:36}
# for val in dict1.values():
#     print(val)


# dict1= {1:1, 2:4, 4:8, 6:36}
# for item in dict1.items ():
#     print(item)


# dict1= {1:1, 2:4, 4:8, 6:36}
# for i,j in dict1.items ():
#     print(i,":",j)


# newdict= {}
# for i in range(1,6):
#     newdict[i]=i*i
# print(newdict)


# s1= set()
# print(s1)
# print(type(s1))


# s1= {8,3,15,31,8,10,31,9,2,4}
# print(s1)


# set1 ={"mango", "banana", "orange"}
# count= len(set1)
# print(count)


# myset={"name",2, "age", True, 12.8}
# print(myset)


# set_str= set("ABESEC")
# print(set_str)


# set_access={7,6,1,4,3,1,7}
# print(set_access)


# set1 ={"mango", "banana", "orange"}
# set2=set1.copy()
# print(set2)


# def basic_details ():
#     name = input("Enter student's name: ")
#     branch = input("Enter student's branch: ")
#     batch = input("Enter student's batch: ")
#     age = input("Enter student's age: ")
#     aadharNo = input("Enter student's aadharNo: ")

# basic_details()


# def marks ():
#     englishMarks = int(input("Enter student's english marks: "))
#     physicMarks = int(input("Enter student's english marks: "))
#     chemistryMarks = int(input("Enter student's english marks: "))
#     mathsMarks = int(input("Enter student's english marks: "))
# marks()


# def work():
#     print("Enter the type of work done: ")
#     work = input()
# work()


# def greater (a):
#     b=5
#     if a<b:
#         print("a is greater than b")
#     else:
#         print("b is greater than a")
# a = int(input("Enter number "))
# greater(a)


# line = "Hello how are you"
# L = line.split('a')
# for i in L:
#     print(i, end='')


# def addition (a,b):
#     sum = a+b
#     return sum


# s = int(input("Enter value: "))
# v = int(input("Enter value: "))
# x = addition(s, v)
# print("The value of two number addition = ",x)


# def f(x,y,z): return x + y + z
# x = f(2,30,400)
# print(x)


# def add(a,b,c):
#     return(a+b+c)
# x=add(b=10, c=15, a=20)
# print(x)


# def fruits(*args):     #args is a tuple with arguments
#     for fruits in args:
#         print(fruits)
# fruits("Orange","Banana","Apple","Grapes")


# def fruits(**kwargs):
#     print(kwargs)
#     for fruits in kwargs.values():
#         print(fruits)

# fruits(fruit1="Oran ge", fruit2="Banana", fruit3="Apple", fruit4="Grapes")


# Perfect Number-

def perfect_num(n):
    sum = 0
    for i in range(1,n):
        if n%i == 0:
            sum = sum +i
    if(sum == n):
        return True
    else:
        return False
for i in range(1,1001):
    if(perfect_num(i)):
        print(i)
