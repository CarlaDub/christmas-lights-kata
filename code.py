class Lights:
  def __init__(self, off, on):
    self.off = off
    self.on = on
    self.state = 0  # 0 = off, 1 = on

    def turn_on(self):
        self.state = 1

    def turn_off(self):
        self.state = 0

    def toggle(self):
        if self.state == 0:
            self.turn_on()
        else:
            self.turn_off()

print(p1.off, p1.on)
print(p2.off, p2.on)

p1.turn_on()
print("p1 state:", p1.state)

p2.turn_off()
print("p2 state:", p2.state)
