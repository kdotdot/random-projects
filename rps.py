#Realizado en VIM por Carlos Gómez en algun momento
#durante la primavera de 2020 (COVID-19)
import random

puntuacion = [0,0,0] #Ganadas, Perdidas, Empatadas
jugadas = {
    1: "Piedra",
    2: "Papel",
    3: "Tijera"
}
inputJugador = 0
inputMaquina = 0

def jugadorJuega():
    global inputJugador
    inputJugador = int(input("1:Piedra, 2:Papel, 3:Tijera, 0:Salir "))
    #Mientras la respuesta no sea valida no continúa
    while inputJugador not in list(jugadas.keys()):
        if inputJugador ==0:
            print("ADIOS")
            exit()
        print("Input no valido. Por favor introduce de nuevo. ")
        inputJugador = int(input("1:Tijera, 2:Papel, 3:Piedra, 0:Salir "))

def maquinaJuega():
    global inputMaquina
    #Escoge un numero al azar entre 1 y 3
    inputMaquina = random.randint(1,3)

def evalJuego():
    global inputJugador
    global inputMaquina
    global puntuacion
    #Empate
    if inputJugador == inputMaquina:
        puntuacion[2] += 1
        print("Empate...")
    else:
        #Se comprueba si la situacion es favorable para el jugador
        if (inputJugador==3 and inputMaquina==2) or (inputJugador==2 and inputMaquina==3) or (inputJugador==1 and inputMaquina==2):
            puntuacion[1] += 1
            print("Gana la computadora")
        else:
            puntuacion[0] += 1
            print("Ganas tu!")

def mostrarResultados():
    global puntuacion
    print("-----\nVictorias: {} \nDerrotas: {}\nEmpates: {}\n-----".format(puntuacion[0],puntuacion[1],puntuacion[2]))
while(True):
    jugadorJuega()
    print("El jugador ha elegido {}".format(jugadas[inputJugador]))
    maquinaJuega()
    print("La maquina ha elegido {}".format(jugadas[inputMaquina]))
    evalJuego()
    mostrarResultados()
