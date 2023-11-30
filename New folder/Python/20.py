# college_name = "ABES Engineering College"
# def welcome ():
#     college_name = "ABES Engineering College, Ghaziabad"
#     print("Welcome to: ",college_name)

# welcome()
# print (college_name)



# def welcome ():
#     college_name = "ABES Engineering College"

#     def welcome_again ():

#         nonlocal college_name
#         college_name = "ABES Engineering College, Ghaziabad"
#         university_name = "AKTU"
#         print("Welcome to: ", university_name)

#     welcome_again()
#     print ("Welcome to: ",college_name)

# welcome()



# def cube (x):
#     return x*x*x;
# x = cube (3)
# print (x)



# def power (x, y=2):
#     r =1
#     for i in range (y):
#         r = r * x
#     return r
# print (power(3))
# print (power(3,3))



# SimpleInterest = lambda P, R, T: P * R *T
# print (SimpleInterest(400, 6, 7))



# y = 6
# z = lambda x : x * y
# print (z(8))



# def f1(f2):
#     return lambda x:f2(x) + 5
# def f2(x):
#     return (x+5)
# a =f1(f2)
# print(a(5))



# b = [1,2,3]
# a = map (str, b)
# print(list (a))



# str_uppercase = ["ABES", "ENGINEERING", "COLLEGE"]
# convert_map = map(str.lower, str_uppercase)
# str_lowercase = list (convert_map)
# print(str_lowercase)



# list_num = [1,2,3,4,5,6,7,8,9,10]
# a = filter (lambda x: x%2 == 0, list_num)
# print (a)
# print(list(a))



# from functools import reduce
# list1 = [2,3,4]
# sumtotal = reduce (lambda x, y:x+y, list1, 15)
# print(sumtotal)



# x = ['ab', 'cd']
# print(len(list(map(list, x))))



# x = [12,32]
# print(len(list(map(len, x))))



# def greater(a):
#     b=5
#     if a>b:
#         print("a is greater than b")
#     else:
#         print("b is greater than a")
# a=7
# greater(a)



# def greater(x, y):
#     if x > y:
#         print("x is greater than y")
#     else:
#         print("y is greater than x")
# a=7
# b=10
# greater(a, b)



# def greater(x, y):
#     if x>y:
#         print("x is greater than y")
#     else:
#         print("y is greater than x")
# greater(7, 10)



# def addition (a,b):
#     sum = a + b
#     return sum

# x= addition(9,10)
# print("The value of two number addition =", x)



# def add(a,b,c):
#     return (a+b+c)
# print(add(10,20,30))



# def fruits(*args):           #args is a tuple with arguments
#     for fruit in args:
#         print(fruit)
# fruits("Orange","Banana","Apple","Grapes")



# def fruits(**kwargs):            #kwargs is a dictionary with key value pairs

#     print(kwargs)
#     for fruit in kwargs.values():
#         print(fruit)

# fruits(fruit1="Orange", fruit2="Banana", fruit3="Apple", fruit4="Grapes")



a=3
print("Global",a)
def fun_scope():
    a=4
    print("Inside fun_scope",a)
    def fun_scope_1():
        a=5
        print("Inside fun_scope_1",a)
    fun_scope_1()
fun_scope()