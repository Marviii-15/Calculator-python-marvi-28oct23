num1 = float(input("Introduce tu primer número: ") )
num2 = float(input("Introduce tu segundo número: ") )

opcion = 0
while True:
    print("""
    Dime, ¿qué quieres hacer?
    
    1) Suma
    2) Restar
    3) Multiplicar
    4) Dividir
    5) Cambiar los números elegidos
    6) Apagar calculadora
    """)
    opcion = int(input("Elige una opción: ") )     

    if opcion == 1:
        print(" ")
        print("RESULTADO: La suma de",num1,"+",num2,"es igual a",num1+num2)
    elif opcion == 2:
        print(" ")
        print("RESULTADO: La resta de",num1,"-",num2,"es igual a",num1-num2)
    elif opcion == 3:
        print(" ")
        print("RESULTADO: El producto de",num1,"*",num2,"es igual a",num1*num2)
    elif opcion == 4:
        print(" ")
        print("RESULTADO: El producto de",num1,"/",num2,"es igual a", num1/num2)
    elif opcion == 5:
        n1 = float(input("Introduce tu primer número: ") )
        n2 = float(input("Introduce tu segundo número: ") )
    elif opcion == 6:
        break
    else:
        print("Opción incorrecta")