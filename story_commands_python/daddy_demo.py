family_names = []

print('Provide names of your family. To stop, provide an empty name.')
while True:
  person = input('New Family Member Name: ')
  if person == '':
    break
  family_names.append(person)


print('Provide ages of your family.')
family_ages = []
for name in family_names:
  age = input(f'How old is {name}? ')
  family_ages.append(age)



for name, age in zip(family_names, family_ages):
  print(f'{name} is {age} years old')

