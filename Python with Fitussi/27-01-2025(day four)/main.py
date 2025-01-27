class Heroe: 
    def __init__(self, first_name, last_name, power, weakness):
        self.first_name = first_name
        self.last_nam = last_name
        self.power = power
        self.weakness = weakness

    def greet(self):
        print(f'{self.first_name} says hello')

    def attack(self):
        print(f'{self.power}')

    def defeat(self):
        print(f'{self.weakness}')

heroe1 = Heroe("Peter", "Parker", "web in your face", "rempt")
heroe2 = Heroe("Tony", "Stark", "Boom", "alcohool")
heroe3 = Heroe("Steve", "Rogers", "shield punch", "ice-coffe")
heroe4 = Heroe("Frank", "Castle", "Shoot your ass", "Camomile tea")

heroe1.greet()
heroe2.attack()
heroe3.defeat()
heroe4.attack()